"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/portfolio";
import { HiArrowLeft, HiLockClosed, HiLightningBolt } from "react-icons/hi";
import { TbTarget, TbBulb, TbTrendingUp, TbBrain, TbPuzzle, TbArrowRight } from "react-icons/tb";

type Project = (typeof projects)[0];

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const up = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function CaseStudyClient({ project }: { project: Project }) {
  const { techDeepDive: dive, accentColor, color } = project;

  /* other projects for nav */
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">

      {/* ── Top color strip ── */}
      <div className={`h-1 w-full bg-linear-to-r ${color}`} />

      {/* ── Nav bar ── */}
      <div className="sticky top-0 z-40 bg-[hsl(var(--background)/0.85)] backdrop-blur-md border-b border-[hsl(var(--border))]">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors group"
          >
            <HiArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Portfolio
          </Link>
          <Link href="/" className="text-sm font-bold gradient-text tracking-tight">
            DK
          </Link>
        </div>
      </div>

      {/* ── Main ── */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <motion.div variants={stagger} initial="hidden" animate="visible">

          {/* ── Hero block ── */}
          <motion.div variants={up} className="mb-12">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span
                className="text-[11px] font-semibold px-3 py-1 rounded-full border uppercase tracking-wider"
                style={{
                  color: accentColor,
                  borderColor: `${accentColor}35`,
                  background: `${accentColor}10`,
                }}
              >
                {project.subtitle}
              </span>
              {project.featured && (
                <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20 uppercase tracking-wider flex items-center gap-1.5">
                  <HiLightningBolt size={10} />
                  Featured Project
                </span>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-[hsl(var(--foreground))] leading-tight mb-4">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-semibold border"
                  style={{
                    borderColor: `${accentColor}30`,
                    color: accentColor,
                    background: `${accentColor}08`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3">
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-4 rounded-2xl text-center"
                  style={{
                    background: `${accentColor}08`,
                    border: `1px solid ${accentColor}22`,
                  }}
                >
                  <div
                    className="text-3xl font-bold leading-none"
                    style={{ color: accentColor }}
                  >
                    {m.value}
                  </div>
                  <div className="text-xs text-[hsl(var(--muted-foreground))] mt-2 leading-snug">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── PSI Cards ── */}
          <motion.div variants={up} className="grid sm:grid-cols-3 gap-4 mb-12">
            {[
              { icon: TbTarget, label: "Problem", content: project.problem, col: "#ef4444" },
              { icon: TbBulb, label: "Solution", content: project.solution, col: accentColor },
              { icon: TbTrendingUp, label: "Impact", content: project.impact, col: "#22c55e" },
            ].map(({ icon: Icon, label, content, col }) => (
              <div
                key={label}
                className="p-5 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] flex flex-col gap-3"
              >
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl" style={{ background: `${col}15` }}>
                    <Icon size={16} style={{ color: col }} />
                  </div>
                  <span className="text-xs font-bold text-[hsl(var(--foreground))] uppercase tracking-wider">
                    {label}
                  </span>
                </div>
                <p className="text-sm text-[hsl(var(--muted-foreground))] leading-[1.75]">
                  {content}
                </p>
              </div>
            ))}
          </motion.div>

          {/* ── Divider ── */}
          <motion.div variants={up} className="flex items-center gap-4 mb-12">
            <div className="flex-1 h-px bg-[hsl(var(--border))]" />
            <span className="text-xs font-bold text-[hsl(var(--muted-foreground))] uppercase tracking-widest px-2">
              Engineering Deep Dive
            </span>
            <div className="flex-1 h-px bg-[hsl(var(--border))]" />
          </motion.div>

          {/* ── Architecture ── */}
          <motion.section variants={up} className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="p-2.5 rounded-xl"
                style={{ background: `${accentColor}15` }}
              >
                <TbBrain size={20} style={{ color: accentColor }} />
              </div>
              <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">
                Architecture
              </h2>
            </div>
            <div className="pl-12">
              <p className="text-[15px] text-[hsl(var(--muted-foreground))] leading-[1.85]">
                {dive.architecture}
              </p>
            </div>
          </motion.section>

          {/* ── Hard Problems Solved ── */}
          <motion.section variants={up} className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="p-2.5 rounded-xl"
                style={{ background: `${accentColor}15` }}
              >
                <TbPuzzle size={20} style={{ color: accentColor }} />
              </div>
              <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">
                Hard Problems Solved
              </h2>
            </div>
            <ul className="pl-12 space-y-4">
              {dive.challenges.map((challenge, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="flex items-start gap-4 p-4 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]"
                >
                  <div
                    className="mt-0.5 w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 text-white"
                    style={{ background: accentColor }}
                  >
                    {i + 1}
                  </div>
                  <p className="text-[14px] text-[hsl(var(--muted-foreground))] leading-[1.75]">
                    {challenge}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.section>

          {/* ── Why This Approach ── */}
          <motion.section variants={up} className="mb-14">
            <div
              className="p-6 rounded-2xl border-l-4"
              style={{
                borderColor: accentColor,
                background: `${accentColor}06`,
              }}
            >
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: accentColor }}
              >
                Why This Approach
              </p>
              <p className="text-[15px] text-[hsl(var(--muted-foreground))] leading-[1.85]">
                {dive.keyDecisions}
              </p>
            </div>
          </motion.section>

          {/* ── Confidentiality notice ── */}
          <motion.div
            variants={up}
            className="flex items-start gap-3 p-4 rounded-2xl bg-[hsl(var(--secondary))] border border-[hsl(var(--border))] mb-16"
          >
            <HiLockClosed
              size={16}
              className="text-[hsl(var(--muted-foreground))] shrink-0 mt-0.5"
            />
            <p className="text-sm text-[hsl(var(--muted-foreground))]">
              This is an internal B2B product. Screenshots and live demo are not
              publicly available due to client confidentiality. The architecture and
              engineering decisions described here are based on real production work.
            </p>
          </motion.div>

          {/* ── More Projects ── */}
          {others.length > 0 && (
            <motion.div variants={up}>
              <h3 className="text-lg font-bold text-[hsl(var(--foreground))] mb-5">
                More Projects
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {others.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/projects/${other.slug}`}
                    className="group flex items-center justify-between p-4 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[hsl(var(--primary)/0.4)] transition-all"
                  >
                    <div>
                      <span
                        className="text-[10px] font-semibold uppercase tracking-wider"
                        style={{ color: other.accentColor }}
                      >
                        {other.subtitle}
                      </span>
                      <p className="text-sm font-bold text-[hsl(var(--foreground))] mt-0.5">
                        {other.title}
                      </p>
                    </div>
                    <TbArrowRight
                      size={18}
                      className="text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--foreground))] group-hover:translate-x-1 transition-all shrink-0"
                    />
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </main>
    </div>
  );
}
