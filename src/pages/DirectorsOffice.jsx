const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { useLang } from "@/lib/LanguageContext";

const DIRECTOR_PORTRAIT = "/images/Director Image.png";
const DIRECTOR_OFFICE = "/images/directorimage2.png";

export default function DirectorsOffice() {
  const { t } = useLang();

  const BIO_POINTS = [
    t('director.bio1'), t('director.bio2'), t('director.bio3'),
    t('director.bio4'), t('director.bio5'), t('director.bio6'), t('director.bio7'),
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
  const isQuoteInView = useInView(quoteRef, { once: true });
  const quoteText = t('director.quote');

  useEffect(() => {
    if (!isQuoteInView || isComplete) return;
    setIsTyping(true);
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
  }, [isQuoteInView, isComplete, quoteText]);

  return (
    <div>
      <style>{`
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
      <section className="relative overflow-hidden min-h-[600px] lg:min-h-[900px]" style={{ backgroundImage: `url(${DIRECTOR_OFFICE})`, backgroundSize: 'cover', backgroundPosition: 'top center' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-transparent" />
        
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-16 py-10 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-[42%] flex flex-col justify-center"
            >
              <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">LEADERSHIP</span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy mt-4 leading-tight">
                Director's Office
              </h1>
              <div className="gold-line w-16 mt-6 mb-6" />

              <div className="flex flex-col sm:flex-row gap-2.5">
                <a
                  href="https://www.teamsumit.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 p-2.5 bg-white border border-gray-200 rounded-md shadow-sm hover:border-blue-800/30 hover:shadow-md transition-all duration-300"
                >
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20z"/>
                    <path d="M2 12h20"/>
                  </svg>
                  <div className="min-w-0">
                    <p className="text-[10px] text-navy/50 uppercase tracking-wider leading-tight">Portfolio</p>
                    <p className="text-xs font-medium text-navy truncate">www.teamsumit.com</p>
                  </div>
                </a>
                <a
                  href="https://instagram.com/team_.sumit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 p-2.5 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="instagram-gradient-director" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#feda75"/>
                        <stop offset="50%" stopColor="#d62976"/>
                        <stop offset="100%" stopColor="#4f5bd5"/>
                      </linearGradient>
                    </defs>
                    <rect width="20" height="20" x="2" y="2" rx="5" fill="url(#instagram-gradient-director)"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="white"/>
                    <circle cx="17.5" cy="6.5" r="1.5" fill="white"/>
                  </svg>
                  <div className="min-w-0">
                    <p className="text-[10px] text-navy/50 uppercase tracking-wider leading-tight">Instagram</p>
                    <p className="text-xs font-medium text-navy truncate">@team_.sumit</p>
                  </div>
                </a>
                <a
                  href="https://linkedin.com/in/sumit-ceo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 p-2.5 bg-white border border-gray-200 rounded-md shadow-sm hover:border-[#0A66C2]/30 hover:shadow-md transition-all duration-300"
                >
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="#0A66C2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9" fill="#0A66C2"/>
                    <circle cx="4" cy="4" r="2" fill="#0A66C2"/>
                  </svg>
                  <div className="min-w-0">
                    <p className="text-[10px] text-navy/50 uppercase tracking-wider leading-tight">LinkedIn</p>
                    <p className="text-xs font-medium text-navy truncate">linkedin.com/in/sumit-ceo</p>
                  </div>
                </a>
              </div>
            </motion.div>

            <div className="w-full lg:w-[58%]">
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-40 bg-alabaster">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <img
                src={DIRECTOR_PORTRAIT}
                alt={t('director.name')}
                className="w-full h-auto object-contain rounded-lg bg-alabaster"
                loading="lazy"
                decoding="async"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">{t('director.profileLabel')}</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mt-4">{t('director.name')}</h2>
              <p className="text-navy/50 text-sm mt-2 mb-2">{t('director.title1')}</p>
              <p className="text-navy/50 text-sm mb-6">{t('director.title2')}</p>
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

      <section className="py-28 lg:py-40 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <SectionHeading label={t('director.philoLabel')} title={t('director.philoTitle')} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PHILOSOPHY.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
