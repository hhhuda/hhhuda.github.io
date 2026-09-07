import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, LockKeyhole, X } from "lucide-react";

export default function AccessGate({ children, title, nextTo, accessCode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const closeGate = () => {
    setIsOpen(false);
    setPassword("");
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== accessCode) {
      setError("That password does not match.");
      return;
    }
    closeGate();
    navigate(nextTo);
  };

  return (
    <>
      <div className="contents" onClick={() => setIsOpen(true)}>
        {children}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6" onClick={closeGate}>
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={`access-title-${title}`}
            className="relative w-full max-w-md rounded-2xl border border-white/15 bg-[#17151f] p-6 shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" aria-label="Close access dialog" onClick={closeGate} className="absolute right-4 top-4 text-white/50 transition-colors hover:text-white">
              <X className="h-5 w-5" />
            </button>
            <LockKeyhole className="h-6 w-6 text-purple-200" />
            <h2 id={`access-title-${title}`} className="mt-5 text-2xl font-semibold text-white">Enter password</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/60">This project is available by access code.</p>
            <form onSubmit={handleSubmit}>
              <label htmlFor={`access-code-${title}`} className="mt-6 block text-xs uppercase tracking-wider text-white/50">Password</label>
              <input id={`access-code-${title}`} type="password" autoFocus value={password} onChange={(event) => { setPassword(event.target.value); setError(""); }} className="mt-2 w-full rounded-lg border border-white/15 bg-white/[0.06] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/30 focus:border-purple-300/60" placeholder="Enter password" />
              {error && <p className="mt-2 text-sm text-red-300">{error}</p>}
              <button type="submit" disabled={!password} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-black transition-colors hover:bg-purple-200 disabled:cursor-not-allowed disabled:opacity-40">
                Continue <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
