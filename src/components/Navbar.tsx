"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { HiSun, HiMoon, HiMenuAlt3, HiX, HiDownload } from "react-icons/hi";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[hsl(var(--background)/0.82)] backdrop-blur-md border-b border-[hsl(var(--border))] shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#hero"
          whileHover={{ scale: 1.06 }}
          className="flex items-center gap-2"
        >
          <span className="text-xl font-bold gradient-text tracking-tight">DK</span>
          <span className="hidden sm:block text-xs text-[hsl(var(--muted-foreground))] font-medium">
            UX Engineer
          </span>
        </motion.a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[hsl(var(--primary))] transition-all duration-200 group-hover:w-full rounded" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {/* Resume */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-[hsl(var(--border))] text-xs font-semibold text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:border-[hsl(var(--primary)/0.4)] transition-all"
          >
            <HiDownload size={13} />
            Resume
          </motion.a>

          {/* Theme toggle */}
          {mounted && (
            <motion.button
              whileTap={{ scale: 0.88 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-[hsl(var(--secondary))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--primary)/0.15)] transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <HiSun size={16} /> : <HiMoon size={16} />}
            </motion.button>
          )}

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[hsl(var(--secondary))] text-[hsl(var(--foreground))]"
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={16} /> : <HiMenuAlt3 size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[hsl(var(--background)/0.96)] backdrop-blur-md border-b border-[hsl(var(--border))]"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors py-2 px-2 rounded-lg hover:bg-[hsl(var(--secondary))]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-[hsl(var(--border))] mt-1">
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))] py-2 px-2"
                >
                  <HiDownload size={14} />
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
