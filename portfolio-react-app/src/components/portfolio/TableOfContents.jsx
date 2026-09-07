import React, { useEffect, useState } from "react";

export default function TableOfContents({ sections }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -75% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="hidden lg:block sticky top-24 self-start max-h-[calc(100vh-8rem)] overflow-auto pb-8">
      <p className="font-mono text-xs uppercase tracking-wider text-white/40 mb-4">Contents</p>
      <ul className="space-y-2.5 border-l border-white/10">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={`block pl-4 -ml-px border-l-2 text-sm transition-colors ${
                active === s.id
                  ? "border-white text-white font-medium"
                  : "border-transparent text-white/50 hover:text-white/80"
              }`}
            >
              <span className="font-mono text-xs text-white/40 mr-2">{s.num}</span>
              {s.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}