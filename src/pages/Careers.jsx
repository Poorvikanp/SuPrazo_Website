const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/shared/SectionHeading";
import ApplicationProcess from "@/components/shared/ApplicationProcess";
import { ArrowRight, MapPin, Briefcase, Zap, Users, Layers } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

const CAREER_HERO = "/images/optimized/Career_Hero-1376.webp";

export default function Careers() {
  const { t } = useLang();

  const ROLES = [
    { title: t('careers.role1'), vertical: t('ecosystem.suprazo'), location: t('careers.nagpurRemote') },
    { title: t('careers.role2'), vertical: t('ecosystem.suprathon'), location: t('careers.nagpurRemote') },
    { title: t('careers.role3'), vertical: t('product.corpool'), location: t('careers.nagpurRemote') },
    { title: t('careers.role4'), vertical: t('ecosystem.suprazo'), location: t('careers.remote') },
  ];

  const WHY = [
    { icon: Zap, title: t('careers.why1'), desc: t('careers.why1Desc') },
    { icon: Users, title: t('careers.why2'), desc: t('careers.why2Desc') },
    { icon: Layers, title: t('careers.why3'), desc: t('careers.why3Desc') },
  ];

  return (
    <div data-aos="fade-up" className="m-0 p-0">
      {/* Hero */}
      <section className="relative h-[75vh] sm:h-[80vh] md:h-[85vh] min-h-[500px]">
         <img src={CAREER_HERO} alt={t('careers.heroTitle')} className="absolute inset-0 w-full h-full object-cover object-position-[center_30%] md:object-position-[50%_75%] lg:object-position-[50%_75%]" fetchPriority="high" decoding="async" />
         <div className="absolute left-0 top-0 bottom-0 w-[40%]" style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 30%, rgba(0,0,0,0.08) 55%, rgba(0,0,0,0) 75%)' }} />
           <div className="absolute left-0 top-0 z-10 pt-[40px] sm:pt-[50px] md:pt-[60px] lg:pt-[70px] pl-[40px] sm:pl-[50px] md:pl-[60px] lg:pl-[70px]">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="font-display text-2xl sm:text-3xl md:text-[40px] lg:text-[44px] xl:text-[48px] font-bold text-white flex flex-col gap-2" style={{ textShadow: '0 3px 12px rgba(0,0,0,0.35)' }}>
                  <span className="block">{t('careers.heroLine1')}</span>
                  <span className="block text-2xl sm:text-[34px] md:text-[40px] lg:text-[44px] xl:text-[50px]">{t('careers.heroLine2')}</span>
                </h1>
              </motion.div>
           </div>
        </section>

      {/* Why SuPrazo */}
      <section className="pt-10 pb-16 md:pt-12 md:pb-24 lg:pt-14 lg:pb-40 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <SectionHeading label={t('careers.whyLabel')} title={t('careers.whyTitle')} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WHY.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}               viewport={{ once: false }} transition={{ duration: 0.6, delay: i * 0.15 }} className="border border-gray-100 rounded-lg p-10 hover:shadow-lg transition-all duration-500">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6"><item.icon size={24} className="text-gold" /></div>
                <h4 className="text-lg font-semibold text-navy mb-3">{item.title}</h4>
                <p className="text-navy/50 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <ApplicationProcess />

      {/* Open Roles */}
      <section className="py-16 md:py-24 lg:py-40 bg-alabaster">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <SectionHeading label={t('careers.rolesLabel')} title={t('careers.rolesTitle')} />
          <div className="flex flex-col gap-4 max-w-4xl mx-auto">
            {ROLES.map((role, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}               viewport={{ once: false }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white rounded-lg border border-gray-100 p-6 lg:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4 hover:shadow-md transition-all duration-300">
                <div>
                  <h4 className="text-lg font-semibold text-navy">{role.title}</h4>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <span className="flex items-center gap-1 text-navy/50 text-xs"><Briefcase size={12} /> {role.vertical}</span>
                    <span className="flex items-center gap-1 text-navy/50 text-xs"><MapPin size={12} /> {role.location}</span>
                  </div>
                </div>
                <Link to="/careers/apply" state={{ role: role.title }} className="group inline-flex items-center gap-2 bg-navy text-white px-6 py-3 text-xs font-semibold tracking-wide uppercase hover:bg-navy/90 hover:-translate-y-0.5 transition-all duration-400 rounded shrink-0 premium-shadow">{t('careers.applyNow')} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" /></Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/careers/apply" state={{ role: t('apply.roleOther') }} className="group inline-flex items-center gap-2 border-2 border-gold text-gold px-8 py-4 text-sm font-semibold tracking-wide uppercase hover:bg-gold hover:text-white hover:-translate-y-0.5 transition-all duration-400 rounded">{t('careers.generalApp')} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" /></Link>
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section className="py-16 md:py-24 lg:py-40 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mb-6">Ready to Build With Us?</h2>
          <p className="text-navy/60 text-base leading-relaxed max-w-2xl mx-auto mb-10">Join a team that ships real products and builds real communities. Apply now and start your journey with SuPrazo.</p>
          <Link to="/careers/apply" className="inline-flex items-center gap-2 bg-gold text-white px-10 py-4 text-sm font-semibold tracking-wide uppercase hover:bg-gold/90 hover:-translate-y-0.5 transition-all duration-400 rounded premium-shadow">
            {t('careers.applyNow')} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
