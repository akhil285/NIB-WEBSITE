"use client";

import { useState } from "react";
import { motion } from "motion/react";

const CALENDLY = "https://calendly.com";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    challenge: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#F5F2E8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="text-[#8A6E4B] text-xs font-semibold uppercase tracking-widest block mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1F3D2B] leading-tight mb-5">
              Let us build your system.
            </h2>
            <p className="text-[#666666] text-lg leading-relaxed mb-8">
              Book a free 10-minute call and we will show you exactly how
              this works for your type of business.
            </p>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1F3D2B] hover:bg-[#2a5239] text-[#F5F2E8] font-semibold px-7 py-3.5 rounded-full transition-colors duration-200 text-sm mb-8"
            >
              See It Working
            </a>
            <div className="mt-2">
              <p className="text-[#666666] text-sm">hello@nibconsultinggroup.com</p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="bg-white rounded-2xl p-8 border border-[#1F3D2B]/8 shadow-sm"
          >
            {submitted ? (
              <div className="text-center py-10">
                <h3 className="text-[#1F3D2B] text-xl font-bold mb-2">
                  Message received.
                </h3>
                <p className="text-[#666666] text-sm">
                  We will be in touch within 24 hours. Or{" "}
                  <a
                    href={CALENDLY}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1F3D2B] underline underline-offset-2"
                  >
                    book directly on Calendly
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#666666] text-xs font-semibold mb-1.5 uppercase tracking-wide">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full bg-[#F5F2E8] border border-[#1F3D2B]/12 rounded-xl px-4 py-3 text-[#1A1A1A] placeholder-[#666666]/50 text-sm focus:outline-none focus:border-[#1F3D2B]/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[#666666] text-xs font-semibold mb-1.5 uppercase tracking-wide">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@business.com"
                      className="w-full bg-[#F5F2E8] border border-[#1F3D2B]/12 rounded-xl px-4 py-3 text-[#1A1A1A] placeholder-[#666666]/50 text-sm focus:outline-none focus:border-[#1F3D2B]/40 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[#666666] text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    Business Name
                  </label>
                  <input
                    type="text"
                    name="business"
                    value={form.business}
                    onChange={handleChange}
                    placeholder="Smith & Co."
                    className="w-full bg-[#F5F2E8] border border-[#1F3D2B]/12 rounded-xl px-4 py-3 text-[#1A1A1A] placeholder-[#666666]/50 text-sm focus:outline-none focus:border-[#1F3D2B]/40 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[#666666] text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    What is your biggest challenge right now?
                  </label>
                  <textarea
                    name="challenge"
                    rows={4}
                    value={form.challenge}
                    onChange={handleChange}
                    placeholder="Tell us about your current situation..."
                    className="w-full bg-[#F5F2E8] border border-[#1F3D2B]/12 rounded-xl px-4 py-3 text-[#1A1A1A] placeholder-[#666666]/50 text-sm focus:outline-none focus:border-[#1F3D2B]/40 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1F3D2B] hover:bg-[#2a5239] text-[#F5F2E8] font-semibold py-4 rounded-full transition-colors duration-200 text-sm"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
