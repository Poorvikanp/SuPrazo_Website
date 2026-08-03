const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import PremiumButton from "@/components/shared/PremiumButton";
import hero1 from "../../assets/images/hero1.png";
import hero2 from "../../assets/images/hero2.png";
import hero3 from "/images/Hero3.png";
import hero4 from "/images/hero4.png";

const HERO_SLIDES = [
  { src: hero1, alt: "SuPrazo Technologies campus", fit: "object-cover" },
  { src: hero2, alt: "SuPrazo enterprise campus", fit: "object-cover" },
  { src: hero3, alt: "SuPrazo innovation community", fit: "object-cover" },
  { src: hero4, alt: "SuPrazo engineering culture and AI innovation", fit: "object-cover" },
];

const HERO_CONTENT = [
  { label: "SuPrazo Technologies", title: "Building Tomorrow's Enterprise", subtitle: "Driving technology, innovation, research, products and community impact.", exploreEcosystem: "Explore Ecosystem", exploreProducts: "Explore Products" },
  { label: "SuPrazo Technologies", title: "Building Tomorrow's Enterprise", subtitle: "Driving technology, innovation, research, products and community impact.", exploreEcosystem: "Explore Ecosystem", exploreProducts: "Explore Products" },
  { label: "SuPrazo Technologies", title: "Building Tomorrow's Enterprise", subtitle: "Driving technology, innovation, research, products and community impact.", exploreEcosystem: "Explore Ecosystem", exploreProducts: "Explore Products" },
  { label: "SuPrazo Technologies", title: "Building the Future with AI", subtitle: "At Suprazo Technologies, our engineers, researchers, and innovators build intelligent AI products that empower businesses, students, and communities.", exploreEcosystem: "Explore Products", exploreProducts: "Join Our Team" },
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = React.useState(0);

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  const goToSlide = (index) => setActiveSlide((index + HERO_SLIDES.length) % HERO_SLIDES.length);

  const content = HERO_CONTENT[activeSlide];

  return (
    <section className="relative h-[90vh] min-h-[700px] w-full overflow-hidden">
      <motion.div
        className="absolute inset-0 w-full h-full overflow-hidden"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0 0 0)" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {HERO_SLIDES.map((slide, index) => (
          <motion.img
            key={index}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 w-full h-full ${slide.fit} transition-opacity duration-1000 ease-in-out`}
            initial={{ scale: index === 0 ? 1.08 : 1 }}
            animate={{ opacity: activeSlide === index ? 1 : 0, scale: activeSlide === index ? 1 : 1.03 }}
            transition={{ opacity: { duration: 1, ease: "easeInOut" }, scale: { duration: 8, ease: "easeOut" } }}
            fetchPriority={index === 0 ? "high" : "auto"}
            style={{ filter: "brightness(1.05) contrast(1.05)" }}
          />
        ))}
      </motion.div>

      <div className="absolute inset-0" style={{ background: "linear-gradient(rgba(0,0,0,0.30), rgba(0,0,0,0.20))" }} />

      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 lg:px-16 flex items-center py-10 lg:py-14">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
          className="w-full md:w-[50%] lg:w-[30%] bg-gradient-to-r from-black/30 via-black/20 to-transparent p-8 md:p-10 lg:p-12 rounded-sm"
        >
          <span className="text-gold text-[11px] font-semibold tracking-[0.3em] uppercase block mb-3">
            {content.label}
          </span>
          <h1 className="font-display text-lg md:text-xl lg:text-[1.875rem] font-semibold text-white leading-tight tracking-tight">
            {content.title}
          </h1>
          <p className="mt-4 text-white/80 text-sm leading-relaxed">
            {content.subtitle}
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <PremiumButton to={content.exploreEcosystem === "Explore Products" ? "/products" : "/about"} variant="primary">{content.exploreEcosystem}</PremiumButton>
            <PremiumButton to={content.exploreProducts === "Join Our Team" ? "/careers" : "/products"} variant="light">{content.exploreProducts}</PremiumButton>
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
    </section>
  );
}
