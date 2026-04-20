"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Download,
  ChevronDown,
  MapPin,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

/**
 * HeroSection - The main landing section of the portfolio.
 * Displays name, title, tagline with animated entrance, social links,
 * and a download CV button. Features staggered fade + slide animations.
 */

export default function HeroSection() {
  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Radial gradient overlays for depth */}
      <div className="absolute inset-0 z-[1]">
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">


        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-4"
        >
          <span className="text-foreground">Hi, I&apos;m </span>
          <span className="gradient-text">Izzath Noory</span>
        </motion.h1>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-6"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground/90">
            Full Stack Developer
          </h2>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          Crafting scalable & elegant digital experiences through clean code,
          modern architectures, and a passion for innovation.
        </motion.p>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center justify-center gap-2 text-text-muted mb-10"
        >
          <MapPin size={16} className="text-primary-light" />
          <span className="text-sm">Sri Lanka</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="/cv.pdf"
            download
            className="btn-primary flex items-center gap-2 relative z-10"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Download size={18} />
              Download CV
            </span>
          </a>
          <button
            onClick={handleScrollDown}
            className="btn-outline flex items-center gap-2 cursor-pointer"
          >
            Explore My Work
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            {
              icon: <FaGithub size={20} />,
              href: "https://github.com",
              label: "GitHub",
            },
            {
              icon: <FaLinkedinIn size={20} />,
              href: "https://linkedin.com",
              label: "LinkedIn",
            },
            {
              icon: <Mail size={20} />,
              href: "mailto:izzathnoory11@gmail.com",
              label: "Email",
            },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 flex items-center justify-center rounded-xl glass-light text-text-muted hover:text-primary-light transition-colors"
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.button
          onClick={handleScrollDown}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="text-text-muted hover:text-primary-light transition-colors cursor-pointer"
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </motion.button>
      </motion.div>
    </section>
  );
}
