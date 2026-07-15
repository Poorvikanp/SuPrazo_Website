const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Linkedin, Instagram, MessageCircle } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

const LOGO_URL = "/images/suprazo-logo.png";

export default function Footer() {
  const { t } = useLang();

  const QUICK_LINKS = [
    { label: t('nav.home'), path: "/" },
    { label: t('nav.about'), path: "/about" },
    { label: t('nav.products'), path: "/products" },
    { label: "Community", path: "/community" },
    { label: "Foundation", path: "/foundation" },
    { label: t('nav.directors'), path: "/directors-office" },
    { label: t('nav.careers'), path: "/careers" },
    { label: t('nav.contact'), path: "/contact" },
  ];

  const PRODUCTS = [
    { label: "CorPool", path: "/products#corpool" },
    { label: "Interview AI", path: "/products#interview-ai" },
    { label: "MockPrep.ai", path: "/products#mockprep" },
  ];

  const COMMUNITY = [
    { label: "SuPrathon", path: "/community" },
    { label: "SuFalPra Foundation", path: "/foundation" },
    { label: "Women's ED Cell", path: "/foundation" },
  ];

const SOCIALS = [
  { icon: MessageCircle, href: "https://whatsapp.com/channel/0029VbBHbwbCnA81XNT1so1f", label: "WhatsApp", brandColor: "#25D366" },
  { icon: Instagram, href: "https://www.instagram.com/suprazo.official/", label: "Instagram", brandColor: "#E4405F" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/suprazo-technologies/?viewAsMember=true", label: "LinkedIn", brandColor: "#0A66C2" },
];

const DIRECTOR_SOCIALS = [
  { icon: ArrowUpRight, href: "https://www.teamsumit.com", label: "Portfolio", brandColor: "#6B7280" },
  { icon: Instagram, href: "https://www.instagram.com/team_.sumit/", label: "Instagram", brandColor: "#E4405F" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sumit-ceo/", label: "LinkedIn", brandColor: "#0A66C2" },
];

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-12">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <img src={LOGO_URL} alt="SuPrazo Technologies" className="h-12 w-auto object-contain brightness-0 invert mb-6" />
            <p className="text-white/60 text-sm leading-relaxed mb-8">{t('footer.desc')}</p>
            <div className="flex gap-3">
              {SOCIALS.map((s, i) => (
                <a key={i} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = s.brandColor; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'; }}>
                  <s.icon size={16} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-6">{t('footer.quickLinks')}</h4>
            <div className="flex flex-col gap-3">
              {QUICK_LINKS.map((link, i) => (
                <Link key={i} to={link.path} className="text-white/60 hover:text-gold text-sm transition-colors duration-300 w-fit">{link.label}</Link>
              ))}
            </div>
          </div>

          {/* Column 3: Products */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-6">{t('footer.products')}</h4>
            <div className="flex flex-col gap-3">
              {PRODUCTS.map((p, i) => (
                <Link key={i} to={p.path} className="text-white/60 hover:text-gold text-sm transition-colors duration-300 w-fit">{p.label}</Link>
              ))}
            </div>
          </div>

          {/* Column 4: Community */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-6">{t('footer.community')}</h4>
            <div className="flex flex-col gap-3">
              {COMMUNITY.map((v, i) => (
                <Link key={i} to={v.path} className="text-white/60 hover:text-gold text-sm transition-colors duration-300 w-fit">{v.label}</Link>
              ))}
            </div>
          </div>

          {/* Column 5: Director */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-6">Director</h4>
            <p className="text-white/60 text-sm leading-relaxed mb-6">Team Sumit</p>
            <div className="flex flex-col gap-3">
              {DIRECTOR_SOCIALS.map((s, i) => (
                <a key={i} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-sm transition-colors duration-300 w-fit flex items-center gap-2 rounded-lg px-3 py-2 -mx-3" onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = s.brandColor; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
                  {s.label} <ArrowUpRight size={12} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px bg-gold/30 mt-16 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© 2026 SuPrazo Technologies. Built with ❤️ in India.</p>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
