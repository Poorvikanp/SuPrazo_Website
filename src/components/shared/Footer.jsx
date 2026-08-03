const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Instagram } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

const LOGO_URL = "/images/suprazo-logo.png";

export default function Footer() {
  const { t } = useLang();

  const QUICK_LINKS = [
    { label: t('nav.home'), path: "/" },
    { label: t('nav.about'), path: "/about" },
    { label: t('nav.products'), path: "/products" },
    { label: t('nav.directors'), path: "/directors-office" },
    { label: t('nav.careers'), path: "/careers" },
    { label: "SuFalPra Foundation", path: "/foundation" },
    { label: t('nav.contact'), path: "/contact" },
  ];

  const PRODUCTS = [
    { label: "CorPool", path: "/products#corpool" },
    { label: "HireMe", path: "/products#hireme" },
    { label: "MockPrep AI", path: "/products#mockprep" },
  ];

  const SOCIALS = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/suprazo-technologies/?viewAsMember=true", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/suprazo.official/", label: "Instagram" },
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-12 md:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
          {/* Column 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
             <img src={LOGO_URL} alt="SuPrazo Technologies" className="h-10 sm:h-12 w-auto object-contain brightness-0 invert mb-4 sm:mb-6 mx-auto sm:mx-0" />
             <p className="text-white/60 text-sm leading-relaxed mb-6 sm:mb-8">
               {t('footer.desc')}
             </p>

             {/* Social Icons */}
             <div className="flex gap-3 justify-center sm:justify-start">
              {SOCIALS.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-all duration-300 hover:-translate-y-0.5"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center sm:text-left">
             <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-4 sm:mb-6">
               {t('footer.quickLinks')}
             </h4>
             <div className="flex flex-col gap-2 sm:gap-3 items-center sm:items-start">
              {QUICK_LINKS.map((link, i) => (
                <Link
                  key={i}
                  to={link.path}
                  className="text-white/60 hover:text-gold text-sm transition-colors duration-300 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Products */}
          <div className="text-center sm:text-left">
             <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-4 sm:mb-6">
               {t('footer.products')}
             </h4>
             <div className="flex flex-col gap-2 sm:gap-3 items-center sm:items-start">
              {PRODUCTS.map((p, i) => (
                <Link
                  key={i}
                  to={p.path}
                  className="text-white/60 hover:text-gold text-sm transition-colors duration-300 w-fit"
                >
                  {p.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Contact */}
          <div className="text-center sm:text-left">
             <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-4 sm:mb-6">
               {t('footer.getInTouch')}
             </h4>
             <div className="flex flex-col gap-2 sm:gap-3 items-center sm:items-start">
              <a
                href="mailto:info@suprazotech.com"
                className="text-white/60 hover:text-gold text-sm transition-colors duration-300 w-fit"
              >
                {t('footer.email')}
              </a>
              <span className="text-white/60 text-sm">
                {t('footer.location')}
              </span>
            </div>
          </div>
        </div>

        {/* Make in India Branding Section */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <div className="flex flex-col items-center gap-6">
            <img
              src="/images/make-in-India-logo.jpg"
              alt="Make in India"
              className="w-36 h-auto object-contain mb-4"
            />

            <div className="space-y-2">
              <h3 className="text-white/90 text-lg font-light tracking-wide">
                {t('footer.proudlyBuilding')}
              </h3>
              <p className="text-white/60 text-sm">
                {t('footer.builtInIndiaSubheading')}
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-white/30 text-xs">
            © 2026 SuPrazo Technologies. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
