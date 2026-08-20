import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { useLang } from "@/lib/LanguageContext";
import OptimizedImage from "@/components/ui/OptimizedImage";

import hiremeImage from "../../assets/images/hireme.jpg";
import mockprepImage from "../../assets/images/mockai.jpg";
import corPoolImage from "../../assets/images/CorPool.png";

const CORPOOL_IMG = corPoolImage;
const HIREME_IMG = hiremeImage;
const MOCKPREP_IMG = mockprepImage;

export default function ProductsPreview() {
  const { t } = useLang();
  const PRODUCTS = [
    { name: t('product.corpool'), tagline: t('productsPreview.corpoolTag'), desc: t('productsPreview.corpoolDesc'), link: "/products#corpool", image: CORPOOL_IMG },
    { name: t('product.interviewai'), tagline: t('productsPreview.interviewTag'), desc: t('productsPreview.interviewDesc'), link: "/products#interview-ai", image: HIREME_IMG },
    { name: t('product.mockprep'), tagline: t('productsPreview.mockprepTag'), desc: t('productsPreview.mockprepDesc'), link: "/products#mockprep", image: MOCKPREP_IMG },
  ];

  return (
    <section className="py-8 md:py-10 lg:py-12 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <SectionHeading title={t('productsPreview.title')} description={t('productsPreview.desc')} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {PRODUCTS.map((product, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-60px" }} transition={{ duration: 0.7, delay: i * 0.15 }} className="group border border-gray-100 rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="overflow-hidden">
                 <OptimizedImage src={product.image} alt={product.name} className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
              </div>
              <div className="p-6 sm:p-8 md:p-10">
                <h3 className="text-xl font-semibold text-navy mb-2">{product.name}</h3>
                <p className="text-gold text-sm font-medium mb-4">{product.tagline}</p>
                <p className="text-navy/50 text-sm leading-relaxed mb-8">{product.desc}</p>
                <Link to={product.link} className="inline-flex items-center gap-2 text-navy text-xs font-semibold tracking-wider uppercase group-hover:text-gold transition-colors duration-300">{t('productsPreview.viewDetails')} <ArrowRight size={14} /></Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}