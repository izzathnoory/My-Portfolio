"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

/**
 * Footer - Clean footer with copyright, back-to-top button, and credit.
 */

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <span>© {new Date().getFullYear()}</span>
            <span className="gradient-text font-medium">Izzath Noory</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Built with <Heart size={14} className="text-accent" /> &
              Next.js
            </span>
          </div>

          {/* Back to top */}
          <motion.button
            onClick={handleScrollTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-xl glass-light flex items-center justify-center text-text-muted hover:text-primary-light transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
