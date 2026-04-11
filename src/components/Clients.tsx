"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { clients, trustStats } from "@/data/portfolio";
import { HiShieldCheck } from "react-icons/hi";

const categoryColors: Record<string, { bg: string; text: string }> = {
  "EdTech": { bg: "bg-violet-400/10", text: "text-violet-400" },
  "Banking Exam Prep": { bg: "bg-cyan-400/10", text: "text-cyan-400" },
  "Ed Tool": { bg: "bg-emerald-400/10", text: "text-emerald-400" },
  "Academic": { bg: "bg-orange-400/10", text: "text-orange-400" },
};

export default function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="clients" className="py-28 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-[hsl(var(--primary))] font-semibold tracking-widest uppercase">
            Social Proof
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2">
            Products &{" "}
            <span className="gradient-text">Clients</span>
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Real products, shipped to real users. I&apos;ve owned the frontend for these platforms across India&apos;s EdTech ecosystem.
          </p>
        </motion.div>

        {/* Trust stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
        >
          {trustStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className="p-5 rounded-2xl bg-[hsl(var(--secondary))] border border-[hsl(var(--border))] text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold gradient-text leading-none">
                {stat.value}
              </div>
              <div className="text-xs text-[hsl(var(--muted-foreground))] mt-2 leading-snug">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14"
        >
          {clients.map((client, i) => {
            const colors = categoryColors[client.category] ?? {
              bg: "bg-[hsl(var(--primary)/0.1)]",
              text: "text-[hsl(var(--primary))]",
            };
            return (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.3 + i * 0.07 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[hsl(var(--secondary))] border border-[hsl(var(--border))] hover:border-[hsl(var(--primary)/0.3)] transition-all group"
              >
                {/* Logo placeholder */}
                <div className="w-12 h-12 rounded-xl bg-[hsl(var(--background))] border border-[hsl(var(--border))] flex items-center justify-center shrink-0 text-base font-bold text-[hsl(var(--foreground))] group-hover:border-[hsl(var(--primary)/0.3)] transition-colors">
                  {client.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[hsl(var(--foreground))] truncate">
                    {client.name}
                  </p>
                  <span
                    className={`inline-block text-[10px] font-medium px-2 py-0.5 rounded-full mt-1 ${colors.bg} ${colors.text}`}
                  >
                    {client.category}
                  </span>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-[10px] text-[hsl(var(--muted-foreground))] leading-snug">
                    {client.users}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust statement */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-start gap-4 p-6 rounded-2xl border border-[hsl(var(--primary)/0.25)] bg-[hsl(var(--primary)/0.04)]"
        >
          <div className="p-2.5 rounded-xl bg-[hsl(var(--primary)/0.12)] shrink-0">
            <HiShieldCheck size={22} className="text-[hsl(var(--primary))]" />
          </div>
          <div>
            <p className="text-sm font-semibold text-[hsl(var(--foreground))] mb-1">
              Why 5.6 years at one company is a feature, not a bug
            </p>
            <p className="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed">
              I&apos;ve watched every product I built grow from v0 to thousands of daily users.
              That depth of ownership — seeing how your architecture decisions age, how users
              actually behave, how design debt compounds — is something job-hoppers never get.
              It made me a better engineer and a better product thinker.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
