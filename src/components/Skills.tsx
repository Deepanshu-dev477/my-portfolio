"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/data/portfolio";
import * as Si from "react-icons/si";

type SiIconMap = {
  [key: string]: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
};

function SkillChip({
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
    <motion.div
      whileHover={{ scale: 1.05, y: -1 }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--secondary))] text-sm font-medium text-[hsl(var(--foreground))] cursor-default transition-colors hover:border-[hsl(var(--primary)/0.45)] hover:bg-[hsl(var(--accent))]"
    >
      {Icon ? (
        <Icon size={15} style={{ color, flexShrink: 0 }} />
      ) : (
        <div
          className="w-[15px] h-[15px] rounded flex items-center justify-center text-[8px] font-bold text-white shrink-0"
          style={{ background: color }}
        >
          {name.slice(0, 2).toUpperCase()}
        </div>
      )}
      <span className="text-[hsl(var(--foreground))] text-sm">{name}</span>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const categories = Object.entries(skills) as [
    keyof typeof skills,
    (typeof skills)[keyof typeof skills],
  ][];

  return (
    <section
      id="skills"
      className="py-28 px-4 sm:px-6 bg-[hsl(var(--secondary)/0.3)]"
      ref={ref}
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm text-[hsl(var(--primary))] font-semibold tracking-widest uppercase">
            Tech Stack
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2">
            Skills &{" "}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] mt-4 max-w-md mx-auto text-sm leading-relaxed">
            A full-stack toolkit — from Figma prototypes to deployed Next.js SaaS.
          </p>
        </motion.div>

        {/* Category rows */}
        <div className="flex flex-col gap-8">
          {categories.map(([category, skillList], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.09 }}
            >
              {/* Category header with divider */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-0.5 h-5 rounded-full bg-[hsl(var(--primary))] shrink-0" />
                <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[hsl(var(--primary))] whitespace-nowrap">
                  {category}
                </span>
                <div className="flex-1 h-px bg-[hsl(var(--border))]" />
                <span className="text-[11px] text-[hsl(var(--muted-foreground))] whitespace-nowrap shrink-0">
                  {skillList.length} skills
                </span>
              </div>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.28,
                      delay: catIndex * 0.09 + i * 0.035,
                    }}
                  >
                    <SkillChip
                      iconName={skill.icon}
                      color={skill.color}
                      name={skill.name}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 overflow-hidden"
        >
          <p className="text-center text-[10px] text-[hsl(var(--muted-foreground))] mb-4 tracking-[0.18em] uppercase">
            All Technologies
          </p>
          <div className="relative flex">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
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
