"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  delay?: number;
  startDelay?: number;
  className?: string;
  onComplete?: () => void;
}

export function Typewriter({ text, delay = 80, startDelay = 0, className = "", onComplete }: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;

    if (displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, delay);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [displayText, text, delay, started, onComplete]);

  return (
    <span className={className}>
      {displayText}
      {displayText.length < text.length && started && <span className="animate-pulse">|</span>}
    </span>
  );
}
