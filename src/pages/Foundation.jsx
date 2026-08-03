const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { motion } from "framer-motion";
import { UserPlus, ClipboardCheck, ShieldCheck, MessageSquare, CheckCircle, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { useLang } from "@/lib/LanguageContext";

const FOUNDATION_IMG = "/images/Foundation1.png";
const FOUNDATION2_IMG = "/images/Sufalpra_presentation.png";
const SUFALPRA_ART = "/images/sufalpra.png";

export default function Foundation() {
  const { t } = useLang();

  const ED_POINTS = [
    { title: t('foundation.ed1Title'), desc: t('foundation.ed1Desc') },
    { title: t('foundation.ed2Title'), desc: t('foundation.ed2Desc') },
    { title: t('foundation.ed3Title'), desc: t('foundation.ed3Desc') },
    { title: t('foundation.ed4Title'), desc: t('foundation.ed4Desc') },
    { title: t('foundation.ed5Title'), desc: t('foundation.ed5Desc') },
    { title: t('foundation.ed6Title'), desc: t('foundation.ed6Desc') },
  ];

  const PROCESS_STEPS = [
    { icon: UserPlus, title: t('foundation.processStep1'), desc: t('foundation.processStep1Desc') },
    { icon: ClipboardCheck, title: t('foundation.processStep2'), desc: t('foundation.processStep2Desc') },
    { icon: ShieldCheck, title: t('foundation.processStep3'), desc: t('foundation.processStep3Desc') },
    { icon: MessageSquare, title: t('foundation.processStep4'), desc: t('foundation.processStep4Desc') },
    { icon: CheckCircle, title: t('foundation.processStep5'), desc: t('foundation.processStep5Desc') },
    { icon: UserPlus, title: t('foundation.processStep6'), desc: t('foundation.processStep6Desc') },
    { icon: ClipboardCheck, title: t('foundation.processStep7'), desc: t('foundation.processStep7Desc') },
  ];

  return (
    <div data-aos="fade-up">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px]">
        <img src={FOUNDATION_IMG} alt={t('foundation.heroTitle')} className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/15 via-white/10 to-white/5" />
        <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 lg:px-16 flex items-start pt-8 lg:pt-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-gold text-[10px] font-semibold tracking-[0.25em] uppercase">{t('foundation.heroLabel')}</span>
            <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-navy mt-4 leading-tight">{t('foundation.heroTitle')}</h1>
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
              <img src={FOUNDATION2_IMG} alt={t('foundation.edTitle')} className="w-full h-[500px] object-contain rounded-lg" loading="lazy" decoding="async" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}               viewport={{ once: false }} transition={{ duration: 0.8, delay: 0.2 }}>
              <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">{t('foundation.edLabel')}</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy mt-4 leading-tight">{t('foundation.edTitle')}</h2>
              <div className="gold-line w-16 mt-6 mb-8" />
<div className="flex flex-col gap-3">
                  {ED_POINTS.map((point, i) => (
                    <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                      <div>
                        <h4 className="text-base font-semibold text-navy mb-1">
                          {point.title}
                        </h4>
                        <p className="text-navy/60 text-sm leading-relaxed">
                          {point.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <SectionHeading label={t('foundation.processLabel')} title={t('foundation.processTitle')} />

          {/* Desktop Horizontal Timeline */}
          <div className="hidden lg:block relative mt-16">
            {/* Connecting line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-200" />

            <div className="grid grid-cols-7 gap-2">
              {PROCESS_STEPS.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Step Number Badge */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative z-10 w-14 h-14 rounded-full bg-white border-2 border-navy text-navy flex items-center justify-center shadow-md transition-all duration-300 group"
                  >
                    <step.icon size={22} className="text-navy group-hover:text-gold transition-colors duration-300" />
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <h4 className="text-sm font-semibold text-navy mt-5 mb-1 transition-colors duration-300 group-hover:text-gold leading-tight">
                    {step.title}
                  </h4>

                  {/* Description */}
                  <p className="text-navy/60 text-xs leading-relaxed max-w-[140px]">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Vertical Timeline */}
          <div className="lg:hidden relative mt-12">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />

            <div className="flex flex-col gap-7">
              {PROCESS_STEPS.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex items-start gap-4"
                >
                  {/* Step indicator */}
                  <div className="relative z-10 shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-full bg-white border-2 border-navy text-navy flex items-center justify-center shadow-md transition-all duration-300 group"
                    >
                      <step.icon size={20} className="text-navy group-hover:text-gold transition-colors duration-300" />
                      <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-navy mb-1 group-hover:text-gold transition-colors duration-300">
                      {step.title}
                    </h4>
                    <p className="text-navy/60 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Apply Now CTA */}
          <div className="mt-12 lg:mt-16 text-center">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              onClick={() => {
                const message = `Hello SuFalPra Foundation Team,

I would like to apply for the SuFalPra Foundation program.

Please share the application details and the next steps.

Thank you.`;
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://wa.me/919665658240?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');
              }}
              className="group inline-flex items-center gap-3 bg-gold text-white px-10 py-4 text-sm font-semibold tracking-wide uppercase rounded-lg premium-shadow hover:bg-gold/90 hover:-translate-y-0.5 transition-all duration-400"
            >
              {t('foundation.applyNow')}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}
