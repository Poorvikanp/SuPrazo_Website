const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import CountUp from "@/components/shared/CountUp";
import { Target, Eye, Zap, Shield, Users, Heart, Award } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

const TEAM_IMG = "/images/team-campus.png";
const HERO_IMG = "/images/campus-pool.png";

export default function About() {
  const { t } = useLang();

  const STATS = [
    { value: 35, suffix: "+", label: t('about.stat1') },
    { value: 5, prefix: "", suffix: "", label: t('about.stat2') },
    { value: 3, suffix: "", label: t('about.stat3') },
    { value: 3, suffix: "", label: t('about.stat4') },
    { value: 4, suffix: "+", label: t('about.stat5') },
  ];

  const VALUES = [
    { icon: Zap, title: t('about.value1'), desc: t('about.value1Desc') },
    { icon: Shield, title: t('about.value2'), desc: t('about.value2Desc') },
    { icon: Users, title: t('about.value3'), desc: t('about.value3Desc') },
    { icon: Target, title: t('about.value4'), desc: t('about.value4Desc') },
    { icon: Heart, title: t('about.value5'), desc: t('about.value5Desc') },
  ];

  const JOURNEY = [
    { num: "01", icon: Zap, title: t('about.journey1'), desc: t('about.journey1Desc') },
    { num: "02", icon: Users, title: t('about.journey2'), desc: t('about.journey2Desc') },
    { num: "03", icon: Award, title: t('about.journey3'), desc: t('about.journey3Desc') },
    { num: "04", icon: Target, title: t('about.journey4'), desc: t('about.journey4Desc') },
  ];

  const STRUCTURE = [
    { num: "1", label: t('about.structure1'), desc: t('about.structure1Desc') },
    { num: "4–5", label: t('about.structure2'), desc: t('about.structure2Desc') },
    { num: "~35", label: t('about.structure3'), desc: t('about.structure3Desc') },
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px]">
        <img src={HERO_IMG} alt={t('about.heroTitle')} className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/30" />
        <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 lg:px-16 flex items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">{t('about.heroLabel')}</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy mt-4 leading-tight">{t('about.heroTitle')}</h1>
            <div className="gold-line w-20 mt-6" />
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-28 lg:py-40 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <img src={TEAM_IMG} alt="SuPrazo Team" className="w-full h-[500px] object-cover rounded-lg" loading="lazy" decoding="async" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
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

      {/* Numbers */}
      <section className="py-20 bg-alabaster">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {STATS.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="text-center py-8">
                <div className="text-3xl lg:text-4xl font-bold text-navy"><CountUp end={stat.value} prefix={stat.prefix || ""} suffix={stat.suffix} /></div>
                <div className="text-xs text-navy/50 font-medium tracking-wide uppercase mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-28 lg:py-40 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="border border-gray-100 rounded-lg p-10 lg:p-14">
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6"><Target size={24} className="text-gold" /></div>
              <h3 className="font-display text-2xl font-semibold text-navy mb-4">{t('about.missionTitle')}</h3>
              <div className="gold-line w-12 mb-6" />
              <p className="text-navy/60 text-base leading-relaxed">{t('about.missionDesc')}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="border border-gray-100 rounded-lg p-10 lg:p-14">
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6"><Eye size={24} className="text-gold" /></div>
              <h3 className="font-display text-2xl font-semibold text-navy mb-4">{t('about.visionTitle')}</h3>
              <div className="gold-line w-12 mb-6" />
              <p className="text-navy/60 text-base leading-relaxed">{t('about.visionDesc')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-28 lg:py-40 bg-alabaster">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <SectionHeading label={t('about.journeyLabel')} title={t('about.journeyTitle')} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {JOURNEY.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }} className="bg-white rounded-lg p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center"><step.icon size={18} className="text-gold" /></div>
                  <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">{step.num}</span>
                </div>
                <h4 className="text-lg font-semibold text-navy mb-3">{step.title}</h4>
                <p className="text-navy/50 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 lg:py-40 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <SectionHeading label={t('about.valuesLabel')} title={t('about.valuesTitle')} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VALUES.map((value, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="border border-gray-100 rounded-lg p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-5"><value.icon size={20} className="text-gold" /></div>
                <h4 className="text-lg font-semibold text-navy mb-3">{value.title}</h4>
                <p className="text-navy/50 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="py-20 bg-alabaster">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 text-center">
          <SectionHeading label={t('about.structureLabel')} title={t('about.structureTitle')} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {STRUCTURE.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="bg-white rounded-lg p-8 border border-gray-100">
                <div className="text-3xl font-bold text-gold mb-2">{item.num}</div>
                <div className="text-sm font-semibold text-navy mb-2">{item.label}</div>
                <div className="text-navy/50 text-xs">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
