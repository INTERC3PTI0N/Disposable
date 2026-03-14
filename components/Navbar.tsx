"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [theme, setTheme] = useState("dark");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") || "dark";
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(localTheme);
    document.documentElement.setAttribute("data-theme", localTheme);

    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "services",
        "studios",
        "work",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Studios", href: "#studios" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-12 left-2 right-2 md:top-16 md:left-16 md:right-16 z-50 h-16 bg-bg/70 backdrop-blur-md border-[3px] border-accent flex items-center justify-between px-4 md:px-8">
      <div className="flex items-center">
        <Link
          href="#home"
          className="font-display text-3xl tracking-wide flex items-center gap-1"
        >
          <span className="text-accent">DISPOSABLE</span>
          <span className="text-text">FILMS</span>
        </Link>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`font-condensed font-bold uppercase tracking-[0.12em] text-sm px-3 py-1 neo-border transition-colors ${
              activeSection === link.href.substring(1)
                ? "bg-accent text-white border-accent"
                : "border-transparent hover:border-accent"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="p-2 neo-border neo-shadow-sm bg-bg hover:bg-bg2"
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? (
            <Sun size={20} className="text-accent" />
          ) : (
            <Moon size={20} className="text-accent" />
          )}
        </button>

        <Link
          href="#contact"
          className="hidden md:inline-flex items-center justify-center px-6 py-2 bg-accent text-white font-condensed font-bold uppercase tracking-wider neo-border neo-shadow"
        >
          Let&apos;s Talk
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 neo-border neo-shadow-sm bg-bg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={24} className="text-accent" />
          ) : (
            <Menu size={24} className="text-accent" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[60px] -left-[3px] -right-[3px] bg-bg/90 backdrop-blur-xl border-x-[3px] border-b-[3px] border-accent flex flex-col p-4 md:hidden neo-shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`font-condensed font-bold uppercase tracking-[0.12em] text-lg p-4 border-b-[3px] border-transparent hover:border-accent ${
                activeSection === link.href.substring(1)
                  ? "text-accent"
                  : "text-text"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 inline-flex items-center justify-center px-6 py-4 bg-accent text-white font-condensed font-bold uppercase tracking-wider neo-border neo-shadow text-lg"
          >
            Let&apos;s Talk
          </Link>
        </div>
      )}
    </nav>
  );
}
