import React from "react";
import { motion } from "framer-motion";
import CountUp from "@/components/shared/CountUp";

export default function StatsBar({ stats, dark = false, className = "" }) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 ${className}`}>
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="text-center"
        >
          <div className={`text-3xl lg:text-4xl font-bold ${dark ? "text-white" : "text-navy"}`}>
            {stat.prefix || ""}
            <CountUp end={stat.value} suffix={stat.suffix || ""} />
            {stat.suffixText || ""}
          </div>
          <div className={`text-xs font-medium tracking-wide uppercase mt-2 ${dark ? "text-white/50" : "text-navy/50"}`}>
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}