"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";
import { scaleIn, fadeInUp } from "@/lib/animations";

const CALENDLY = "https://calendly.com/akhil-nib-consulting/30min";

export default function FinalCTA() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="bg-gold py-28 px-4">
      <motion.div
        ref={ref}
        className="max-w-4xl mx-auto text-center"
        variants={scaleIn}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-4xl sm:text-5xl lg:text-6xl text-cream leading-tight mb-6"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Ready to stop losing revenue to unanswered enquiries and missed follow-ups?
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-cream/80 text-lg leading-relaxed max-w-2xl mx-auto mb-10 font-sans"
        >
          Book a free 20-minute discovery call. We&apos;ll show you exactly how NIB
          works for your business. No pressure, no jargon.
        </motion.p>

        <motion.div variants={fadeInUp}>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cream hover:bg-cream-dark text-forest-dark font-semibold px-10 py-5 rounded-full transition-all duration-200 hover:scale-[1.03] text-base font-sans shadow-lg"
          >
            Book Your Free Call
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
