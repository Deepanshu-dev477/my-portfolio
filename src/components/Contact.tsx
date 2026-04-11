"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "@/data/portfolio";
import { HiMail, HiPhone, HiLocationMarker, HiArrowRight, HiDownload } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";

const contactItems = [
  {
    icon: HiMail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "#7c3aed",
  },
  {
    icon: HiPhone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    color: "#0891b2",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    value: "frontenduiux-bydeepanshu",
    href: personalInfo.linkedin,
    color: "#0A66C2",
  },
  {
    icon: HiLocationMarker,
    label: "Location",
    value: personalInfo.location,
    href: "#",
    color: "#059669",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-28 px-6 bg-[hsl(var(--secondary)/0.3)]" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <span className="text-sm text-[hsl(var(--primary))] font-semibold tracking-widest uppercase">
            Hire Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Great</span>
          </h2>
        </motion.div>

        {/* Hiring intent */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-400/25 bg-emerald-400/5 text-emerald-400 text-sm font-medium mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {personalInfo.availability}
          </div>
          <p className="text-[hsl(var(--muted-foreground))] max-w-md mx-auto text-sm leading-relaxed">
            I&apos;m looking for a Senior Frontend / UX Engineering role where product thinking is valued as much as code quality. Remote-friendly or New Delhi.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 gap-3 mb-10">
          {contactItems.map(({ icon: Icon, label, value, href, color }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.2 + i * 0.08 }}
              whileHover={{ y: -3, scale: 1.015 }}
              className="group flex items-center gap-4 p-5 rounded-2xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] hover:border-transparent transition-all duration-300"
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = `0 12px 36px ${color}22, 0 0 0 1px ${color}30`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "";
              }}
            >
              <div
                className="p-3 rounded-xl shrink-0"
                style={{ background: `${color}15` }}
              >
                <Icon size={20} style={{ color }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] text-[hsl(var(--muted-foreground))] font-semibold uppercase tracking-wider mb-0.5">
                  {label}
                </p>
                <p className="text-sm font-semibold text-[hsl(var(--foreground))] truncate">
                  {value}
                </p>
              </div>
              <HiArrowRight
                size={15}
                className="text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--foreground))] group-hover:translate-x-1 transition-all shrink-0"
              />
            </motion.a>
          ))}
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <motion.a
            href={`mailto:${personalInfo.email}`}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-2xl bg-[hsl(var(--primary))] text-white font-semibold shadow-xl shadow-[hsl(var(--primary)/0.3)] hover:shadow-[hsl(var(--primary)/0.5)] transition-all"
          >
            <HiMail size={18} />
            Send Me an Email
            <HiArrowRight size={16} />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--secondary))] text-[hsl(var(--foreground))] font-semibold hover:border-[hsl(var(--primary)/0.4)] transition-all text-sm"
          >
            <HiDownload size={16} />
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
