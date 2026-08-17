const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { motion } from "framer-motion";
import { Route, ShieldCheck, Coins, MapPin, Mic, Brain, Target, Clock, UserCheck, Users, Zap, MessageSquare, TrendingUp, CheckCircle } from "lucide-react";
import PremiumButton from "@/components/shared/PremiumButton";
import CountUp from "@/components/shared/CountUp";
import { useLang } from "@/lib/LanguageContext";

const HERO_VIDEO = "/videos/products.mp4";
const HERO_POSTER = "/images/CorPool-product.png";
const CORPOOL_IMG = "/images/CorPool-product.png";
const INTERVIEW_IMG = "/images/HireMe-product.jpg";
const MOCKPREP_IMG = "/images/Mockai-product.png";

export default function Products() {
  const { t } = useLang();

  const CORPOOL_FEATURES = [
    { icon: Coins, title: t('products.corpoolF1') },
    { icon: MapPin, title: t('products.corpoolF2') },
    { icon: ShieldCheck, title: t('products.corpoolF3') },
    { icon: Route, title: t('products.corpoolF4') },
  ];

  const CORPOOL_STATS = [
    { value: 5000, prefix: "₹", suffix: "", label: t('products.corpoolS1') },
    { value: 68, prefix: "", suffix: " kg", label: t('products.corpoolS2') },
    { value: 420000, prefix: "₹", suffix: "", label: t('products.corpoolS3') },
    { value: 6800, prefix: "", suffix: " kg", label: t('products.corpoolS4') },
  ];

  const INTERVIEW_FEATURES = [
    { icon: Clock, title: t('products.interviewF1') },
    { icon: Users, title: t('products.interviewF2') },
    { icon: Brain, title: t('products.interviewF3') },
    { icon: UserCheck, title: t('products.interviewF4') },
    { icon: Zap, title: t('products.interviewF5') },
  ];

  const MOCKPREP_FEATURES = [
    { icon: Mic, title: t('products.mockprepF1') },
    { icon: MessageSquare, title: t('products.mockprepF2') },
    { icon: TrendingUp, title: t('products.mockprepF3') },
    { icon: Target, title: t('products.mockprepF4') },
    { icon: CheckCircle, title: t('products.mockprepF5') },
  ];

  return (
    <div data-aos="fade-up">
      {/* Hero */}
      <section className="relative h-[48vh] sm:h-[56vh] md:h-[60vh] lg:h-[64vh] min-h-[520px]">
        <video src={HERO_VIDEO} preload="auto" poster={HERO_POSTER} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover object-center" fetchPriority="high" />
        <div className="absolute inset-0 bg-black/10" />
      </section>

      {/* CorPool — image left, text right */}
      <section id="corpool" className="py-12 md:py-16 lg:py-28 bg-white scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}               viewport={{ once: false, margin: "-80px" }} transition={{ duration: 0.8 }} className="hover:scale-[1.02] transition-transform duration-500">
               <div className="overflow-hidden rounded-lg premium-shadow">
                 <img src={CORPOOL_IMG} alt={t('product.corpool')} className="w-full h-auto object-cover max-h-[280px] sm:max-h-[320px] md:max-h-[360px]" loading="lazy" decoding="async" />
               </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}               viewport={{ once: false, margin: "-80px" }} transition={{ duration: 0.8, delay: 0.2 }}>
              <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">{t('products.p1Label')}</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy mt-4">{t('product.corpool')}</h2>
              <p className="text-gold text-lg font-medium mt-2">{t('products.corpoolTag')}</p>
              <div className="gold-line w-16 mt-6 mb-8" />
              {t('products.corpoolDesc') && <p className="text-navy/60 text-sm leading-relaxed mb-6">{t('products.corpoolDesc')}</p>}
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 sm:mb-8">
                  {CORPOOL_FEATURES.map((f, i) => (
                    <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="flex items-center gap-2">
                     <f.icon size={16} className="text-gold shrink-0" />
                     <span className="text-xs sm:text-sm font-medium text-navy">{f.title}</span>
                   </div>
                 ))}
               </div>
              <div className="flex flex-wrap gap-4">
                <PremiumButton href="https://corpool.co.in" variant="dark" target="_blank" rel="noopener noreferrer">{t('products.visitCorpool')}</PremiumButton>
                <PremiumButton to="/products/enquiry" variant="secondary" state={{ product: t('product.corpool') }}>{t('products.requestQuote')}</PremiumButton>
              </div>
            </motion.div>
          </div>
           <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 bg-alabaster rounded-lg p-4 sm:p-6 lg:p-8 mt-10 md:mt-12">
            {CORPOOL_STATS.map((s, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-gold"><CountUp end={s.value} prefix={s.prefix} suffix={s.suffix} /></div>
                <div className="text-xs text-navy/50 uppercase tracking-wide mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interview AI — text left, image right */}
      <section id="interview-ai" className="py-12 md:py-16 lg:py-28 bg-alabaster scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}               viewport={{ once: false, margin: "-80px" }} transition={{ duration: 0.8 }} className="order-2 lg:order-1">
              <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">{t('products.p2Label')}</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy mt-4">{t('product.interviewai')}</h2>
              <p className="text-gold text-lg font-medium mt-2">{t('products.interviewTag')}</p>
              <div className="gold-line w-16 mt-6 mb-8" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 sm:mb-8">
                  {INTERVIEW_FEATURES.map((f, i) => (
                    <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="flex items-center gap-2">
                     <f.icon size={16} className="text-gold shrink-0" />
                     <span className="text-xs sm:text-sm font-medium text-navy">{f.title}</span>
                   </div>
                 ))}
               </div>
              <PremiumButton to="/products/enquiry" variant="primary" size="lg" state={{ product: t('product.interviewai') }}>{t('products.requestDemo')}</PremiumButton>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}               viewport={{ once: false, margin: "-80px" }} transition={{ duration: 0.8, delay: 0.2 }} className="order-1 lg:order-2 hover:scale-[1.02] transition-transform duration-500">
               <div className="overflow-hidden rounded-lg premium-shadow">
                 <img src={INTERVIEW_IMG} alt={t('product.interviewai')} className="w-full h-auto object-cover max-h-[280px] sm:max-h-[320px] md:max-h-[360px]" loading="lazy" decoding="async" />
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MockPrep.ai — image left, text right */}
      <section id="mockprep" className="py-12 md:py-16 lg:py-28 bg-white scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}               viewport={{ once: false, margin: "-80px" }} transition={{ duration: 0.8 }} className="hover:scale-[1.02] transition-transform duration-500">
               <div className="overflow-hidden rounded-lg premium-shadow">
                 <img src={MOCKPREP_IMG} alt={t('product.mockprep')} className="w-full h-auto object-cover max-h-[280px] sm:max-h-[320px] md:max-h-[360px]" loading="lazy" decoding="async" />
               </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}               viewport={{ once: false, margin: "-80px" }} transition={{ duration: 0.8, delay: 0.2 }}>
              <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">{t('products.p3Label')}</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy mt-4">{t('product.mockprep')}</h2>
              <p className="text-gold text-lg font-medium mt-2">{t('products.mockprepTag')}</p>
               <div className="gold-line w-16 mt-4 sm:mt-6 mb-6 sm:mb-8" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 sm:mb-8">
                  {MOCKPREP_FEATURES.map((f, i) => (
                    <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="flex items-center gap-2">
                     <f.icon size={16} className="text-gold shrink-0" />
                     <span className="text-xs sm:text-sm font-medium text-navy">{f.title}</span>
                   </div>
                 ))}
               </div>
              <div className="flex flex-wrap gap-4">
                <PremiumButton to="/products/enquiry" variant="dark" state={{ product: t('product.mockprep') }}>{t('products.joinWaitlist')}</PremiumButton>
                <PremiumButton to="/products/enquiry" variant="secondary" state={{ product: t('product.mockprep') }}>{t('products.requestAccess')}</PremiumButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
