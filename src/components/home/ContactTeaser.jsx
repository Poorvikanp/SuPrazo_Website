import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import PremiumButton from "@/components/shared/PremiumButton";

export default function ContactTeaser() {
  const { t } = useLang();
  return (
    <section className="py-28 lg:py-40 bg-alabaster">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 text-center">
         <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 0.8 }}>
          <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">{t('contactTeaser.label')}</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mt-4 leading-tight">{t('contactTeaser.title')}</h2>
          <div className="gold-line w-16 mx-auto mt-6 mb-8" />
          <p className="text-navy/60 text-base leading-relaxed max-w-xl mx-auto mb-10">{t('contactTeaser.desc')}</p>
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <a href="mailto:hello@suprazo.com" className="flex items-center gap-2 text-navy/60 hover:text-gold transition-colors text-sm"><Mail size={16} /> hello@suprazo.com</a>
            <span className="flex items-center gap-2 text-navy/60 text-sm"><MapPin size={16} /> {t('contact.locationValue')}</span>
          </div>
          <PremiumButton to="/contact" variant="dark" size="lg">{t('contactTeaser.contact')}</PremiumButton>
        </motion.div>
      </div>
    </section>
  );
}