const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

const TEAM_IMG = "/images/Suprazo_Team discussing.png";
const HERO_IMG = "/images/campus-pool.png";
const HERO_VIDEO = "/videos/suprazo_technology.mp4";

export default function About() {
  const { t } = useLang();

  return (
    <div data-aos="fade-up">
      {/* Hero Banner */}
      <section className="relative h-screen min-h-[400px] bg-black">
        <video src={HERO_VIDEO} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
      </section>

      {/* Company Overview */}
      <section className="py-10 lg:py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.8 }}>
              <img src={TEAM_IMG} alt="SuPrazo Team" className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover rounded-lg" loading="lazy" decoding="async" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.8, delay: 0.2 }}>
              <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">{t('about.overviewLabel')}</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy mt-4 leading-tight">{t('about.overviewTitle')}</h2>
              <div className="gold-line w-16 mt-6 mb-8" />
              <p className="text-navy/60 text-base leading-relaxed mb-4">{t('about.overviewP1')}</p>
              <p className="text-navy/60 text-base leading-relaxed mb-4">{t('about.overviewP2')}</p>
              <p className="text-navy/60 text-base leading-relaxed">{t('about.overviewP3')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-10 lg:py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.7 }} className="border border-gray-100 rounded-lg p-10 lg:p-14">
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6"><Target size={24} className="text-gold" /></div>
              <h3 className="font-display text-2xl font-semibold text-navy mb-4">{t('about.missionTitle')}</h3>
              <div className="gold-line w-12 mb-6" />
              <p className="text-navy/60 text-base leading-relaxed">{t('about.missionDesc')}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.7, delay: 0.15 }} className="border border-gray-100 rounded-lg p-10 lg:p-14">
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6"><Eye size={24} className="text-gold" /></div>
              <h3 className="font-display text-2xl font-semibold text-navy mb-4">{t('about.visionTitle')}</h3>
              <div className="gold-line w-12 mb-6" />
              <p className="text-navy/60 text-base leading-relaxed">{t('about.visionDesc')}</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
