const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import CountUp from "@/components/shared/CountUp";
import { Target, Building, Landmark, Handshake } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

const TEAM_IMG = "/images/community-hackathon.png";
const SUPRATHON_HACK_VIDEO = "/videos/Suprathon_Hack.mp4";
const SUPRATHON_POSTER = "/images/Suprathon_h.png";
const SUPRATHON_H_IMG = "/images/Suprathon_h.png";

export default function Community() {
  const { t } = useLang();

  const NEXT_CHAPTER = [
    { icon: Target, title: t('community.next1'), desc: t('community.next1Desc') },
    { icon: Building, title: t('community.next2'), desc: t('community.next2Desc') },
    { icon: Landmark, title: t('community.next3'), desc: t('community.next3Desc') },
    { icon: Handshake, title: t('community.next4'), desc: t('community.next4Desc') },
  ];

  return (
    <div data-aos="fade-up">
      {/* Hero */}
      <section className="relative h-[48vh] sm:h-[56vh] md:h-[60vh] lg:h-[64vh] md:min-h-[520px] w-full overflow-hidden bg-black">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <video
            src={SUPRATHON_HACK_VIDEO}
            preload="metadata"
            poster={SUPRATHON_POSTER}
            autoPlay
            muted
            loop
            playsInline
            className="community-hero-video absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
      </section>

      <style>{`
        .community-hero-video {
          object-position: 50% 30%;
        }
        @media (max-width: 767px) {
          .community-hero-video {
            object-position: 50% 45%;
          }
        }
      `}</style>

      {/* What Is SuPrathon */}
      <section className="py-6 md:py-8 lg:py-10 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="overflow-hidden rounded-lg aspect-[4/3]"
            >
              <img src={SUPRATHON_H_IMG} alt="SuPrathon" className="w-full h-full object-contain" loading="lazy" decoding="async" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase block mb-4">{t('community.whatLabel')}</span>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-navy leading-tight">{t('community.whatTitle')}</h2>
              <div className="gold-line w-16 mt-4" />
              <p className="text-navy/60 text-base leading-relaxed mb-3">{t('community.whatP1')}</p>
              <p className="text-navy/60 text-base leading-relaxed mb-3">{t('community.whatP2')}</p>
              <p className="text-navy/60 text-base leading-relaxed">{t('community.whatP3')}</p>
              <div className="flex flex-col md:flex-row gap-3 md:gap-4 mt-5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex-1 flex flex-col items-center justify-center gap-3 py-5 px-6 rounded-md bg-gold/[0.03] border border-gold/10"
                >
                  <span className="text-2xl lg:text-3xl font-bold text-navy"><CountUp end={1} duration={1000} /></span>
                  <span className="text-xs text-navy/50 font-medium tracking-wide uppercase">World Record Holder</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="flex-1 flex flex-col items-center justify-center gap-3 py-5 px-6 rounded-md bg-gold/[0.03] border border-gold/10"
                >
                  <span className="text-2xl lg:text-3xl font-bold text-navy"><CountUp end={100000} duration={2000} suffix="+" /></span>
                  <span className="text-xs text-navy/50 font-medium tracking-wide uppercase">Participants</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex-1 flex flex-col items-center justify-center gap-3 py-5 px-6 rounded-md bg-gold/[0.03] border border-gold/10"
                >
                  <motion.span
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className="text-2xl lg:text-3xl font-bold text-navy"
                  >National</motion.span>
                  <span className="text-xs text-navy/50 font-medium tracking-wide uppercase">National Reach</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SuPrathon 2.0 */}
      <section className="py-8 md:py-12 lg:py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <SectionHeading label={t('community.nextLabel')} title={t('community.nextTitle')} description={t('community.nextDesc')} className="mb-8 md:mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {NEXT_CHAPTER.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border border-gray-100 rounded-lg p-6 md:p-7 hover:shadow-lg transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0"><item.icon size={20} className="text-gold" /></div>
                  <div><h4 className="text-lg font-semibold text-navy mb-2">{item.title}</h4><p className="text-navy/50 text-sm leading-relaxed">{item.desc}</p></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}