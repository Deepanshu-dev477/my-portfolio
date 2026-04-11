"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { experiences } from "@/data/portfolio";
import { HiCalendar, HiChevronDown, HiChevronUp } from "react-icons/hi";
import { TbBuildingSkyscraper } from "react-icons/tb";

function ExperienceCard({
  exp,
  index,
  isInView,
}: {
  exp: (typeof experiences)[0];
  index: number;
  isInView: boolean;
}) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      className="relative pl-14"
    >
      {/* Timeline dot */}
      <div
        className={`absolute left-[19px] top-6 w-3.5 h-3.5 rounded-full border-2 transition-all ${
          exp.current
            ? "bg-[hsl(var(--primary))] border-[hsl(var(--primary))] shadow-[0_0_14px_hsl(var(--primary)/0.55)]"
            : "bg-[hsl(var(--background))] border-[hsl(var(--border))]"
        }`}
      />

      {/* Card */}
      <div
        className={`rounded-2xl border transition-all duration-300 ${
          exp.current
            ? "bg-[hsl(var(--card))] border-[hsl(var(--primary)/0.3)] shadow-sm shadow-[hsl(var(--primary)/0.06)]"
            : "bg-[hsl(var(--card))] border-[hsl(var(--border))]"
        } hover:border-[hsl(var(--primary)/0.4)]`}
      >
        {/* Header — always visible */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left p-5 flex items-start justify-between gap-4"
        >
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="text-base font-bold text-[hsl(var(--foreground))]">
                {exp.role}
              </h3>
              {exp.current && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-400/10 text-emerald-400 font-semibold border border-emerald-400/20">
                  CURRENT
                </span>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-[hsl(var(--muted-foreground))]">
              <span className="flex items-center gap-1.5">
                <TbBuildingSkyscraper size={13} className="text-[hsl(var(--primary))]" />
                {exp.company}
              </span>
              <span className="flex items-center gap-1.5">
                <HiCalendar size={13} />
                {exp.period}
              </span>
            </div>
            {!expanded && (
              <p className="text-xs text-[hsl(var(--muted-foreground))] mt-2 italic">
                {exp.summary}
              </p>
            )}
          </div>
          <div className="text-[hsl(var(--muted-foreground))] shrink-0 mt-1">
            {expanded ? <HiChevronUp size={18} /> : <HiChevronDown size={18} />}
          </div>
        </button>

        {/* Expanded achievements */}
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="px-5 pb-5"
          >
            <div className="pt-1 border-t border-[hsl(var(--border))] space-y-2.5">
              {exp.achievements.map((ach, j) => (
                <div key={j} className="flex items-start gap-3">
                  <div className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary)/0.7)] shrink-0" />
                  <p className="text-[13px] text-[hsl(var(--muted-foreground))] leading-[1.65]">
                    {ach}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      className="py-28 px-6 bg-[hsl(var(--secondary)/0.3)]"
      ref={ref}
    >
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-[hsl(var(--primary))] font-semibold tracking-widest uppercase">
            Career
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2">
            5.6 Years,{" "}
            <span className="gradient-text">One Company</span>
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            Deep ownership over multiple products — not a series of short stints,
            but compounding expertise in one high-growth product environment.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-[25px] top-0 bottom-0 w-px bg-gradient-to-b from-[hsl(var(--primary))] via-[hsl(var(--primary)/0.25)] to-transparent" />
          <div className="space-y-5">
            {experiences.map((exp, i) => (
              <ExperienceCard
                key={i}
                exp={exp}
                index={i}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
