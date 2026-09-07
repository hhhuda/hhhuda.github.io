import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import CaseStudyNavigation from "../components/portfolio/CaseStudyNavigation";

export default function ProjectEventsia() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-6 pb-24">
      <Link to="/" className="inline-flex items-center gap-2 pt-8 text-sm text-white/60 transition-colors hover:text-white">
        <ArrowLeft className="h-4 w-4" /> Back to Home
      </Link>

      <header className="border-b border-white/10 pb-10 pt-12">
        <p className="flex flex-wrap gap-x-8 gap-y-1 font-mono text-xs uppercase tracking-wider text-white/50">
          <span>Product case study</span>
          <span>UX Research · Frontend</span>
        </p>
        <h1 className="mt-5 text-5xl font-bold leading-none tracking-tight sm:text-7xl">Eventsia</h1>
        <p className="mt-5 max-w-2xl text-xl leading-snug text-white/80">
          Surfacing the friction points behind a calmer event discovery and onboarding experience.
        </p>
      </header>

      <div className="grid gap-8 border-b border-white/10 py-8 sm:grid-cols-3">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-white/50">Focus</p>
          <p className="mt-2 text-white/80">Frontend · Product</p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-white/50">Methods</p>
          <p className="mt-2 text-white/80">User interviews · Usability testing · Synthesis</p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-white/50">Outcome</p>
          <p className="mt-2 text-white/80">A calmer onboarding flow with fewer support tickets.</p>
        </div>
      </div>

      <section className="border-b border-white/10 py-16">
        <p className="max-w-2xl text-2xl leading-relaxed text-white/90">
          A focused case study space for the research, decisions, and product work behind Eventsia.
        </p>
      </section>

      <CaseStudyNavigation nextLabel="FraudFree" nextTo="/fraudfree" />
    </div>
  );
}
