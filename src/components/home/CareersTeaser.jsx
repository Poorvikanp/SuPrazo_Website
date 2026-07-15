const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import PremiumButton from "@/components/shared/PremiumButton";

const TEAM_IMG = "/images/team-campus.png";
const OFFICE_IMG = "/images/meeting-room.png";

export default function CareersTeaser() {
  const { t } = useLang();
  return (
    <section className="py-28 lg:py-40 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8 }} className="grid grid-cols-1 md:grid-cols-2 gap-2 rounded-lg overflow-hidden">
          <div className="relative">
            <img src={TEAM_IMG} alt={t('careersTeaser.title')} className="w-full h-[400px] lg:h-[500px] object-cover" loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/60 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-8 lg:px-12 max-w-md">
                <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">{t('careersTeaser.label')}</span>
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-white mt-4 leading-tight">{t('careersTeaser.title')}</h2>
                <div className="gold-line w-16 mt-5 mb-5" />
                <p className="text-white/70 text-sm leading-relaxed mb-6">{t('careersTeaser.desc')}</p>
                <PremiumButton to="/careers" variant="primary" size="lg">{t('careersTeaser.viewRoles')}</PremiumButton>
              </div>
            </div>
          </div>
          <div className="hidden md:block overflow-hidden">
            <img src={OFFICE_IMG} alt="SuPrazo Office" className="w-full h-[400px] lg:h-[500px] object-cover" loading="lazy" decoding="async" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
