"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { Briefcase, Target, ArrowUpRight } from "lucide-react";

/**
 * ExperienceSection - Displays current experience status
 * with a professional "seeking opportunities" message.
 */

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience">
      {/* Section header */}
      <div className="text-center mb-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-primary-light font-mono text-sm mb-3 tracking-wider uppercase"
        >
          Career
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Professional <span className="gradient-text">Experience</span>
        </motion.h2>
      </div>

      {/* Experience card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-3xl mx-auto"
      >
        <div className="glass-card rounded-2xl p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20 flex items-center justify-center shrink-0">
              <Briefcase size={26} className="text-primary-light" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Ready to Make an Impact
              </h3>
              <p className="text-text-muted leading-relaxed mb-6">
                Currently seeking opportunities to gain industry experience and
                contribute to real-world projects. Eager to bring my strong
                technical foundation, problem-solving abilities, and passion for
                modern development practices to a dynamic team environment.
              </p>

              {/* What I bring */}
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Full Stack Development",
                  "Clean Code & Best Practices",
                  "Agile Methodology Ready",
                  "Fast Learner & Adaptable",
                  "Team Collaboration",
                  "Strong Communication",
                ].map((item, idx) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.3, delay: 0.3 + idx * 0.05 }}
                    className="flex items-center gap-2 text-sm text-text-muted"
                  >
                    <Target size={14} className="text-primary-light shrink-0" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-xl btn-primary text-sm relative z-10"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get In Touch
                  <ArrowUpRight size={16} />
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
