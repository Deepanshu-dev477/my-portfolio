"use client";

import { motion } from "framer-motion";
import { HiArrowDown, HiMail, HiDownload } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import { personalInfo } from "@/data/portfolio";

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};
const up = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-pattern pt-20 sm:pt-0"
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/5 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(262 83% 58% / 0.16) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
        />
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, 35, 0] }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/3 right-1/5 w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(186 100% 42% / 0.12) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 max-w-8xl mx-auto w-full"
      >
        {/* Status badge */}
        <motion.div variants={up} className="mb-8">
          <span className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium border border-[hsl(var(--primary)/0.35)] bg-[hsl(var(--primary)/0.07)] text-[hsl(var(--primary))] max-w-full">
            <span className="w-2 h-2 shrink-0 rounded-full bg-emerald-400 animate-pulse" />
            {personalInfo.availability}
          </span>
        </motion.div>

        {/* Primary headline */}
        <motion.h1
          variants={up}
          className="font-bold tracking-tight mb-6"
          style={{ fontSize: "clamp(1.75rem, 7vw, 4rem)", lineHeight: 1.18 }}
        >
          <span className="block">
            I build <span className="gradient-text">design systems</span>
          </span>
          <span className="block">
            and AI-ready{" "}
            <span className="relative inline-block">
              frontend products
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-linear-to-r from-violet-500 to-cyan-400 origin-left"
              />
            </span>{" "}
            that scale
          </span>
        </motion.h1>

        {/* Value prop */}
        <motion.p
          variants={up}
          className="text-base sm:text-lg text-[hsl(var(--muted-foreground))] max-w-xl mx-auto mb-5 leading-relaxed"
        >
          {personalInfo.valueProp}
        </motion.p>

        {/* Role + location */}
        <motion.p
          variants={up}
          className="text-xs text-[hsl(var(--muted-foreground))] mb-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-1"
        >
          <span className="text-[hsl(var(--foreground))] font-semibold">
            {personalInfo.role}
          </span>
          <span className="opacity-40">·</span>
          <span>{personalInfo.location}</span>
          <span className="opacity-40">·</span>
          <span>5.6 Years Experience</span>
        </motion.p>

        {/* Tech badges */}
        <motion.div
          variants={up}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {personalInfo.techBadges.map((badge) => (
            <span
              key={badge}
              className="px-3 py-1 rounded-full text-xs font-medium bg-[hsl(var(--secondary))] border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))]"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          variants={up}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 rounded-xl bg-[hsl(var(--primary))] text-white font-semibold shadow-lg shadow-[hsl(var(--primary)/0.3)] hover:shadow-[hsl(var(--primary)/0.5)] hover:shadow-xl transition-all"
          >
            See My Work
          </motion.a>
          <motion.a
            href={`mailto:${personalInfo.email}`}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--secondary))] text-[hsl(var(--foreground))] font-semibold flex items-center gap-2 hover:border-[hsl(var(--primary)/0.5)] transition-all"
          >
            <HiMail size={18} />
            Hire Me
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="px-5 py-3 rounded-xl border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] font-medium flex items-center gap-2 hover:text-[hsl(var(--foreground))] hover:border-[hsl(var(--primary)/0.4)] transition-all text-sm"
          >
            <HiDownload size={16} />
            Resume
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={up}
          className="flex items-center justify-center gap-3"
        >
          <motion.a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.15, y: -3 }}
            className="p-3 rounded-xl bg-[hsl(var(--secondary))] border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] hover:text-[#0A66C2] hover:border-[#0A66C2]/40 transition-all"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={18} />
          </motion.a>
          <motion.a
            href={`mailto:${personalInfo.email}`}
            whileHover={{ scale: 1.15, y: -3 }}
            className="p-3 rounded-xl bg-[hsl(var(--secondary))] border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] hover:border-[hsl(var(--primary)/0.4)] transition-all"
            aria-label="Email"
          >
            <HiMail size={18} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[hsl(var(--muted-foreground)/0.5)]"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <HiArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
