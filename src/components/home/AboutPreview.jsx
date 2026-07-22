const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { motion } from "framer-motion";
import CountUp from "@/components/shared/CountUp";
import { useLang } from "@/lib/LanguageContext";
import PremiumButton from "@/components/shared/PremiumButton";

const ABOUT_IMG = "/images/team-campus.png";

export default function AboutPreview() {
  const { t } = useLang();
  const STATS = [
    { value: 50, suffix: "+", label: t('aboutPreview.stat1') },
    { value: 3, suffix: "", label: t('aboutPreview.stat2') },
  ];

  return (
    <section className="py-28 lg:py-40 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 0.8 }}>
            <div className="overflow-hidden rounded-lg">
              <img src={ABOUT_IMG} alt="SuPrazo Technologies" className="w-full h-[520px] md:h-[560px] object-cover rounded-lg" loading="lazy" decoding="async" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 0.8, delay: 0.2 }}>
            <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">{t('aboutPreview.label')}</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mt-4 leading-tight">{t('aboutPreview.title')}</h2>
            <div className="gold-line w-16 mt-6 mb-8" />
            <p className="text-navy/60 text-base leading-relaxed mb-4">{t('aboutPreview.p1')}</p>
            <p className="text-navy/60 text-base leading-relaxed mb-8">{t('aboutPreview.p2')}</p>
            <div className="grid grid-cols-2 gap-6 mb-10">
              {STATS.map((stat, i) => (
                <div key={i} className="border-l-2 border-gold pl-4">
                  <div className="text-2xl lg:text-3xl font-bold text-navy"><CountUp end={stat.value} suffix={stat.suffix} /></div>
                  <div className="text-xs text-navy/50 font-medium tracking-wide uppercase mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
            <PremiumButton to="/about" variant="ghost">{t('common.learnMore')}</PremiumButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
