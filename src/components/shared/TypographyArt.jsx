const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { motion } from "framer-motion";

const WEBUILD_ART = "/images/we-build-art.png";

export default function TypographyArt() {
  return (
    <section className="pb-2 lg:pb-4 bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, margin: "-60px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-[1400px] mx-auto px-6 lg:px-16 flex flex-col items-center"
      >
        <img
          src={WEBUILD_ART}
          alt="WE BUILD — Tomorrow's Enterprise"
          className="w-[75%] md:w-[55%] lg:w-[40%] h-auto object-contain"
          loading="lazy"
          decoding="async"
        />
      </motion.div>
    </section>
  );
}
