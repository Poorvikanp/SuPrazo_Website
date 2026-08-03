const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { motion } from "framer-motion";
import { Heart, BookOpen, Lightbulb } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import PremiumButton from "@/components/shared/PremiumButton";

const FOUNDATION_PREVIEW_IMG = "/images/foundation-hub.png";

export default function FoundationPreview() {
  const { t } = useLang();
  const FOCUS = [
    { icon: Heart, title: t('foundationPreview.focus1'), desc: t('foundationPreview.focus1Desc') },
    { icon: BookOpen, title: t('foundationPreview.focus2'), desc: t('foundationPreview.focus2Desc') },
    { icon: Lightbulb, title: t('foundationPreview.focus3'), desc: t('foundationPreview.focus3Desc') },
  ];

  return (
    <section className="py-10 lg:py-12 bg-alabaster">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 0.8 }} className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-lg"><img src={FOUNDATION_PREVIEW_IMG} alt="SuFalPra Foundation" className="w-full h-[400px] object-cover" loading="lazy" decoding="async" /></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 0.8, delay: 0.2 }} className="order-1 lg:order-2">
            <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">{t('foundationPreview.label')}</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mt-4 leading-tight">{t('foundationPreview.title')}</h2>
            <div className="gold-line w-16 mt-4 mb-6" />
            <p className="text-navy/60 text-base leading-relaxed mb-6">{t('foundationPreview.desc')}</p>
            <div className="flex flex-col gap-4 mb-8">
              {FOCUS.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0"><item.icon size={18} className="text-gold" /></div>
                  <div><h4 className="text-sm font-semibold text-navy">{item.title}</h4><p className="text-navy/50 text-sm mt-1">{item.desc}</p></div>
                </div>
              ))}
            </div>
            <PremiumButton to="/foundation" variant="ghost">{t('common.learnMore')}</PremiumButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
