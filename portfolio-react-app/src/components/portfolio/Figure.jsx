import React from "react";

export default function Figure({ alt, src, caption, label, labelType, className = "" }) {
  const labelColor =
    labelType === "before"
      ? "border-red-400 text-red-400"
      : labelType === "after"
      ? "border-teal-400 text-teal-400"
      : "border-white/20 text-white/50";

  return (
    <figure className={`flex flex-col gap-2 min-w-0 ${className}`}>
      <div className="flex items-center justify-center rounded-lg border border-dashed border-white/20 bg-white/5 text-center min-h-[160px] overflow-hidden">
        {src ? (
          <img src={src} alt={alt} className="h-auto w-full object-contain" />
        ) : (
          <p className="px-6 py-16 text-xs text-white/40 max-w-xs leading-relaxed">{alt}</p>
        )}
      </div>
      {label && (
        <span className={`font-mono text-xs uppercase tracking-wider pt-2 border-t-2 ${labelColor}`}>
          {label}
        </span>
      )}
      {caption && (
        <figcaption className="font-mono text-xs leading-relaxed text-white/50">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}