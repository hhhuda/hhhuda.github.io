import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/**
 * @param {{ project: { link: string, logo: string, tag: string, outcome: string, title: string, skills: string[] }, index: number }} props
 */
export default function ProjectCard({ project, index }) {
  return (
    <motion.a
      href={project.link}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group block rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-xl">
          {project.logo}
        </span>
        <span className="text-xs font-medium uppercase tracking-wider text-white/50">
          {project.tag}
        </span>
      </div>
      <h3 className="mt-5 text-2xl sm:text-3xl font-semibold leading-snug group-hover:translate-x-1 transition-transform duration-300">
        {project.outcome}
      </h3>
      <p className="mt-3 text-white/60">{project.title}</p>
      <div className="mt-5 flex flex-wrap items-center gap-2">
        {project.skills.map((s) => (
          <span key={s} className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
            {s}
          </span>
        ))}
      </div>
      <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-white/80 group-hover:text-white">
        View case study
        <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
      </span>
    </motion.a>
  );
}