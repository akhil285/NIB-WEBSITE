"use client";

import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import Script from "next/script";
import { Check, Mail, Calendar, Clock } from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";

const CALENDLY = "https://calendly.com/akhil-nib-consulting/30min";

const callPoints = [
  "We learn about your business: size, booking flow, and current challenges",
  "We walk you through the NIB system and which agents fit your needs",
  "We give you a clear recommendation and pricing for your setup",
];

function ContactHero() {
  return (
    <section className="pt-40 pb-24 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" transition={{ delayChildren: 0.2 }}>
          <motion.div variants={fadeInUp}><SectionLabel>Let&apos;s Talk</SectionLabel></motion.div>
          <motion.div variants={fadeInUp}>
            <AnimatedHeading as="h1" className="text-4xl sm:text-5xl lg:text-6xl text-[#1a1a1a] mt-2 mb-6">
              Book your free discovery call.
            </AnimatedHeading>
          </motion.div>
          <motion.p variants={fadeInUp} className="text-[#4a4a4a] text-lg font-sans">
            20 minutes. No pressure. We&apos;ll walk you through exactly how NIB works for
            your business and answer every question you have.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-28 bg-cream-dark">
      {/* Calendly CSS */}
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — info */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h2
              className="text-[#1a1a1a] text-3xl mb-8 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              What happens on the call?
            </h2>

            <ul className="space-y-4 mb-10">
              {callPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[#4a4a4a] text-sm font-sans leading-relaxed">
                  <Check size={15} className="text-gold mt-0.5 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="space-y-4">
              <a
                href="mailto:akhil@nib-consulting.com"
                className="flex items-center gap-3 text-gold hover:text-gold-light transition-colors duration-200 font-sans text-sm"
              >
                <Mail size={16} />
                akhil@nib-consulting.com
              </a>
              <div className="flex items-center gap-3 text-[#4a4a4a]/70 font-sans text-sm">
                <Calendar size={16} className="text-gold/60" />
                30-minute video or phone call
              </div>
              <div className="flex items-center gap-3 text-[#4a4a4a]/70 font-sans text-sm">
                <Clock size={16} className="text-gold/60" />
                Responses within 24 hours
              </div>
            </div>
          </motion.div>

          {/* Right — Calendly embed */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="rounded-xl overflow-hidden border border-black/8"
            style={{ background: "#ffffff", minHeight: 650 }}
          >
            <div
              className="calendly-inline-widget w-full"
              data-url={`${CALENDLY}?background_color=ffffff&text_color=1a1a1a&primary_color=966c36`}
              style={{ minWidth: 320, height: 680 }}
            />
          </motion.div>
        </div>
      </div>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </section>
  );
}

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactSection />
    </main>
  );
}
