"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

/**
 * SectionWrapper - Reusable wrapper for each portfolio section.
 * Provides consistent spacing, layout, and scroll-triggered entrance animations.
 */

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  fullWidth = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative py-8 sm:py-12 ${className}`}
    >
      <div
        className={
          fullWidth
            ? "px-4 sm:px-6 lg:px-8"
            : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        }
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
