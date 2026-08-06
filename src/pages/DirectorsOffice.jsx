const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { useLang } from "@/lib/LanguageContext";

const DIRECTOR_PORTRAIT = "/images/director-portrait.png";
const DIRECTOR_OFFICE = "/images/directorimage2.png";

export default function DirectorsOffice() {
  const { t } = useLang();

  const BIO_POINTS = [
    t('director.bio1'), t('director.bio2'), t('director.bio3'),
    t('director.bio4'), t('director.bio5'), t('director.bio6'),
  ];

  const PHILOSOPHY = [
    { theme: t('director.philo1Theme'), content: t('director.philo1') },
    { theme: t('director.philo2Theme'), content: t('director.philo2') },
    { theme: t('director.philo3Theme'), content: t('director.philo3') },
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const quoteRef = useRef(null);
  const isQuoteInView = useInView(quoteRef, { once: false });
  const quoteText = t('director.quote');

  useEffect(() => {
    if (!isQuoteInView) return;

    setDisplayedText("");
    setIsTyping(true);
    setIsComplete(false);

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < quoteText.length) {
        setDisplayedText(quoteText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
        setIsComplete(true);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [isQuoteInView, quoteText]);

  return (
    <div data-aos="fade-up">
      <style>{`
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
      <section className="relative overflow-hidden min-h-[300px] sm:min-h-[400px] md:min-h-[500px]" style={{ backgroundImage: `url(${DIRECTOR_OFFICE})`, backgroundSize: 'cover', backgroundPosition: 'top center' }}>
         <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-transparent" />
         
         <div className="relative max-w-[1400px] mx-auto px-6 lg:px-16 py-8 md:py-10 lg:py-12">
           <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
               className="w-full md:w-[45%] lg:w-[38%] flex flex-col justify-center mt-6 md:mt-8"
            >
              <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">LEADERSHIP</span>
               <h1 className="font-display text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-navy mt-4 leading-tight">
                 {t('director.name')}
               </h1>
              <div className="gold-line w-16 mt-6 mb-6" />

              <div className="flex flex-row gap-4">
                <a
                  href="https://instagram.com/team_.sumit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:scale-110 hover:text-[#d62976] transition-all duration-300"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/sumit-ceo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:scale-110 hover:border-[#0A66C2]/30 hover:text-[#0A66C2] transition-all duration-300"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </motion.div>

            <div className="w-full lg:w-[62%]">
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-40 bg-alabaster">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <img
                src={DIRECTOR_PORTRAIT}
                alt={t('director.name')}
                className="w-full h-auto object-contain max-h-[500px]"
                loading="lazy"
                decoding="async"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">{t('director.profileLabel')}</span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mt-4 leading-tight">{t('director.name')}</h2>
              <p className="text-navy/50 text-sm mt-2 mb-2">{t('director.title1')}</p>
              <div className="gold-line w-16 mb-8" />

              <blockquote className="font-display text-xl lg:text-2xl text-navy italic leading-relaxed mb-10 pl-6 border-l-2 border-gold2">
                <span ref={quoteRef}>
                  {displayedText}
                  {isTyping && (
                    <span
                      className="inline-block w-[2px] h-[1em] bg-gold ml-[2px] align-middle"
                      style={{ animation: 'cursorBlink 1s step-end infinite' }}
                    />
                  )}
                </span>
              </blockquote>

              <div className="flex flex-col gap-4">
                {BIO_POINTS.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                    <p className="text-navy/60 text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-40 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <SectionHeading label={t('director.philoLabel')} title={t('director.philoTitle')} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {PHILOSOPHY.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="border border-gray-100 rounded-lg p-10"
              >
                <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">{item.theme}</span>
                <div className="gold-line w-12 mt-4 mb-6" />
                <p className="font-display text-lg text-navy italic leading-relaxed">"{item.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
