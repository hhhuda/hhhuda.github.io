import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 text-center text-muted-foreground text-xs">
        &copy; {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
}