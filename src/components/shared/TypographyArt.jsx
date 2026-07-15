const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { motion } from "framer-motion";

const WEBUILD_ART = "/images/we-build-art.png";

export default function TypographyArt() {
  return (
    <section className="py-8 lg:py-10 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-[1400px] mx-auto px-6 lg:px-16 flex flex-col items-center"
      >
        <span className="text-navy text-[11px] font-semibold tracking-[0.3em] uppercase block mb-7">
          WHAT WE BUILD
        </span>
        <img
          src={WEBUILD_ART}
          alt="WE BUILD — Tomorrow's Enterprise"
          className="w-[75%] md:w-[55%] lg:w-[40%] h-auto object-contain"
          loading="lazy"
          decoding="async"
        />
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-navy leading-tight mt-8 text-center">
          Tomorrow's Enterprise
        </h2>
      </motion.div>
    </section>
  );
}
