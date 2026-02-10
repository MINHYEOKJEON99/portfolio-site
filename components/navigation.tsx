"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-xl font-bold">
            JMH's portFolio
          </button>

          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" onClick={() => scrollToSection("projects")} className="dark:hover:text-white">
              Projects
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("skills")} className="dark:hover:text-white">
              Skills
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("experience")} className="dark:hover:text-white">
              Experience
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("contact")} className="dark:hover:text-white">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
