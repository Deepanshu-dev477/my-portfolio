"use client";

import { personalInfo } from "@/data/portfolio";
import { FaLinkedinIn } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[hsl(var(--border))]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[hsl(var(--muted-foreground))]">
          © {new Date().getFullYear()}{" "}
          <span className="gradient-text font-semibold">
            {personalInfo.name}
          </span>
        </p>
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg text-[hsl(var(--muted-foreground))] hover:text-[#0A66C2] hover:bg-[hsl(var(--secondary))] transition-all"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2 rounded-lg text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--secondary))] transition-all"
          >
            <HiMail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
