"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { Award, Star } from "lucide-react";

/**
 * AchievementsSection - Placeholder section for future achievements
 * and certifications display.
 */

export default function AchievementsSection() {
  return (
    <SectionWrapper id="achievements">
      {/* Section header */}
      <div className="text-center mb-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-primary-light font-mono text-sm mb-3 tracking-wider uppercase"
        >
          Recognition
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Achievements & <span className="gradient-text">Certifications</span>
        </motion.h2>
      </div>

      {/* Placeholder card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl mx-auto"
      >
        <div className="glass-card rounded-2xl p-10 text-center">
          {/* Decorative icons */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Award size={32} className="text-primary-light" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Star size={24} className="text-amber-400" />
            </motion.div>
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <Award size={32} className="text-secondary" />
            </motion.div>
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-3">
            Coming Soon
          </h3>
          <p className="text-text-muted leading-relaxed max-w-md mx-auto">
            Achievements and certifications will be updated soon. Currently
            pursuing relevant industry certifications and working on projects
            that demonstrate technical excellence.
          </p>

          {/* Decorative bottom gradient */}
          <div className="mt-6 flex justify-center gap-2">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                className="w-2 h-2 rounded-full bg-primary-light"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
