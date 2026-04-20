"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";

/**
 * SkillsSection - Categorized skills display with icons and hover animations.
 * Each skill is shown as a glassmorphism card with a technology icon.
 */

interface Skill {
  name: string;
  icon: string; // Emoji or text-based icon for simplicity & reliability
}

interface SkillCategory {
  title: string;
  color: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    color: "#6366f1",
    skills: [
      { name: "C#", icon: "⚡" },
      { name: "Java", icon: "☕" },
      { name: "JavaScript", icon: "🟨" },
      { name: "TypeScript", icon: "🔷" },
      { name: "Python", icon: "🐍" },
      { name: "PHP", icon: "🐘" },
    ],
  },
  {
    title: "Web & Frameworks",
    color: "#06b6d4",
    skills: [
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "Bootstrap", icon: "🅱️" },
      { name: "TailwindCSS", icon: "💨" },
      { name: "React", icon: "⚛️" },
      { name: "React Native", icon: "📱" },
      { name: "Next.js", icon: "▲" },
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "🚀" },
      { name: ".NET", icon: "🔮" },
    ],
  },
  {
    title: "Databases & Cloud",
    color: "#10b981",
    skills: [
      { name: "MySQL", icon: "🐬" },
      { name: "MS SQL Server", icon: "🗄️" },
      { name: "Firebase", icon: "🔥" },
      { name: "Supabase", icon: "⚡" },
      { name: "Google Cloud", icon: "☁️" },
    ],
  },
  {
    title: "Tools & Platforms",
    color: "#f59e0b",
    skills: [
      { name: "Git", icon: "🔀" },
      { name: "GitHub", icon: "🐙" },
      { name: "GitHub Actions", icon: "⚙️" },
      { name: "NPM", icon: "📦" },
      { name: "Vite", icon: "⚡" },
      { name: "Apache", icon: "🪶" },
      { name: "Netlify", icon: "🌍" },
    ],
  },
  {
    title: "Libraries & Data Tools",
    color: "#8b5cf6",
    skills: [
      { name: "Pandas", icon: "🐼" },
      { name: "NumPy", icon: "🔢" },
      { name: "Three.js", icon: "🎲" },
    ],
  },
  {
    title: "Design Tools",
    color: "#ec4899",
    skills: [
      { name: "Figma", icon: "🎯" },
      { name: "Canva", icon: "🖼️" },
      { name: "Photoshop", icon: "📸" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills">
      {/* Section header */}
      <div className="text-center mb-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-primary-light font-mono text-sm mb-3 tracking-wider uppercase"
        >
          Tech Stack
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Skills & <span className="gradient-text">Technologies</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-muted mt-4 max-w-xl mx-auto"
        >
          A comprehensive toolkit built through continuous learning and
          hands-on project experience.
        </motion.p>
      </div>

      {/* Skill categories grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {skillCategories.map((category, catIdx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            className="glass-card rounded-2xl p-6"
          >
            {/* Category header with accent line */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-1 h-8 rounded-full"
                style={{ background: category.color }}
              />
              <h3 className="font-semibold text-foreground text-lg">
                {category.title}
              </h3>
            </div>

            {/* Skills grid */}
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{
                    duration: 0.3,
                    delay: catIdx * 0.1 + idx * 0.03,
                  }}
                  whileHover={{
                    scale: 1.08,
                    y: -3,
                  }}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium transition-all cursor-default"
                  style={{
                    background: `${category.color}10`,
                    border: `1px solid ${category.color}25`,
                    color: category.color,
                  }}
                >
                  <span className="text-base">{skill.icon}</span>
                  <span className="text-foreground/80">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
