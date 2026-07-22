const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { motion } from "framer-motion";
import { UserPlus, ClipboardCheck, ShieldCheck, MessageSquare, CheckCircle, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { useLang } from "@/lib/LanguageContext";

const FOUNDATION_IMG = "/images/Foundation1.png";
const FOUNDATION2_IMG = "/images/foundation2.png";
const SUFALPRA_ART = "/images/sufalpra.png";

export default function Foundation() {
  const { t } = useLang();

  const ED_POINTS = [
    t('foundation.ed1'),
    t('foundation.ed2'),
    t('foundation.ed3'),
    t('foundation.ed4'),
    t('foundation.ed5'),
    t('foundation.ed6'),
  ];

  const PROCESS_STEPS = [
    { icon: UserPlus, title: t('foundation.processStep1'), desc: t('foundation.processStep1Desc'), accent: 'blue' },
    { icon: ClipboardCheck, title: t('foundation.processStep2'), desc: t('foundation.processStep2Desc'), accent: 'teal' },
    { icon: ShieldCheck, title: t('foundation.processStep3'), desc: t('foundation.processStep3Desc'), accent: 'purple' },
    { icon: MessageSquare, title: t('foundation.processStep4'), desc: t('foundation.processStep4Desc'), accent: 'orange' },
    { icon: CheckCircle, title: t('foundation.processStep5'), desc: t('foundation.processStep5Desc'), accent: 'green' },
  ];

  const ACCENT_CLASSES = {
    blue: {
      bg: 'bg-blue-50',
      text: 'text-blue-500',
      border: 'border-blue-200',
      hoverBorder: 'hover:border-blue-300',
      shadow: 'hover:shadow-blue-500/10',
      topBorder: 'bg-blue-400',
      arrow: 'text-blue-500',
    },
    teal: {
      bg: 'bg-teal-50',
      text: 'text-teal-500',
      border: 'border-teal-200',
      hoverBorder: 'hover:border-teal-300',
      shadow: 'hover:shadow-teal-500/10',
      topBorder: 'bg-teal-400',
      arrow: 'text-teal-500',
    },
    purple: {
      bg: 'bg-purple-50',
      text: 'text-purple-500',
      border: 'border-purple-200',
      hoverBorder: 'hover:border-purple-300',
      shadow: 'hover:shadow-purple-500/10',
      topBorder: 'bg-purple-400',
      arrow: 'text-purple-500',
    },
    orange: {
      bg: 'bg-orange-50',
      text: 'text-orange-500',
      border: 'border-orange-200',
      hoverBorder: 'hover:border-orange-300',
      shadow: 'hover:shadow-orange-500/10',
      topBorder: 'bg-orange-400',
      arrow: 'text-orange-500',
    },
    green: {
      bg: 'bg-green-50',
      text: 'text-green-500',
      border: 'border-green-200',
      hoverBorder: 'hover:border-green-300',
      shadow: 'hover:shadow-green-500/10',
      topBorder: 'bg-green-400',
      arrow: 'text-green-500',
    },
  };

  return (
    <div data-aos="fade-up">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px]">
        <img src={FOUNDATION_IMG} alt={t('foundation.heroTitle')} className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/30" />
        <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 lg:px-16 flex items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">{t('foundation.heroLabel')}</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy mt-4 leading-tight">{t('foundation.heroTitle')}</h1>
            <div className="gold-line w-20 mt-4" />
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
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.8 }} className="overflow-hidden rounded-lg premium-shadow bg-white">
              <img src={SUFALPRA_ART} alt="SuFalPra Foundation" className="w-full h-auto max-h-[600px] object-contain mx-auto" loading="lazy" decoding="async" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Women's ED Cell */}
      <section className="py-28 lg:py-40 bg-alabaster">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}               viewport={{ once: false }} transition={{ duration: 0.8 }}>
              <img src={FOUNDATION2_IMG} alt={t('foundation.edTitle')} className="w-full h-[500px] object-cover rounded-lg" loading="lazy" decoding="async" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}               viewport={{ once: false }} transition={{ duration: 0.8, delay: 0.2 }}>
              <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">{t('foundation.edLabel')}</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy mt-4 leading-tight">{t('foundation.edTitle')}</h2>
              <div className="gold-line w-16 mt-6 mb-8" />
               <div className="flex flex-col gap-3">
                 {ED_POINTS.map((item, i) => (
                   <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                    <p className="text-navy/60 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <SectionHeading label={t('foundation.processLabel')} title={t('foundation.processTitle')} />

          {/* Desktop Horizontal Timeline */}
          <div className="hidden lg:block relative">
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-gray-200" />

            <div className="grid grid-cols-5 gap-6">
              {PROCESS_STEPS.map((step, i) => {
                const accent = ACCENT_CLASSES[step.accent];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="relative group"
                  >
                    {/* Connector arrow - except last */}
                    {i < PROCESS_STEPS.length - 1 && (
                      <div className={`absolute top-16 -right-3 z-10 ${accent.arrow}`}>
                        <ArrowRight size={18} />
                      </div>
                    )}

                    {/* Step number badge */}
                    <div className="flex justify-center mb-5">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy to-navy/80 text-white flex items-center justify-center premium-shadow text-sm font-bold tracking-wider">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                    </div>

                    {/* Card */}
                    <div className={`bg-white border ${accent.border} rounded-2xl p-6 text-center transition-all duration-500 hover:shadow-2xl ${accent.shadow} hover:-translate-y-2 ${accent.hoverBorder} h-full relative overflow-hidden`}>
                      {/* Colored top accent line */}
                      <div className={`absolute top-0 left-0 right-0 h-1 ${accent.topBorder} opacity-80 group-hover:opacity-100 transition-opacity duration-500`} />

                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-full ${accent.bg} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon size={24} className={accent.text} />
                      </div>

                      {/* Title */}
                      <h4 className="text-base font-semibold text-navy mb-2 group-hover:text-gold transition-colors duration-300 leading-tight">
                        {step.title}
                      </h4>

                      {/* Description */}
                      <p className="text-navy/50 text-xs leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Tablet / Mobile Vertical Timeline */}
          <div className="lg:hidden relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />

            <div className="flex flex-col gap-6">
              {PROCESS_STEPS.map((step, i) => {
                const accent = ACCENT_CLASSES[step.accent];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative flex items-start gap-5"
                  >
                    {/* Step indicator */}
                    <div className="relative z-10 shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy to-navy/80 text-white flex items-center justify-center premium-shadow text-sm font-bold tracking-wider">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                    </div>

                    {/* Card */}
                    <motion.div
                      whileHover={{ y: -4 }}
                      className={`flex-1 bg-white border ${accent.border} rounded-2xl p-5 transition-all duration-500 hover:shadow-2xl ${accent.shadow} hover:border-opacity-60 relative overflow-hidden`}
                    >
                      {/* Colored top accent line */}
                      <div className={`absolute top-0 left-0 right-0 h-1 ${accent.topBorder} opacity-80 group-hover:opacity-100 transition-opacity duration-500`} />

                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-10 h-10 rounded-full ${accent.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <step.icon size={20} className={accent.text} />
                        </div>
                        <h4 className="text-base font-semibold text-navy group-hover:text-gold transition-colors duration-300">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-navy/50 text-sm leading-relaxed pl-[52px]">
                        {step.desc}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
