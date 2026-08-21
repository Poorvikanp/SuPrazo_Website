const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { useLang } from "@/lib/LanguageContext";

const HERO_IMG = "/images/suprazo_discussion.png";
const SUPRATHON_IMG = "/images/Suprathon_home.png";
const FOUNDATION_IMG = "/images/Sufalpra_home.png";

export default function EcosystemSection() {
  const { t } = useLang();
  const PILLARS = [
    { title: t('ecosystem.suprazo'), desc: t('ecoSection.pillar1Desc'), img: HERO_IMG, link: "/about" },
    { title: t('ecosystem.suprathon'), desc: t('ecoSection.pillar2Desc'), img: SUPRATHON_IMG, link: "/community" },
    { title: t('ecosystem.sufalpra'), desc: t('ecoSection.pillar3Desc'), img: FOUNDATION_IMG, link: "/foundation" },
  ];

  return (
    <section className="py-8 md:py-10 lg:py-12 bg-alabaster">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <SectionHeading label={t('ecoSection.label')} title={t('ecoSection.title')} description={t('ecoSection.desc')} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {PILLARS.map((pillar, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-60px" }} transition={{ duration: 0.7, delay: i * 0.15 }}>
              <Link to={pillar.link} className="group block bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="overflow-hidden h-64"><img src={pillar.img} alt={pillar.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" decoding="async" /></div>
                <div className="p-8">
                  <div className="gold-line w-0 group-hover:w-full transition-all duration-500 mb-5" />
                  <h3 className="text-xl font-semibold text-navy mb-3">{pillar.title}</h3>
                  <p className="text-navy/50 text-sm leading-relaxed mb-6">{pillar.desc}</p>
                  <span className="inline-flex items-center gap-2 text-gold text-xs font-semibold tracking-wider uppercase">{t('common.learnMore')} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
