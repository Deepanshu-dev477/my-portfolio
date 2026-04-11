"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo, education } from "@/data/portfolio";
import { HiAcademicCap, HiLocationMarker, HiMail, HiPhone, HiLightningBolt } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-[hsl(var(--primary))] font-semibold tracking-widest uppercase">
            About Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2">
            Engineer who thinks like a{" "}
            <span className="gradient-text">Product Manager</span>
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] mt-4 max-w-2xl mx-auto leading-relaxed">
            I don&apos;t just build what&apos;s in the ticket — I question whether it&apos;s the right thing to build, then ship it faster than expected.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left: Bio + Contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3 space-y-6"
          >
            {/* Profile paragraphs */}
            <div className="space-y-4">
              {personalInfo.profile.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
                  className="text-[hsl(var(--muted-foreground))] leading-[1.8] text-[15px]"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* What I bring */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="space-y-3 pt-2"
            >
              <h3 className="text-sm font-semibold text-[hsl(var(--foreground))] uppercase tracking-wider flex items-center gap-2">
                <HiLightningBolt className="text-[hsl(var(--primary))]" size={14} />
                What I bring to your team
              </h3>
              {personalInfo.whatIBring.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-[hsl(var(--secondary))] border border-[hsl(var(--border))]"
                >
                  <div className="mt-0.5 w-2 h-2 rounded-full bg-[hsl(var(--primary))] shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[hsl(var(--foreground))]">
                      {item.title}
                    </p>
                    <p className="text-xs text-[hsl(var(--muted-foreground))] mt-0.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Contact chips */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap gap-2 pt-1"
            >
              {[
                { icon: HiMail, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: HiPhone, label: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                { icon: HiLocationMarker, label: personalInfo.location, href: "#" },
                { icon: FaLinkedinIn, label: "LinkedIn", href: personalInfo.linkedin },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs bg-[hsl(var(--secondary))] border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:border-[hsl(var(--primary)/0.3)] transition-all group"
                >
                  <Icon size={13} className="text-[hsl(var(--primary))] shrink-0" />
                  <span className="truncate max-w-[160px]">{label}</span>
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Stats + Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "5.6+", label: "Years Experience", sub: "Same company, deep ownership" },
                { value: "5", label: "Products Shipped", sub: "End-to-end, 0 to production" },
                { value: "10K+", label: "Users Impacted", sub: "Across live SaaS platforms" },
                { value: "25%", label: "Dev Time Saved", sub: "Via shared component systems" },
              ].map(({ value, label, sub }) => (
                <div
                  key={label}
                  className="p-4 rounded-2xl bg-[hsl(var(--secondary))] border border-[hsl(var(--border))] text-center"
                >
                  <div className="text-2xl font-bold gradient-text leading-none">{value}</div>
                  <div className="text-xs font-semibold text-[hsl(var(--foreground))] mt-1.5">{label}</div>
                  <div className="text-[10px] text-[hsl(var(--muted-foreground))] mt-0.5 leading-tight">{sub}</div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="p-5 rounded-2xl bg-[hsl(var(--secondary))] border border-[hsl(var(--border))]">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 rounded-lg bg-[hsl(var(--primary)/0.15)]">
                  <HiAcademicCap size={16} className="text-[hsl(var(--primary))]" />
                </div>
                <h3 className="text-sm font-semibold text-[hsl(var(--foreground))]">Education</h3>
              </div>
              <div className="space-y-3">
                {education.map((edu, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 pb-3 last:pb-0 border-b border-[hsl(var(--border))] last:border-0"
                  >
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))] shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-[hsl(var(--foreground))] leading-snug">
                        {edu.degree}
                      </p>
                      <p className="text-[11px] text-[hsl(var(--muted-foreground))] mt-0.5">
                        {edu.university}
                      </p>
                      <span
                        className={`inline-block mt-1 text-[10px] px-2 py-0.5 rounded-full font-medium ${
                          edu.status === "Pursuing"
                            ? "bg-amber-400/10 text-amber-400"
                            : "bg-emerald-400/10 text-emerald-400"
                        }`}
                      >
                        {edu.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Currently at */}
            <div className="p-4 rounded-2xl border border-[hsl(var(--primary)/0.25)] bg-[hsl(var(--primary)/0.05)]">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-[hsl(var(--foreground))]">Currently at</span>
              </div>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">
                Yoctel Solutions Pvt. Ltd.{" "}
                <span className="text-[hsl(var(--primary))] font-medium">Frontend Engineer / UX Engineer</span>
              </p>
              <p className="text-[11px] text-[hsl(var(--muted-foreground))] mt-1">Jul 2024 – Present · New Delhi</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
