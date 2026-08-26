import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 min-h-[70vh] max-w-6xl mx-auto px-6 py-16 flex items-center justify-center text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-4xl">📬</span>
        <h2 className="mt-6 text-4xl sm:text-5xl font-bold">Let's talk!</h2>
        <p className="mt-4 text-lg text-white/60 max-w-md mx-auto">
          I'm open to research, design, and frontend roles. Say hi — I reply to everything.
        </p>
        <a
          href="mailto:mahmoodhuda19@gmail.com"
          className="mt-8 inline-flex items-center rounded-full bg-white px-6 py-3 text-base font-semibold text-primary hover:bg-white/90 transition-colors"
        >
          mahmoodhuda19@gmail.com
        </a>
      </motion.div>
    </section>
  );
}