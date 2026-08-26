import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    logo: "🎯",
    title: "Eventsia",
    tag: "Frontend · Product",
    outcome:
      "Surfaced three key friction points, shaping a calmer onboarding flow and measurably fewer support tickets.",
    skills: ["User interviews", "Usability testing", "Synthesis"],
    link: "#",
  },
  {
    logo: "⚡",
    title: "FraudFree",
    tag: "UX Research · Accessibility",
    outcome:
      "Shipped the frontend for a feature used by thousands of people, cutting task completion time by roughly 40%.",
    skills: ["React", "Design systems", "Accessibility"],
    link: "#",
  },
];

export default function Work() {
  return (
    <section id="work" className="max-w-6xl mx-auto px-6 py-20">
      <div className="flex items-end justify-between mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold">Selected work</h2>
        <span className="text-sm text-white/50">2 projects</span>
      </div>
      <div className="grid gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}