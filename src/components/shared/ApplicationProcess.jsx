import React, { useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { UserPlus, ClipboardCheck, ShieldCheck, MessageSquare, CheckCircle, GraduationCap, Trophy, ArrowDown } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import SectionHeading from "@/components/shared/SectionHeading";

export default function ApplicationProcess() {
  const { t } = useLang();
  const lineRef = useRef(null);
  const lastIconRef = useRef(null);

  useLayoutEffect(() => {
    if (lineRef.current && lastIconRef.current) {
      const stepDiv = lastIconRef.current.parentElement.parentElement;
      const iconHeight = lastIconRef.current.offsetHeight;
      const lineHeight = stepDiv.offsetTop + iconHeight;
      lineRef.current.style.height = `${lineHeight}px`;
    }
  }, []);

  const STEPS = [
    { icon: UserPlus, title: t('process.step1'), desc: t('process.step1Desc') },
    { icon: ClipboardCheck, title: t('process.step2'), desc: t('process.step2Desc') },
    { icon: ShieldCheck, title: t('process.step3'), desc: t('process.step3Desc') },
    { icon: MessageSquare, title: t('process.step4'), desc: t('process.step4Desc') },
    { icon: CheckCircle, title: t('process.step5'), desc: t('process.step5Desc') },
    { icon: GraduationCap, title: t('process.step6'), desc: t('process.step6Desc') },
    { icon: Trophy, title: t('process.step7'), desc: t('process.step7Desc') },
  ];

  return (
    <section className="py-28 lg:py-40 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <SectionHeading label={t('process.label')} title={t('process.title')} />

        <div className="relative">
          {/* Connecting line - vertical on mobile, horizontal on desktop */}
          <div ref={lineRef} className="absolute left-6 md:left-1/2 top-0 w-px bg-gold/20 md:-translate-x-1/2" />

          <div className="flex flex-col gap-12 md:gap-16">
            {STEPS.map((step, i) => {
              const isLeft = i % 2 === 0;
              const isLast = i === STEPS.length - 1;
              return (
                <div key={i} className="relative flex flex-col md:flex-row items-start gap-6 md:gap-0">
                  {/* Step number circle - centered on desktop */}
                  <div className={`absolute left-6 md:left-1/2 -translate-x-1/2 z-10 ${i === 0 ? "top-0" : "top-0"}`}>
                    <motion.div
                      ref={isLast ? lastIconRef : null}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: false, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center premium-shadow"
                    >
                      <step.icon size={20} />
                    </motion.div>
                  </div>

                  {/* Content card */}
                  <div className={`w-full md:w-[calc(50%-3rem)] pl-16 md:pl-0 ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:ml-auto"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className="bg-alabaster border border-gray-100 rounded-lg p-6 hover:premium-shadow transition-all duration-500 hover:-translate-y-1"
                    >
                      <div className={`flex items-center gap-2 mb-2 ${isLeft ? "md:justify-end" : ""}`}>
                        <span className="text-gold text-xs font-bold tracking-[0.2em]">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        {i < STEPS.length - 1 && (
                          <ArrowDown size={14} className="text-gold/40 md:hidden" />
                        )}
                      </div>
                      <h4 className="text-lg font-semibold text-navy mb-2">{step.title}</h4>
                      <p className="text-navy/50 text-sm leading-relaxed">{step.desc}</p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}