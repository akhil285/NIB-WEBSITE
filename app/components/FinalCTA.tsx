"use client";

import { motion } from "motion/react";

const CALENDLY = "https://calendly.com";

export default function FinalCTA() {
  return (
    <section className="bg-[#1F3D2B] py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-bold text-[#F5F2E8] leading-tight mb-6"
        >
          See how this works on your business in 10 minutes.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-[#F5F2E8]/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto"
        >
          Book a free strategy call. We will walk you through exactly what
          the system would look like for your business, no jargon, no
          pressure, just clarity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center gap-4"
        >
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F5F2E8] hover:bg-white text-[#1F3D2B] font-semibold px-9 py-4 rounded-full transition-colors duration-200 text-sm"
          >
            See It Working
          </a>
          <p className="text-[#F5F2E8]/40 text-sm">
            Free call. No obligation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
