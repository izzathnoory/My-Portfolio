"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { ExternalLink, Layers } from "lucide-react";
import { FaGithub } from "react-icons/fa";

/**
 * ProjectsSection - Showcases projects in modern responsive cards
 * with hover effects, technology tags, and action buttons.
 */

interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  github: string;
  live?: string;
  gradient: string;
  icon: string;
  image?: string;
  isPlaceholder?: boolean;
}

const projects: Project[] = [
  {
    title: "Grifindo Leave Management System",
    description:
      "A comprehensive system developed to manage employee leave processes within a toy company, enabling efficient leave tracking and streamlined administrative control across the organization.",
    technologies: ["C#", ".NET Framework"],
    features: [
      "Admin can apply leave on behalf of employees in special cases",
      "Leave requests require 7-day prior notice validation",
      "Multiple leave types with conditional logic",
      "Organized multi-level approval workflow",
    ],
    github: "https://github.com/izzathnoory/GrifindoToyLeaveApp.git",
    gradient: "from-indigo-500/20 to-cyan-500/20",
    icon: "📋",
    image: "/grifindo.png",
  },
  {
    title: "Velvet Vogue Clothing Store",
    description:
      "A modern e-commerce web application for managing an online clothing store, offering seamless shopping for users and efficient admin tools for products, orders, and management.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    features: [
      "Complete e-commerce system with product browsing, search, and filtering",
      "User authentication with cart, wishlist, and secure checkout",
      "Admin dashboard for managing products, orders, and customers",
      "Responsive and modern UI with dynamic interactions",
    ],
    github: "https://github.com/izzathnoory/VelvetVoge.git",
    live: "https://velvetvoge.ct.ws/LandingPage.php",
    gradient: "from-purple-500/20 to-pink-500/20",
    icon: "🚀",
    image: "/velvetvogue.png",
  },
  {
    title: "Brothers Hotel Restaurant Website",
    description:
      "A modern responsive website for a hotel restaurant, showcasing menus, services, and enabling easy customer interaction and inquiries.",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "Supabase"],
    features: [
      "Interactive menu display with categorized food items",
      "Admin panel to manage menu items and update content easily",
      "One-click option to add and highlight “Today’s Special” dishes",
      "Responsive design with modern UI and smooth navigation",
    ],
    github: "https://github.com/izzathnoory/brothers-hotel-react.git",
    live: "https://brothers-hotel-react.vercel.app/",
    gradient: "from-emerald-500/20 to-teal-500/20",
    icon: "💡",
    image: "/brothers.png",
  },
];

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      {/* Section header */}
      <div className="text-center mb-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-primary-light font-mono text-sm mb-3 tracking-wider uppercase"
        >
          My Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-muted mt-4 max-w-xl mx-auto"
        >
          A selection of projects that showcase my skills and passion for
          building impactful software solutions.
        </motion.p>
      </div>

      {/* Projects grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="glass-card rounded-2xl overflow-hidden group"
          >
            {/* Card header with gradient */}
            <div
              className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
            >
              {/* Check for image or show gradient */}
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <>
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
                        backgroundSize: "24px 24px",
                      }}
                    />
                  </div>

                  {/* Project icon */}
                  <motion.div
                    className="text-6xl z-10"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {project.icon}
                  </motion.div>
                </>
              )}

              {/* Placeholder badge */}
              {project.isPlaceholder && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium glass-light text-text-muted">
                  Coming Soon
                </div>
              )}

              {/* Hover overlay with action buttons */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <FaGithub size={18} />
                </motion.a>
                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    aria-label={`View ${project.title} live`}
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                )}
              </div>
            </div>

            {/* Card content */}
            <div className="p-6">
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary-light transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-text-muted leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-5">
                {project.features.map((feature, fIdx) => (
                  <div
                    key={fIdx}
                    className="flex items-start gap-2 text-sm text-text-muted"
                  >
                    <Layers
                      size={14}
                      className="text-primary-light mt-0.5 shrink-0"
                    />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-primary/8 border border-primary/15 text-primary-light"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
