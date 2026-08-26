import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-10 right-6 sm:right-16">      
        <motion.span
          initial={{ rotate: -8, opacity: 0, scale: 0.8 }}
          animate={{ rotate: 6, opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "spring" }}
          className="inline-flex items-center rounded-full bg-red-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg"
        >
          ✨ New work
        </motion.span>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg text-white/60 mb-6"
        >
          👋 Hello, I'm Huda!
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="text-4xl sm:text-6xl font-bold leading-[1.1] tracking-tight max-w-3xl mx-auto"
        >
          {/* I design, research & build digital products — with a focus on how people actually use them. */}
          {/* I’m interested in the space between people, products, and technology — and building things that work for all three. */}
          Building digital products through research, design, and technology.
        </motion.h1>
        <motion.a
          href="#work"
          onClick={(event) => {
            event.preventDefault();
            document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 inline-flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
        >
          <span className="text-xs uppercase tracking-[0.2em]">Selected work</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}