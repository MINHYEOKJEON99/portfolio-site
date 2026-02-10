"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);
      setIsVisible(false);

      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);

        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const isAtBottom = scrollTop + windowHeight >= documentHeight - 100;

        if (!isAtBottom) {
          setIsVisible(true);
        }
      }, 800);
    };

    const checkInitialPosition = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isAtBottom = scrollTop + windowHeight >= documentHeight - 100;
      setIsVisible(!isAtBottom);
    };

    checkInitialPosition();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const scrollToNext = () => {
    window.scrollBy({
      top: window.innerHeight * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-1 cursor-pointer transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      onClick={scrollToNext}
    >
      <span className="text-xs font-semibold tracking-[0.2em] text-muted-foreground">SCROLL DOWN</span>
      <div className="relative h-12 w-10 overflow-hidden -mt-3">
        <ChevronDown className="absolute h-8 w-8 text-muted-foreground animate-scroll-arrow" />
        <ChevronDown className="absolute h-8 w-8 text-muted-foreground animate-scroll-arrow-delayed" />
      </div>
    </div>
  );
}
