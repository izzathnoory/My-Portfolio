"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { 
  FaJava, FaJs, FaPython, FaPhp, FaHtml5, FaCss3Alt, FaBootstrap, 
  FaReact, FaNodeJs, FaGitAlt, FaGithub, FaNpm, FaFigma 
} from "react-icons/fa";
import { 
  SiTypescript, SiTailwindcss, SiNextdotjs, SiExpress, SiDotnet, 
  SiMysql, SiFirebase, SiSupabase, SiGooglecloud, SiGithubactions, 
  SiVite, SiApache, SiNetlify, SiPandas, SiNumpy, SiThreedotjs, 
  SiCanva 
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { DiMsqlServer, DiPhotoshop } from "react-icons/di";

/**
 * SkillsSection - Categorized skills display with icons and hover animations.
 * Each skill is shown as a glassmorphism card with a technology icon.
 */

interface Skill {
  name: string;
  icon: ReactNode;
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
      { name: "C#", icon: <TbBrandCSharp /> },
      { name: "Java", icon: <FaJava /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Python", icon: <FaPython /> },
      { name: "PHP", icon: <FaPhp /> },
    ],
  },
  {
    title: "Web & Frameworks",
    color: "#06b6d4",
    skills: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "TailwindCSS", icon: <SiTailwindcss /> },
      { name: "React", icon: <FaReact /> },
      { name: "React Native", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: ".NET", icon: <SiDotnet /> },
    ],
  },
  {
    title: "Databases & Cloud",
    color: "#10b981",
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MS SQL Server", icon: <DiMsqlServer /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Supabase", icon: <SiSupabase /> },
      { name: "Google Cloud", icon: <SiGooglecloud /> },
    ],
  },
  {
    title: "Tools & Platforms",
    color: "#f59e0b",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "GitHub Actions", icon: <SiGithubactions /> },
      { name: "NPM", icon: <FaNpm /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "Apache", icon: <SiApache /> },
      { name: "Netlify", icon: <SiNetlify /> },
    ],
  },
  {
    title: "Libraries & Data Tools",
    color: "#8b5cf6",
    skills: [
      { name: "Pandas", icon: <SiPandas /> },
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "Three.js", icon: <SiThreedotjs /> },
    ],
  },
  {
    title: "Design Tools",
    color: "#ec4899",
    skills: [
      { name: "Figma", icon: <FaFigma /> },
      { name: "Canva", icon: <SiCanva /> },
      { name: "Photoshop", icon: <DiPhotoshop /> },
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
