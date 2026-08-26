import React from "react";
import { motion } from "framer-motion";

const items = [
  { emoji: "🧠", title: "Research", desc: "User interviews, usability testing, and turning findings into something a team can actually act on." },
  { emoji: "✨", title: "Design", desc: "Wireframes, flows, and interfaces that stay clear without losing their personality." },
  { emoji: "💻", title: "Build", desc: "Frontend development that makes the design real — responsive, accessible, and fast." },
];

export default function WhatIDo() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl sm:text-5xl font-bold mb-12">What I do</h2>
      <div className="grid sm:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="select-none rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
          >
            <span className="text-3xl">{it.emoji}</span>
            <h3 className="mt-4 text-xl font-semibold">{it.title}</h3>
            <p className="mt-2 text-white/60 leading-relaxed">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}