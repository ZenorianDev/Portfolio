"use client";

import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total =
        document.documentElement.scrollHeight -
        window.innerHeight;
      setProgress((window.scrollY / total) * 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 h-48 w-px bg-white/20">
      <div
        className="w-full bg-white transition-all"
        style={{ height: `${progress}%` }}
      />
    </div>
  );
}
