import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-3">
        <a href="/" className="text-sm sm:text-md font-bold uppercase tracking-[0.15em] text-foreground whitespace-nowrap">
          Huda Mahmood
        </a>
        <nav className="flex items-center gap-3 sm:gap-6 text-sm font-medium">
          {/* <a href="#work" className="text-white/70 hover:text-white transition-colors">Work</a> */}
          {/* <a href="#about" className="text-white/70 hover:text-white transition-colors">About</a> */}
          <a 
            href="/resume.pdf" 
            target="_blank"
            rel="noreferrer"
            className="text-white/70 hover:text-white transition-colors whitespace-nowrap"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center whitespace-nowrap rounded-full bg-white px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold text-primary hover:bg-white/90 transition-colors"
          >
            Work with me
          </a>
        </nav>
      </div>
    </header>
  );
}