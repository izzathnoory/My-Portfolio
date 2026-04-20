"use client";

import { motion, AnimatePresence } from "framer-motion";

/**
 * LoadingScreen - Animated loading overlay shown while the page initializes.
 * Features a spinning loader, gradient name reveal, and smooth exit animation.
 */
interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader-container"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Subtle background gradient pulse */}
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(99,102,241,0.15) 0%, transparent 60%)",
            }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Spinner */}
          <motion.div
            className="loader-spinner"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          />

          {/* Name reveal */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center"
          >
            <p className="text-lg font-medium gradient-text tracking-wider">
              Izzath Noory
            </p>
            <p className="text-sm text-text-muted mt-1 font-mono">
              Loading Portfolio...
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
