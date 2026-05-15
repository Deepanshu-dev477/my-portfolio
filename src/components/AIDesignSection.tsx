"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const aiTools = [
  { name: "Figma AI", detail: "auto-layout suggestions and component matching" },
  { name: "v0 by Vercel", detail: "prompt-to-React component prototyping" },
  { name: "GitHub Copilot", detail: "accelerating component scaffolding and hooks" },
  { name: "Prompt engineering", detail: "using LLMs to generate system-compliant UI patterns" },
];

export default function AIDesignSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="ai-design"
      className="py-28 px-6 bg-[hsl(var(--secondary)/0.3)]"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm text-[hsl(var(--primary))] font-semibold tracking-widest uppercase">
            Where I&apos;m headed
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2">
            AI-ready <span className="gradient-text">design systems</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: body copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-5"
          >
            <p className="text-[hsl(var(--muted-foreground))] leading-[1.85] text-[15px]">
              Design systems are only as powerful as the workflows built around them.
              I&apos;m actively exploring how AI tooling — Figma AI, prompt-to-component
              workflows, and agentic design pipelines — can make component libraries
              faster to consume and easier to keep consistent at scale.
            </p>
            <p className="text-[hsl(var(--muted-foreground))] leading-[1.85] text-[15px]">
              My current focus: structuring Figma libraries and design tokens so they
              are reliably consumable by AI-assisted tools — not just by human designers.
            </p>
          </motion.div>

          {/* Right: tool cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-3"
          >
            {aiTools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 14 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.3 + i * 0.08 }}
                className="flex items-start gap-3 p-4 rounded-2xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] hover:border-[hsl(var(--primary)/0.35)] transition-colors"
              >
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))] shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[hsl(var(--foreground))]">
                    {tool.name}
                  </p>
                  <p className="text-xs text-[hsl(var(--muted-foreground))] mt-0.5 leading-relaxed">
                    {tool.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
