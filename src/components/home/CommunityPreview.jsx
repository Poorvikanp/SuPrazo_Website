const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Users, Globe } from "lucide-react";
import CountUp from "@/components/shared/CountUp";
import { useLang } from "@/lib/LanguageContext";
import PremiumButton from "@/components/shared/PremiumButton";

const COMMUNITY_IMG = "/images/optimized/community-hackathon-1080.webp";
const COMMUNITY_SRC_SET = "/images/optimized/community-hackathon-640.webp 640w, /images/optimized/community-hackathon-1024.webp 1024w, /images/optimized/community-hackathon-1080.webp 1080w";

export default function CommunityPreview() {
  const { t } = useLang();
  return (
    <section className="py-8 md:py-10 lg:py-12 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 0.8 }} className="order-2 md:order-1">
            <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">{t('communityPreview.label')}</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mt-4 leading-tight">{t('communityPreview.title')}</h2>
            <div className="gold-line w-16 mt-4 md:mt-6 mb-6 md:mb-8" />
            <p className="text-navy/60 text-base leading-relaxed mb-6 md:mb-8">{t('communityPreview.desc')}</p>
            <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-10 mb-8 md:mb-10">
              <div className="text-center"><Users className="text-gold mx-auto mb-2" size={24} /><div className="text-xl sm:text-2xl font-bold text-navy"><CountUp end={100000} suffix="+" /></div><div className="text-[10px] sm:text-xs text-navy/50 uppercase tracking-wide mt-1">{t('communityPreview.stat1')}</div></div>
              <div className="text-center"><Globe className="text-gold mx-auto mb-2" size={24} /><div className="text-xl sm:text-2xl font-bold text-navy"><CountUp end={1} suffix="" /></div><div className="text-[10px] sm:text-xs text-navy/50 uppercase tracking-wide mt-1">{t('communityPreview.stat2')}</div></div>
              <div className="text-center"><Trophy className="text-gold mx-auto mb-2" size={24} /><div className="text-xl sm:text-2xl font-bold text-navy"><CountUp end={1} suffix="" /></div><div className="text-[10px] sm:text-xs text-navy/50 uppercase tracking-wide mt-1">{t('communityPreview.stat3')}</div></div>
            </div>
            <PremiumButton to="/community" variant="ghost">{t('communityPreview.explore')}</PremiumButton>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 0.8, delay: 0.2 }} className="order-1 md:order-2">
             <div className="overflow-hidden rounded-lg"><img src={COMMUNITY_IMG} srcSet={COMMUNITY_SRC_SET} sizes="(max-width: 1023px) 100vw, 50vw" alt="SuPrathon Community" className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover" loading="lazy" decoding="async" /></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
