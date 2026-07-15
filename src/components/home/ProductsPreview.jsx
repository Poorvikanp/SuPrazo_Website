import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { useLang } from "@/lib/LanguageContext";

const CORPOOL_IMG = "/images/CorPool.png";
const HIREME_IMG = "/images/hireme.jpg";
const MOCKPREP_IMG = "/images/mockai.jpg";

export default function ProductsPreview() {
  const { t } = useLang();
  const PRODUCTS = [
    { name: t('product.corpool'), tagline: t('productsPreview.corpoolTag'), desc: t('productsPreview.corpoolDesc'), link: "/products", image: CORPOOL_IMG },
    { name: t('product.interviewai'), tagline: t('productsPreview.interviewTag'), desc: t('productsPreview.interviewDesc'), link: "/products", image: HIREME_IMG },
    { name: t('product.mockprep'), tagline: t('productsPreview.mockprepTag'), desc: t('productsPreview.mockprepDesc'), link: "/products", image: MOCKPREP_IMG },
  ];

  return (
    <section className="py-28 lg:py-40 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <SectionHeading label={t('productsPreview.label')} title={t('productsPreview.title')} description={t('productsPreview.desc')} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map((product, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay: i * 0.15 }} className="group border border-gray-100 rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
              </div>
              <div className="p-10">
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