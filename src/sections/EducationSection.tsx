"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

/**
 * EducationSection - Timeline UI showing educational background
 * with HND in Computing and placeholders for future entries.
 */

interface Education {
  degree: string;
  institution: string;
  period: string;
  status: "completed" | "in-progress" | "upcoming";
  description?: string;
  location?: string;
}

const educationData: Education[] = [
  {
    degree: "Diploma in Information Technology",
    institution: "ESOFT Metro Campus",
    period: "Completed",
    status: "completed",
    description:
      "Comprehensive diploma program covering fundamental IT concepts, programming basics, and system administration.",
    location: "Sri Lanka",
  },
  {
    degree: "Diploma in English",
    institution: "ESOFT Metro Campus",
    period: "Completed",
    status: "completed",
    description:
      "Developed strong professional communication, writing, and presentation skills essential for the global tech industry.",
    location: "Sri Lanka",
  },
  {
    degree: "HND in Computing Software Engineering",
    institution: "ESOFT Metro Campus",
    period: "Completed",
    status: "completed",
    description:
      "Higher National Diploma in Computing covering software engineering, database management, web development, and IT project management. Built a strong foundation in programming paradigms and modern development practices.",
    location: "Sri Lanka",
  },
];

const statusColors = {
  completed: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    text: "text-emerald-400",
    dot: "bg-emerald-400",
  },
  "in-progress": {
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    text: "text-amber-400",
    dot: "bg-amber-400",
  },
  upcoming: {
    bg: "bg-primary/10",
    border: "border-primary/20",
    text: "text-primary-light",
    dot: "bg-primary-light",
  },
};

export default function EducationSection() {
  return (
    <SectionWrapper id="education">
      {/* Section header */}
      <div className="text-center mb-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-primary-light font-mono text-sm mb-3 tracking-wider uppercase"
        >
          Education
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Academic <span className="gradient-text">Journey</span>
        </motion.h2>
      </div>

      {/* Timeline */}
      <div className="max-w-3xl mx-auto relative">
        {/* Vertical line */}
        <div className="timeline-line" />

        {educationData.map((edu, idx) => {
          const colors = statusColors[edu.status];
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative pl-14 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="timeline-dot" />

              {/* Content card */}
              <div className="glass-card rounded-2xl p-6">
                {/* Status badge */}
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium ${colors.bg} ${colors.border} border ${colors.text}`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${colors.dot}`}
                    />
                    {edu.status === "completed"
                      ? "Completed"
                      : edu.status === "in-progress"
                      ? "In Progress"
                      : "To Be Updated"}
                  </span>

                  <span className="flex items-center gap-1.5 text-xs text-text-muted">
                    <Calendar size={12} />
                    {edu.period}
                  </span>
                </div>

                {/* Degree & Institution */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <GraduationCap
                      size={20}
                      className="text-primary-light"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-text-muted">{edu.institution}</p>
                  </div>
                </div>

                {/* Description */}
                {edu.description && (
                  <p className="text-sm text-text-muted leading-relaxed ml-13">
                    {edu.description}
                  </p>
                )}

                {/* Location */}
                {edu.location && (
                  <div className="flex items-center gap-1.5 mt-3 ml-13 text-xs text-text-muted">
                    <MapPin size={12} className="text-primary-light" />
                    {edu.location}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
