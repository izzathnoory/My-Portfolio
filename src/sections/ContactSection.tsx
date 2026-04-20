"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import {
  Send,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

/**
 * ContactSection - Functional contact form with styled modern UI,
 * social links, and email button.
 */

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "57f91905-6cdb-488e-b2ec-1035987fa968",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact">
      {/* Section header */}
      <div className="text-center mb-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-primary-light font-mono text-sm mb-3 tracking-wider uppercase"
        >
          Get In Touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Let&apos;s Work <span className="gradient-text">Together</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-muted mt-4 max-w-xl mx-auto"
        >
          Have a project in mind or want to discuss opportunities? I&apos;d love
          to hear from you. Drop me a message and I&apos;ll get back to you
          as soon as possible.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
        {/* Left - Contact info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2 space-y-6"
        >
          <div className="glass-card rounded-2xl p-6">
            <h3 className="font-semibold text-foreground mb-4">
              Contact Information
            </h3>

            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:izzathnoory11@gmail.com"
                className="flex items-center gap-3 text-text-muted hover:text-primary-light transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <Mail size={18} className="text-primary-light" />
                </div>
                <div>
                  <p className="text-xs text-text-muted">Email</p>
                  <p className="text-sm text-foreground">
                    izzathnoory11@gmail.com
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 text-text-muted">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <MapPin size={18} className="text-primary-light" />
                </div>
                <div>
                  <p className="text-xs text-text-muted">Location</p>
                  <p className="text-sm text-foreground">Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="font-semibold text-foreground mb-4">
              Connect With Me
            </h3>
            <div className="space-y-3">
              {[
                {
                  icon: FaGithub,
                  label: "GitHub",
                  href: "https://github.com",
                  username: "@izzathnoory",
                },
                {
                  icon: FaLinkedinIn,
                  label: "LinkedIn",
                  href: "https://linkedin.com",
                  username: "Izzath Noory",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-surface-light transition-colors group"
                >
                  <social.icon
                    size={18}
                    className="text-text-muted group-hover:text-primary-light transition-colors"
                  />
                  <div className="flex-1">
                    <p className="text-sm text-foreground">{social.label}</p>
                    <p className="text-xs text-text-muted">
                      {social.username}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-text-muted group-hover:text-primary-light transition-colors"
                  />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right - Contact form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:col-span-3"
        >
          <div className="glass-card rounded-2xl p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Full Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="form-input"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="form-input"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="form-input resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full btn-primary flex items-center justify-center gap-2 relative z-10 cursor-pointer ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </span>
              </motion.button>

              {/* Success message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-emerald-400 text-sm py-3 px-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20"
                >
                  ✓ Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
