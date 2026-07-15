const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/shared/SectionHeading";
import CountUp from "@/components/shared/CountUp";
import { Trophy, Users, Globe, Target, Building, Landmark, ArrowRight, UserPlus, Award, Handshake } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

const TEAM_IMG = "/images/community-hackathon.png";

export default function Community() {
  const { t } = useLang();

  const STATS = [
    { icon: Trophy, value: 1, suffix: "", label: t('community.stat1') },
    { icon: Users, value: 15000, suffix: "+", label: t('community.stat2') },
    { icon: Globe, value: 0, label: t('community.stat3'), display: "National" },
    { icon: Target, value: 365, suffix: "", label: t('community.stat4') },
  ];

  const NEXT_CHAPTER = [
    { icon: Target, title: t('community.next1'), desc: t('community.next1Desc') },
    { icon: Building, title: t('community.next2'), desc: t('community.next2Desc') },
    { icon: Landmark, title: t('community.next3'), desc: t('community.next3Desc') },
    { icon: Handshake, title: t('community.next4'), desc: t('community.next4Desc') },
  ];

  const INVOLVEMENT = [
    { icon: UserPlus, title: t('community.involved1'), desc: t('community.involved1Desc') },
    { icon: Award, title: t('community.involved2'), desc: t('community.involved2Desc') },
    { icon: Handshake, title: t('community.involved3'), desc: t('community.involved3Desc') },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px]">
        <img src={TEAM_IMG} alt={t('community.heroTitle')} className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/30" />
        <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 lg:px-16 flex items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">{t('community.heroLabel')}</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy mt-4 leading-tight">{t('community.heroTitle')}</h1>
            <p className="text-navy/60 text-lg mt-4 max-w-lg">{t('community.heroDesc')}</p>
            <div className="gold-line w-20 mt-6" />
          </motion.div>
        </div>
      </section>

      {/* What Is SuPrathon */}
      <section className="py-28 lg:py-40 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading label={t('community.whatLabel')} title={t('community.whatTitle')} />
            <p className="text-navy/60 text-base leading-relaxed mb-4">{t('community.whatP1')}</p>
            <p className="text-navy/60 text-base leading-relaxed mb-4">{t('community.whatP2')}</p>
            <p className="text-navy/60 text-base leading-relaxed">{t('community.whatP3')}</p>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-20 bg-alabaster">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="text-center py-10 bg-white rounded-lg border border-gray-100">
                <stat.icon className="text-gold mx-auto mb-4" size={32} />
                <div className="text-3xl lg:text-4xl font-bold text-navy">{stat.display || <CountUp end={stat.value} suffix={stat.suffix} />}</div>
                <div className="text-xs text-navy/50 font-medium tracking-wide uppercase mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SuPrathon 2.0 */}
      <section className="py-28 lg:py-40 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <SectionHeading label={t('community.nextLabel')} title={t('community.nextTitle')} description={t('community.nextDesc')} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {NEXT_CHAPTER.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="border border-gray-100 rounded-lg p-8 hover:shadow-lg transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0"><item.icon size={20} className="text-gold" /></div>
                  <div><h4 className="text-lg font-semibold text-navy mb-2">{item.title}</h4><p className="text-navy/50 text-sm leading-relaxed">{item.desc}</p></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-28 lg:py-40 bg-alabaster">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <SectionHeading label={t('community.involvedLabel')} title={t('community.involvedTitle')} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INVOLVEMENT.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="bg-white rounded-lg p-8 border border-gray-100 text-center">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5"><item.icon size={22} className="text-gold" /></div>
                <h4 className="text-lg font-semibold text-navy mb-3">{item.title}</h4>
                <p className="text-navy/50 text-sm leading-relaxed mb-6">{item.desc}</p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-gold text-xs font-semibold tracking-wider uppercase">{t('community.getInTouch')} <ArrowRight size={14} /></Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
