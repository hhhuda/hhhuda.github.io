import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    logo: "🛡️",
    title: "FraudFree",
    tag: "UX Research · Accessibility",
    outcome:
      "A scam-prevention prototype for older adults with hearing loss, reshaped by 13 survey responses and 10 usability sessions.",
      // "Shipped the frontend for a feature used by thousands of people, cutting task completion time by roughly 40%.",
    skills: ["Usability testing", "Personas", "Accessibility"],
    link: "/fraudfree",
  },
  {
    logo: "🎯",
    title: "Eventsia",
    tag: "Frontend · Product",
    outcome:
      "Surfaced three key friction points, shaping a calmer onboarding flow and measurably fewer support tickets.",
    skills: ["User interviews", "Usability testing", "Synthesis"],
    link: "#",
    requiresAccess: true,
    accessTo: "/eventsia",
    accessCode: "thispasswordispublic",
  },
  
];

export default function Work() {
  return (
    <section id="work" className="max-w-6xl mx-auto px-6 py-20">
      <div className="flex items-end justify-between mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold">Selected work</h2>
        <span className="text-sm text-white/50">two projects</span>
      </div>
      <div className="grid gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}