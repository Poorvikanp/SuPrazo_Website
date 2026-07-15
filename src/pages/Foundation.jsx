const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/shared/SectionHeading";
import { Heart, BookOpen, Lightbulb, Users, Handshake, ArrowRight, GraduationCap, Briefcase, Globe, Sparkles } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

const FOUNDATION_IMG = "/images/Foundation1.png";
const FOUNDATION2_IMG = "/images/foundation2.png";
const SUFALPRA_ART = "/images/sufalpra.png";

export default function Foundation() {
  const { t } = useLang();

  const FOCUS_AREAS = [
    { icon: Heart, title: t('foundation.focus1'), desc: t('foundation.focus1Desc') },
    { icon: Users, title: t('foundation.focus2'), desc: t('foundation.focus2Desc') },
    { icon: Lightbulb, title: t('foundation.focus3'), desc: t('foundation.focus3Desc') },
  ];

  const INVOLVEMENT = [
    { icon: Handshake, title: t('foundation.involved1'), desc: t('foundation.involved1Desc') },
    { icon: BookOpen, title: t('foundation.involved2'), desc: t('foundation.involved2Desc') },
    { icon: Users, title: t('foundation.involved3'), desc: t('foundation.involved3Desc') },
  ];

  const ED_POINTS = [
    t('foundation.ed1'),
    t('foundation.ed2'),
    t('foundation.ed3'),
    t('foundation.ed4'),
    t('foundation.ed5'),
    t('foundation.ed6'),
  ];

  const STATS = [
    { icon: GraduationCap, label: t('foundation.stat1') },
    { icon: Briefcase, label: t('foundation.stat2') },
    { icon: Globe, label: t('foundation.stat3') },
    { icon: Sparkles, label: t('foundation.stat4') },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px]">
        <img src={FOUNDATION_IMG} alt={t('foundation.heroTitle')} className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/30" />
        <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 lg:px-16 flex items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">{t('foundation.heroLabel')}</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy mt-4 leading-tight">{t('foundation.heroTitle')}</h1>
            <p className="text-navy/60 text-lg mt-4 max-w-lg">{t('foundation.heroDesc')}</p>
            <div className="gold-line w-20 mt-6" />
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="pt-6 lg:pt-8 pb-28 lg:pb-40 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading label={t('foundation.aboutLabel')} title={t('foundation.aboutTitle')} />
              <p className="text-navy/60 text-base leading-relaxed mb-4">{t('foundation.aboutP1')}</p>
              <p className="text-navy/60 text-base leading-relaxed">{t('foundation.aboutP2')}</p>
            </div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="overflow-hidden rounded-lg premium-shadow">
              <img src={SUFALPRA_ART} alt="SuFalPra Foundation" className="w-full h-auto object-cover" loading="lazy" decoding="async" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-alabaster">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="text-center py-10 bg-white rounded-lg border border-gray-100">
                <stat.icon className="text-gold mx-auto mb-4" size={32} />
                <div className="text-3xl lg:text-4xl font-bold text-navy">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Women's ED Cell */}
      <section className="py-28 lg:py-40 bg-alabaster">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <img src={FOUNDATION2_IMG} alt={t('foundation.edTitle')} className="w-full h-[500px] object-cover rounded-lg" loading="lazy" decoding="async" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
              <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">{t('foundation.edLabel')}</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy mt-4 leading-tight">{t('foundation.edTitle')}</h2>
              <div className="gold-line w-16 mt-6 mb-8" />
              <p className="text-navy/60 text-base leading-relaxed mb-4">{t('foundation.edDesc')}</p>
              <div className="flex flex-col gap-3 mb-6">
                {ED_POINTS.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                    <p className="text-navy/60 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-28 lg:py-40 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <SectionHeading label={t('foundation.focusLabel')} title={t('foundation.focusTitle')} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FOCUS_AREAS.map((area, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }} className="border border-gray-100 rounded-lg p-8 hover:shadow-lg transition-all duration-500">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6"><area.icon size={24} className="text-gold" /></div>
                <h4 className="text-lg font-semibold text-navy mb-3">{area.title}</h4>
                <p className="text-navy/50 text-sm leading-relaxed">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-28 lg:py-40 bg-alabaster">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <SectionHeading label={t('foundation.involvedLabel')} title={t('foundation.involvedTitle')} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INVOLVEMENT.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="bg-white rounded-lg p-8 border border-gray-100 text-center">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5"><item.icon size={22} className="text-gold" /></div>
                <h4 className="text-lg font-semibold text-navy mb-3">{item.title}</h4>
                <p className="text-navy/50 text-sm leading-relaxed mb-6">{item.desc}</p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-gold text-xs font-semibold tracking-wider uppercase">{t('foundation.contactUs')} <ArrowRight size={14} /></Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
