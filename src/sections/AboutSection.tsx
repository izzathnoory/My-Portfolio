"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { Code2, Layers, Lightbulb, Rocket } from "lucide-react";

/**
 * AboutSection - Professional developer summary highlighting
 * Full Stack capabilities, OOP/SOLID knowledge, and passion for technology.
 */

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Expertise",
    desc: "End-to-end development from responsive frontends to robust backends and database architectures.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    desc: "Deep understanding of OOP, SOLID principles, and design patterns for maintainable, scalable systems.",
  },
  {
    icon: Lightbulb,
    title: "Modern Technologies",
    desc: "Constantly exploring cutting-edge tools and frameworks to deliver innovative, efficient solutions.",
  },
  {
    icon: Rocket,
    title: "Problem Solver",
    desc: "Analytical thinker who thrives on transforming complex challenges into elegant, user-centric solutions.",
  },
];

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left - Text content */}
        <div>
          {/* Section label */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="text-primary-light font-mono text-sm mb-3 tracking-wider uppercase"
          >
            About Me
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold mb-6 section-heading"
          >
            Passionate Developer,{" "}
            <span className="gradient-text">Driven by Innovation</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4 text-text-muted leading-relaxed"
          >
            <p>
              I am{" "}
              <span className="text-foreground font-medium">
                Nazeer Mohammed Izzath Noory
              </span>
              , a passionate Full Stack Developer based in Sri Lanka. I
              specialize in building scalable, efficient, and user-friendly web
              applications that solve real-world problems and deliver
              exceptional user experiences.
            </p>
            <p>
              With a strong foundation in Object-Oriented Programming,
              SOLID principles, and modern software architecture, I bring
              both creativity and technical depth to every project. My
              expertise spans the full development lifecycle — from crafting
              pixel-perfect UI components to designing robust server-side
              architectures and managing complex database systems.
            </p>
            <p>
              I am driven by a genuine passion for technology and continuous
              growth. My goal is to contribute to innovative global projects,
              collaborating with teams that push the boundaries of what&apos;s
              possible in software development while continuously refining my
              technical expertise.
            </p>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-6 mt-8"
          >
            {[
              { label: "Technologies", value: "25+" },
              { label: "Projects Built", value: "5+" },
              { label: "Learning Hours", value: "500+" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center sm:text-left"
              >
                <p className="text-2xl font-bold gradient-text">
                  {stat.value}
                </p>
                <p className="text-sm text-text-muted">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right - Highlight cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card rounded-2xl p-5"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <item.icon size={20} className="text-primary-light" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
