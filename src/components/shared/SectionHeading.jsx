import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({ label, title, description, align = "center", light = false, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-80px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"} ${className}`}
    >
      {label && (
        <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase block mb-4">
          {label}
        </span>
      )}
      <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight ${light ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base lg:text-lg leading-relaxed max-w-2xl ${align === "center" ? "mx-auto" : ""} ${light ? "text-white/70" : "text-navy/60"}`}>
          {description}
        </p>
      )}
      <div className={`gold-line w-16 mt-6 ${align === "center" ? "mx-auto" : ""}`} />
    </motion.div>
  );
}