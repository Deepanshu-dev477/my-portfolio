"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { skills } from "@/data/portfolio";
import * as Si from "react-icons/si";
import * as Tooltip from "@radix-ui/react-tooltip";

type SiIconMap = { [key: string]: React.ComponentType<{ size?: number; style?: React.CSSProperties }> };

/** Renders the correct react-icon or a styled letter-badge fallback */
function SkillIcon({
  iconName,
  color,
  name,
}: {
  iconName: string;
  color: string;
  name: string;
}) {
  const siIcons = Si as SiIconMap;
  const Icon = iconName !== "CUSTOM_ZUSTAND" ? siIcons[iconName] : null;

  return (
    <Tooltip.Provider delayDuration={80}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <motion.div
            whileHover={{ scale: 1.12, y: -5 }}
            whileTap={{ scale: 0.96 }}
            className="group flex flex-col items-center gap-2.5 p-4 rounded-2xl bg-[hsl(var(--secondary))] border border-[hsl(var(--border))] cursor-pointer transition-all duration-300"
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.boxShadow = `0 8px 28px ${color}28, 0 0 0 1px ${color}35`;
              el.style.background = `${color}0d`;
              el.style.borderColor = `${color}40`;
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.boxShadow = "";
              el.style.background = "";
              el.style.borderColor = "";
            }}
          >
            {Icon ? (
              <Icon size={30} style={{ color, filter: `drop-shadow(0 0 6px ${color}80)` }} />
            ) : (
              /* Fallback badge for icons not in react-icons (e.g. Zustand) */
              <div
                className="w-[30px] h-[30px] rounded-lg flex items-center justify-center text-[11px] font-bold text-white"
                style={{ background: color, boxShadow: `0 0 10px ${color}60` }}
              >
                {name.slice(0, 2).toUpperCase()}
              </div>
            )}
            <span className="text-[10px] text-[hsl(var(--muted-foreground))] font-medium group-hover:text-[hsl(var(--foreground))] transition-colors text-center leading-tight">
              {name}
            </span>
          </motion.div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="z-50 px-3 py-1.5 text-xs rounded-lg bg-[hsl(var(--foreground))] text-[hsl(var(--background))] font-semibold shadow-xl"
            sideOffset={6}
          >
            {name}
            <Tooltip.Arrow className="fill-[hsl(var(--foreground))]" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const categories = Object.keys(skills) as (keyof typeof skills)[];
  const [activeCategory, setActiveCategory] = useState<keyof typeof skills>(categories[0]);

  const activeSkills = skills[activeCategory];

  return (
    <section id="skills" className="py-28 px-6 bg-[hsl(var(--secondary)/0.3)]" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm text-[hsl(var(--primary))] font-semibold tracking-widest uppercase">
            Tech Stack
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2">
            Skills &{" "}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] mt-4 max-w-md mx-auto text-sm leading-relaxed">
            A full-stack toolkit — from Figma prototypes to deployed Next.js SaaS. Hover each icon for details.
          </p>
        </motion.div>

        {/* Category pill tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[hsl(var(--primary))] text-white shadow-md shadow-[hsl(var(--primary)/0.3)]"
                  : "bg-[hsl(var(--secondary))] text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] border border-[hsl(var(--border))]"
              }`}
            >
              {cat}
              <span
                className={`ml-1.5 text-[10px] ${
                  activeCategory === cat ? "text-white/70" : "text-[hsl(var(--muted-foreground))]"
                }`}
              >
                {skills[cat].length}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Icons grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3"
        >
          {activeSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
            >
              <SkillIcon iconName={skill.icon} color={skill.color} name={skill.name} />
            </motion.div>
          ))}
        </motion.div>

        {/* Marquee — all technologies */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 overflow-hidden"
        >
          <p className="text-center text-[10px] text-[hsl(var(--muted-foreground))] mb-4 tracking-[0.18em] uppercase">
            All Technologies
          </p>
          <div className="relative flex">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="flex gap-3 whitespace-nowrap"
            >
              {[
                ...Object.values(skills).flat(),
                ...Object.values(skills).flat(),
              ].map((skill, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] border border-[hsl(var(--border))] bg-[hsl(var(--secondary))] text-[hsl(var(--muted-foreground))]"
                >
                  {skill.name}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
