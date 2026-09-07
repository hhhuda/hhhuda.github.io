import React from "react";
import { motion } from "framer-motion";

export default function CaseStudySection({ id, num, week, title, myPart, className = "", children }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4 }}
      className={`py-12 border-b border-white/10 scroll-mt-24 ${className}`}
    >
      <div className="font-mono text-xs uppercase tracking-wider text-white/50 mb-3">
        <span className="text-white/80 font-medium">{num}</span>{week && ` · ${week}`}
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold mb-3">{title}</h2>
      {myPart && (
        <p className="text-sm text-white/50 italic border-l-2 border-white/20 pl-3 mb-6">
          <span className="font-mono not-italic text-xs uppercase tracking-wider text-white/70 mr-2">My part</span>
          {myPart}
        </p>
      )}
      <div className="space-y-5">{children}</div>
    </motion.section>
  );
}