const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, Globe, Brain, ArrowRight, Route, Mic } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";

const LOGO_URL = "/images/suprazo-logo.png";

const PRODUCT_ITEMS = [
  { nameKey: "product.corpool", descKey: "product.corpool.desc", icon: Route, hash: "corpool" },
  { nameKey: "product.interviewai", descKey: "product.interviewai.desc", icon: Mic, hash: "interview-ai" },
  { nameKey: "product.mockprep", descKey: "product.mockprep.desc", icon: Brain, hash: "mockprep" },
];

const ECOSYSTEM_ITEMS = [
  { nameKey: "ecosystem.suprazo", descKey: "ecosystem.suprazo.desc", path: "/about" },
  { nameKey: "ecosystem.suprathon", descKey: "ecosystem.suprathon.desc", path: "/community" },
  { nameKey: "ecosystem.sufalpra", descKey: "ecosystem.sufalpra.desc", path: "/foundation" },
];

const LANGS = [
  { code: "en", labelKey: "lang.en" },
  { code: "hi", labelKey: "lang.hi" },
];

function NavItem({ to, label, active, onClick }) {
  return (
    <Link to={to} onClick={onClick} className="relative group text-[13px] font-medium tracking-wide uppercase transition-colors duration-300 text-navy hover:text-gold py-2">
      {label}
      <span className={`absolute left-0 -bottom-0.5 h-0.5 w-full bg-gold origin-left transition-transform duration-300 ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
    </Link>
  );
}

export default function Navbar() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setOpenDropdown(null); }, [location.pathname]);
  useEffect(() => {
    const onClick = (e) => {
      if (!e.target.closest('[data-lang-switcher]')) setLangOpen(false);
      if (!e.target.closest('[data-dropdown]')) setOpenDropdown(null);
      if (!e.target.closest('[data-mobile-menu]') && !e.target.closest('[data-hamburger]')) {
        setMobileOpen(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const isActive = (paths) => paths.some(p => p === location.pathname || (p !== "/" && location.pathname.startsWith(p)));

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white/80 backdrop-blur-sm"}`}>
      <div className="max-w-[1400px] mx-auto px-3 lg:px-16">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
              <img src={LOGO_URL} alt="SuPrazo Technologies" fetchPriority="high" decoding="async" className="h-[45px] sm:h-[55px] md:h-[70px] lg:h-[90px] w-auto object-contain" />
           </Link>

          <div className="hidden xl:flex items-center gap-7">
            <NavItem to="/" label={t('nav.home')} active={location.pathname === "/"} />

            {/* Ecosystem Dropdown */}
            <div className="relative" data-dropdown onMouseEnter={() => setOpenDropdown("ecosystem")} onMouseLeave={() => setOpenDropdown(null)}>
              <button className={`flex items-center gap-1 text-[13px] font-medium tracking-wide uppercase transition-colors duration-300 py-2 ${openDropdown === "ecosystem" ? "text-gold" : "text-navy hover:text-gold"}`}>
                {t('nav.ecosystem')} <ChevronDown size={14} className={`transition-transform ${openDropdown === "ecosystem" ? "rotate-180" : ""}`} />
                <span className={`absolute left-0 -bottom-0.5 h-0.5 bg-gold origin-left transition-transform duration-300 ${openDropdown === "ecosystem" ? "scale-x-100" : "scale-x-0"}`} />
              </button>
              <AnimatePresence>
                {openDropdown === "ecosystem" && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2 }} className="absolute top-full left-0 pt-3 w-72">
                    <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
                      {ECOSYSTEM_ITEMS.map((item) => (
                        <Link key={item.path} to={item.path} className="group flex items-start gap-3 p-4 hover:bg-alabaster transition-colors border-b border-gray-50 last:border-0">
                          <ArrowRight size={14} className="text-gold mt-1 shrink-0 group-hover:translate-x-1 transition-transform" />
                          <div>
                            <div className="text-sm font-semibold text-navy">{t(item.nameKey)}</div>
                            <div className="text-xs text-navy/50 mt-0.5">{t(item.descKey)}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Products Dropdown */}
            <div className="relative" data-dropdown onMouseEnter={() => setOpenDropdown("products")} onMouseLeave={() => setOpenDropdown(null)}>
              <button onClick={() => { setOpenDropdown(null); navigate("/products"); }} className={`flex items-center gap-1 text-[13px] font-medium tracking-wide uppercase transition-colors duration-300 py-2 ${openDropdown === "products" ? "text-gold" : "text-navy hover:text-gold"}`}>
                {t('nav.products')} <ChevronDown size={14} className={`transition-transform ${openDropdown === "products" ? "rotate-180" : ""}`} />
                <span className={`absolute left-0 -bottom-0.5 h-0.5 bg-gold origin-left transition-transform duration-300 ${openDropdown === "products" ? "scale-x-100" : "scale-x-0"}`} />
              </button>
              <AnimatePresence>
                {openDropdown === "products" && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2 }} className="absolute top-full left-0 pt-3 w-72">
                    <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
                      {PRODUCT_ITEMS.map((item) => (
                        <Link key={item.hash} to={`/products#${item.hash}`} className="group flex items-start gap-3 p-4 hover:bg-alabaster transition-colors border-b border-gray-50 last:border-0">
                          <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                            <item.icon size={16} className="text-gold" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-semibold text-navy">{t(item.nameKey)}</div>
                            <div className="text-xs text-navy/50 mt-0.5">{t(item.descKey)}</div>
                          </div>
                          <ArrowRight size={14} className="text-gold mt-1 shrink-0 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavItem to="/directors-office" label={t('nav.directors')} active={isActive(["/directors-office"])} />
            <NavItem to="/careers" label={t('nav.careers')} active={isActive(["/careers", "/careers/apply"])} />
            <NavItem to="/contact" label={t('nav.contact')} active={location.pathname === "/contact"} />

            {/* Language Switcher */}
            <div className="relative" data-lang-switcher>
              <button onClick={() => setLangOpen(!langOpen)} className="flex items-center gap-1.5 text-[13px] font-medium tracking-wide text-navy hover:text-gold transition-colors duration-300 pl-3 border-l border-gray-200">
                <Globe size={15} /> {LANGS.find(l => l.code === lang)?.labelKey ? t(LANGS.find(l => l.code === lang).labelKey) : 'EN'} <ChevronDown size={12} className={`transition-transform ${langOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2 }} className="absolute top-full right-0 pt-2 w-32">
                    <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
                      {LANGS.map((l) => (
                        <button key={l.code} onClick={() => { setLang(l.code); setLangOpen(false); }} className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${lang === l.code ? "bg-gold/10 text-gold" : "text-navy hover:bg-alabaster"}`}>
                          {t(l.labelKey)}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile: Language + Hamburger */}
          <div className="flex items-center gap-4 xl:hidden">
            <div className="relative" data-lang-switcher>
              <button onClick={() => setLangOpen(!langOpen)} className="flex items-center gap-1 text-sm font-medium text-navy hover:text-gold transition-colors">
                <Globe size={16} /> {lang === 'hi' ? 'हिं' : 'EN'}
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2 }} className="absolute top-full right-0 pt-2 w-32">
                    <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
                      {LANGS.map((l) => (
                        <button key={l.code} onClick={() => { setLang(l.code); setLangOpen(false); }} className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${lang === l.code ? "bg-gold/10 text-gold" : "text-navy hover:bg-alabaster"}`}>{t(l.labelKey)}</button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button onClick={() => { setMobileOpen(prev => !prev); setOpenDropdown(null); }} onMouseDown={(e) => e.stopPropagation()} data-hamburger className="text-navy p-1 hover:text-gold transition-colors">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="xl:hidden bg-white border-t border-gray-100 overflow-hidden" data-mobile-menu>
            <div className="px-6 py-6 flex flex-col gap-1">
              <Link to="/" onClick={() => { setOpenDropdown(null); setMobileOpen(false); }} className="text-sm font-medium tracking-wide uppercase py-3 text-navy border-b border-gray-50">{t('nav.home')}</Link>

              <button type="button" onMouseDown={(e) => e.stopPropagation()} onClick={() => setOpenDropdown(openDropdown === "m-eco" ? null : "m-eco")} className="flex items-center justify-between text-sm font-medium tracking-wide uppercase py-3 text-navy border-b border-gray-50 hover:text-gold transition-colors">
                {t('nav.ecosystem')} <ChevronDown size={14} className={`transition-transform ${openDropdown === "m-eco" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "m-eco" && (
                <div onMouseDown={(e) => e.stopPropagation()} className="flex flex-col gap-1 pl-4 pb-2">
                  {ECOSYSTEM_ITEMS.map((item) => (
                    <Link key={item.path} to={item.path} onClick={() => { setOpenDropdown(null); setMobileOpen(false); }} className="py-2 text-sm text-navy/70 hover:text-gold">{t(item.nameKey)}</Link>
                  ))}
                </div>
              )}

              <button type="button" onMouseDown={(e) => e.stopPropagation()} onClick={() => {
                if (openDropdown === "m-prod") {
                  setOpenDropdown(null);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  if (location.pathname !== "/products") navigate("/products");
                } else {
                  setOpenDropdown("m-prod");
                }
              }} className="flex items-center justify-between text-sm font-medium tracking-wide uppercase py-3 text-navy border-b border-gray-50 hover:text-gold transition-colors">
                {t('nav.products')} <ChevronDown size={14} className={`transition-transform ${openDropdown === "m-prod" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "m-prod" && (
                <div onMouseDown={(e) => e.stopPropagation()} className="flex flex-col gap-1 pl-4 pb-2">
                  {PRODUCT_ITEMS.map((item) => (
                    <Link key={item.hash} to={`/products#${item.hash}`} onClick={() => { setOpenDropdown(null); setMobileOpen(false); }} className="py-2 text-sm text-navy/70 hover:text-gold">{t(item.nameKey)}</Link>
                  ))}
                </div>
              )}

              <Link to="/directors-office" onClick={() => { setOpenDropdown(null); setMobileOpen(false); }} className="text-sm font-medium tracking-wide uppercase py-3 text-navy border-b border-gray-50">{t('nav.directors')}</Link>
              <Link to="/careers" onClick={() => { setOpenDropdown(null); setMobileOpen(false); }} className="text-sm font-medium tracking-wide uppercase py-3 text-navy border-b border-gray-50">{t('nav.careers')}</Link>
              <Link to="/contact" onClick={() => { setOpenDropdown(null); setMobileOpen(false); }} className="text-sm font-medium tracking-wide uppercase py-3 text-navy">{t('nav.contact')}</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
