"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { projects } from "@/data/portfolio";
import { HiLightningBolt, HiArrowRight, HiLockClosed } from "react-icons/hi";
import { TbTarget, TbBulb, TbTrendingUp } from "react-icons/tb";

type PsiTab = "problem" | "solution" | "impact";

const psiTabs: { key: PsiTab; label: string; icon: React.ElementType }[] = [
  { key: "problem", label: "Problem", icon: TbTarget },
  { key: "solution", label: "Solution", icon: TbBulb },
  { key: "impact", label: "Impact", icon: TbTrendingUp },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<PsiTab>("problem");

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const isInView = useInView(cardRef, { once: true, margin: "-60px" });

  const psiContent: Record<PsiTab, string> = {
    problem: project.problem,
    solution: project.solution,
    impact: project.impact,
  };

  const { accentColor, color } = project;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[hsl(var(--primary)/0.4)] transition-all duration-500 flex flex-col"
    >
      {/* Parallax blob */}
      <motion.div
        style={{ y: bgY }}
        className={`absolute -top-20 -right-20 w-72 h-72 rounded-full bg-linear-to-br ${color} opacity-0 group-hover:opacity-[0.07] transition-opacity duration-700`}
      />

      {/* Inner glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
        style={{ boxShadow: `inset 0 0 60px ${accentColor}10` }}
      />

      {/* Top color bar */}
      <div className={`h-1 w-full bg-linear-to-r ${color} shrink-0`} />

      <div className="relative z-10 p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span
                className="text-[10px] font-semibold px-2 py-0.5 rounded-full border uppercase tracking-wider"
                style={{
                  color: accentColor,
                  borderColor: `${accentColor}35`,
                  background: `${accentColor}10`,
                }}
              >
                {project.subtitle}
              </span>
              {project.featured && (
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20 uppercase tracking-wider flex items-center gap-1">
                  <HiLightningBolt size={9} />
                  Featured
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold text-[hsl(var(--foreground))] leading-tight">
              {project.title}
            </h3>
          </div>
          <motion.div
            whileHover={{ x: 3, y: -3 }}
            className="p-2 rounded-xl shrink-0"
            style={{ background: `${accentColor}15` }}
          >
            <HiArrowRight size={18} style={{ color: accentColor }} />
          </motion.div>
        </div>

        {/* PSI Tabs */}
        <div className="flex gap-1 mb-3 p-1 rounded-xl bg-[hsl(var(--secondary))] border border-[hsl(var(--border))]">
          {psiTabs.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold py-1.5 rounded-lg transition-all duration-200 ${
                activeTab === key
                  ? "text-white shadow-sm"
                  : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
              }`}
              style={activeTab === key ? { background: accentColor } : {}}
            >
              <Icon size={12} />
              {label}
            </button>
          ))}
        </div>

        {/* PSI content */}
        <motion.p
          key={activeTab}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18 }}
          className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mb-5 min-h-20"
        >
          {psiContent[activeTab]}
        </motion.p>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-2 mb-5">
          {project.metrics.map((m) => (
            <div
              key={m.label}
              className="text-center p-2.5 rounded-xl"
              style={{
                background: `${accentColor}08`,
                border: `1px solid ${accentColor}20`,
              }}
            >
              <div
                className="text-base font-bold leading-none"
                style={{ color: accentColor }}
              >
                {m.value}
              </div>
              <div className="text-[10px] text-[hsl(var(--muted-foreground))] leading-tight mt-1">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-[11px] font-medium border"
              style={{
                borderColor: `${accentColor}28`,
                color: accentColor,
                background: `${accentColor}08`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex gap-2 mt-auto">
          <Link
            href={`/projects/${project.slug}`}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-white transition-all hover:opacity-90 active:scale-95"
            style={{ background: accentColor }}
          >
            View Case Study
            <HiArrowRight size={13} />
          </Link>
          <div
            className="px-4 py-2.5 rounded-xl text-xs font-semibold border flex items-center gap-1.5 text-[hsl(var(--muted-foreground))] cursor-default select-none"
            style={{ borderColor: `${accentColor}25` }}
            title="Internal product — not publicly available"
          >
            <HiLockClosed size={12} />
            Private
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <span className="text-sm text-[hsl(var(--primary))] font-semibold tracking-widest uppercase">
            Case Studies
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2">
            Products I&apos;ve{" "}
            <span className="gradient-text">Shipped</span>
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-[hsl(var(--muted-foreground))] text-center max-w-xl mx-auto mb-12 text-[15px] leading-relaxed"
        >
          Explore the problem, solution, and impact — then click{" "}
          <span className="text-[hsl(var(--foreground))] font-medium">
            View Case Study
          </span>{" "}
          for the full architecture and engineering decisions.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
