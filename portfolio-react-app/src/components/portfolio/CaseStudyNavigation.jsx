import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, House } from "lucide-react";

export default function CaseStudyNavigation({ nextLabel, nextTo }) {
  return (
    <nav className="mt-6 grid gap-4 pt-10 text-base sm:grid-cols-2 sm:text-lg">
      <Link to="/" className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 text-white/70 transition-colors hover:border-purple-300/40 hover:bg-purple-300/[0.06] hover:text-white">
        <House className="h-6 w-6 shrink-0 text-white/50 transition-colors group-hover:text-purple-200" />
        <span>
          <span className="block text-xs uppercase tracking-wider text-white/40">Return to</span>
          <span className="block mt-1">Home</span>
        </span>
      </Link>
      <Link to={nextTo} className="group flex items-center justify-end gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 text-right text-white/70 transition-colors hover:border-purple-300/40 hover:bg-purple-300/[0.06] hover:text-white">
        <span>
          <span className="block text-xs uppercase tracking-wider text-white/40">Continue to</span>
          <span className="mt-1 block">Next case study: {nextLabel}</span>
        </span>
        <ArrowRight className="h-6 w-6 shrink-0 text-white/50 transition-colors group-hover:text-purple-200" />
      </Link>
    </nav>
  );
}
