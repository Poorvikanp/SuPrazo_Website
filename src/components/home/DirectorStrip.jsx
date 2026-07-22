const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import { ArrowRight } from "lucide-react";

const DIRECTOR_IMG = "/images/director-portrait.png";

export default function DirectorStrip() {
  const { t } = useLang();

  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const quoteRef = useRef(null);
  const isQuoteInView = useInView(quoteRef, { once: false });
  const quoteText = t('directorStrip.quote');

  useEffect(() => {
    if (!isQuoteInView) {
      setIsComplete(false);
      return;
    }
    if (isComplete) return;
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
    <section className="py-28 lg:py-40 bg-alabaster">
      <style>{`
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-center">
           <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 0.8 }} className="lg:col-span-2">
              <div className="overflow-hidden rounded-lg"><img src={DIRECTOR_IMG} alt={t('director.name')} className="w-full h-[500px] lg:h-[600px] object-contain" loading="lazy" decoding="async" /></div>
           </motion.div>
           <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-3 flex flex-col justify-center">
            <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">{t('directorStrip.label')}</span>
            <div className="gold-line w-16 mt-4 mb-8" />
            <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-navy leading-snug italic">
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

            <div className="mt-8">
              <p className="text-navy font-semibold text-lg">{t('directorStrip.name')}</p>
              <p className="text-navy/50 text-sm mt-3">{t('directorStrip.title1')}</p>
            </div>

            <div className="mt-7">
              <a
                href="https://www.teamsumit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-white border-2 border-navy text-navy px-8 py-4 text-sm font-medium tracking-wide uppercase rounded-xl hover:bg-navy hover:text-white hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
              >
                View Profile
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-300" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
