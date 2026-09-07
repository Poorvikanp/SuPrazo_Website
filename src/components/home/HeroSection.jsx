const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { useLang } from "@/lib/LanguageContext";
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import PremiumButton from "@/components/shared/PremiumButton";
import hero1 from "../../assets/images/optimized/hero1-1920.webp";
import hero1Fallback from "../../assets/images/hero1.png";
import hero2 from "../../assets/images/optimized/hero2-1080.webp";
import hero2Fallback from "../../assets/images/hero2.png";
import hero3 from "/images/optimized/Hero3-1376.webp";
import hero3Fallback from "/images/Hero3.png";
import hero4 from "/images/optimized/hero4-1408.webp";
import hero4Fallback from "/images/hero4.png";

const HERO_SLIDES = [
  { src: hero1Fallback, srcWebp: hero1, alt: "SuPrazo Technologies campus", fit: "object-cover" },
  { src: hero2Fallback, srcWebp: hero2, alt: "SuPrazo enterprise campus", fit: "object-cover" },
  { src: hero3Fallback, srcWebp: hero3, alt: "SuPrazo innovation community", fit: "object-cover" },
  { src: hero4Fallback, srcWebp: hero4, alt: "SuPrazo engineering culture and AI innovation", fit: "object-cover" },
];

const HERO_CONTENT = [
  { labelKey: "hero.label", titleKey: "hero.title", subtitleKey: "hero.subtitle", exploreEcosystemKey: "hero.exploreEcosystem", exploreProductsKey: "hero.exploreProducts" },
  { labelKey: "hero.label", titleKey: "hero.title", subtitleKey: "hero.subtitle", exploreEcosystemKey: "hero.exploreEcosystem", exploreProductsKey: "hero.exploreProducts" },
  { labelKey: "hero.label", titleKey: "hero.title", subtitleKey: "hero.subtitle", exploreEcosystemKey: "hero.exploreEcosystem", exploreProductsKey: "hero.exploreProducts" },
  { labelKey: "hero.label", titleKey: "hero.aiTitle", subtitleKey: "hero.aiSubtitle", exploreEcosystemKey: "hero.exploreProducts", exploreProductsKey: "hero.joinOurTeam" },
];

export default function HeroSection() {
  const { t } = useLang();
  const [activeSlide, setActiveSlide] = React.useState(0);
  const loadedSlidesRef = React.useRef(new Set([0]));
  const [, forceUpdate] = React.useState(0);

  const markSlideLoaded = React.useCallback((index) => {
    if (!loadedSlidesRef.current.has(index)) {
      loadedSlidesRef.current.add(index);
      forceUpdate((n) => n + 1);
    }
  }, []);

  const preloadSlide = React.useCallback((index) => {
    if (loadedSlidesRef.current.has(index)) return;
    const img = new Image();
    img.src = HERO_SLIDES[index].srcWebp;
    img.onload = () => markSlideLoaded(index);
    img.onerror = () => markSlideLoaded(index);
  }, [markSlideLoaded]);

  React.useEffect(() => {
    const nextIndex = (activeSlide + 1) % HERO_SLIDES.length;
    preloadSlide(nextIndex);
  }, [activeSlide, preloadSlide]);

  const goToSlide = React.useCallback(
    (index) => {
      preloadSlide(index);
      setActiveSlide((index + HERO_SLIDES.length) % HERO_SLIDES.length);
    },
    [preloadSlide]
  );

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  const content = HERO_CONTENT[activeSlide];
  const label = t(content.labelKey);
  const title = t(content.titleKey);
  const subtitle = t(content.subtitleKey);
  const exploreEcosystem = t(content.exploreEcosystemKey);
  const exploreProducts = t(content.exploreProductsKey);

  return (
    <section className="relative h-[48vh] sm:h-[56vh] md:h-[60vh] lg:h-[64vh] md:min-h-[520px] w-full overflow-hidden">
      <motion.div
        className="absolute inset-0 w-full h-full overflow-hidden"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0 0 0)" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {HERO_SLIDES.map((slide, index) => (
          <picture key={index}>
            {loadedSlidesRef.current.has(index) && <source srcSet={slide.srcWebp} type="image/webp" />}
            <motion.img
              src={loadedSlidesRef.current.has(index) ? slide.src : undefined}
              alt={slide.alt}
              className={`absolute inset-0 w-full h-full ${slide.fit} hero-slide-img transition-opacity duration-1000 ease-in-out`}
              initial={{ scale: index === 0 ? 1.08 : 1 }}
              animate={{ opacity: activeSlide === index ? 1 : 0, scale: activeSlide === index ? 1 : 1.03 }}
              transition={{ opacity: { duration: 1, ease: "easeInOut" }, scale: { duration: 8, ease: "easeOut" } }}
              fetchPriority={activeSlide === index ? "high" : "auto"}
              style={{ filter: "brightness(1.05) contrast(1.05)" }}
            />
          </picture>
        ))}
      </motion.div>

      <div className="absolute inset-0" style={{ background: "linear-gradient(rgba(0,0,0,0.30), rgba(0,0,0,0.20))" }} />

      <div className="relative z-10 h-full max-w-[1400px] mx-0 lg:mx-auto px-6 lg:px-16 flex items-center justify-start py-6 sm:py-8 lg:py-10">
         <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
           className="w-[70%] sm:w-[75%] md:w-[70%] lg:w-[50%] xl:w-[30%] bg-gradient-to-r from-black/30 via-black/20 to-transparent p-6 sm:p-8 md:p-10 lg:p-12 rounded-sm text-left"
         >
            <span className="text-gold text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase block mb-2 sm:mb-3">
              {label}
            </span>
            <h1 className="font-display text-base sm:text-lg md:text-xl lg:text-[1.875rem] font-semibold text-white leading-snug tracking-tight">
              {title}
            </h1>
            <p className="mt-3 sm:mt-4 text-white/80 text-xs sm:text-sm leading-relaxed">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8">
              <PremiumButton to={content.exploreEcosystemKey === "hero.exploreProducts" ? "/products" : "/about"} variant="primary" className="w-full max-w-[200px]">{exploreEcosystem}</PremiumButton>
              <PremiumButton to={content.exploreProductsKey === "hero.joinOurTeam" ? "/careers" : "/products"} variant="light" className="w-full max-w-[200px]">{exploreProducts}</PremiumButton>
            </div>
         </motion.div>
      </div>

      <div className="absolute inset-y-0 left-4 right-4 z-20 hidden md:flex items-center justify-between pointer-events-none">
        <button
          type="button"
          onClick={() => goToSlide(activeSlide - 1)}
          aria-label="Previous hero slide"
          className="pointer-events-auto w-11 h-11 rounded-full bg-white/90 text-navy flex items-center justify-center shadow-lg hover:bg-gold hover:text-white hover:-translate-x-0.5 transition-all duration-300"
        >
          <ChevronDown className="transform rotate-90" size={22} />
        </button>
        <button
          type="button"
          onClick={() => goToSlide(activeSlide + 1)}
          aria-label="Next hero slide"
          className="pointer-events-auto w-11 h-11 rounded-full bg-white/90 text-navy flex items-center justify-center shadow-lg hover:bg-gold hover:text-white hover:translate-x-0.5 transition-all duration-300"
        >
          <ChevronDown className="transform -rotate-90" size={22} />
        </button>
      </div>

      <div className="absolute bottom-7 right-6 lg:right-16 z-20 flex items-center gap-2">
        {HERO_SLIDES.map((slide, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            aria-label={`Go to hero slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${activeSlide === index ? "w-8 bg-gold" : "w-2 bg-white/70 hover:bg-white"}`}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-white/60 text-[10px] font-medium tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDown size={18} className="text-white/60" />
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 767px) {
          .hero-slide-img {
            object-position: 65% 50%;
          }
        }
      `}</style>
    </section>
  );
}
