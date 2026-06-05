"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useInView } from "react-intersection-observer";
import { ChevronDown } from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import IndustriesTicker from "@/components/ui/IndustriesTicker";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const CALENDLY = "https://calendly.com/akhil-nib-consulting/30min";

/* ─── HERO ───────────────────────────────────────────────────── */
function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-cream"
    >
      {/* Parallax bg layer */}
      <motion.div className="absolute inset-0" style={{ y: bgY, zIndex: 0 }} />

      {/* Content grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">

          {/* Left — copy */}
          <div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              transition={{ delayChildren: 0.2 }}
            >
              <motion.div variants={fadeInUp}>
                <SectionLabel className="text-gold">AI Client Management for Businesses</SectionLabel>
              </motion.div>

              <div className="mb-8">
                <AnimatedHeading
                  as="h1"
                  className="text-5xl sm:text-6xl lg:text-7xl text-[#1a1a1a] leading-tight"
                  delay={0.3}
                  staggerDelay={0.08}
                >
                  Your business deserves to run at full capacity.
                </AnimatedHeading>
              </div>

              <motion.p
                variants={fadeInUp}
                className="text-[#4a4a4a] text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10 font-sans"
              >
                NIB builds and manages a done-for-you AI system that captures enquiries,
                follows up automatically, reduces no-shows, and fills your calendar.
                No extra work on your end.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-8"
              >
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gold hover:bg-gold-light text-forest-dark font-medium px-8 py-4 rounded-full transition-all duration-200 hover:scale-[1.03] shadow-lg font-sans text-base"
                >
                  Book a Free Discovery Call
                </a>
                <a
                  href="/services"
                  className="inline-block border border-gold/40 hover:border-gold text-gold hover:bg-gold/5 px-8 py-4 rounded-full transition-all duration-200 font-sans text-base"
                >
                  See How It Works
                </a>
              </motion.div>

              <motion.p variants={fadeInUp} className="text-[#1a1a1a]/40 text-sm font-sans text-center lg:text-left">
                Currently onboarding founding salons. Limited spots available.
              </motion.p>
            </motion.div>
          </div>

          {/* Right — hero video (desktop only) */}
          {/* Add hero-video.mp4 to /public/videos/ folder */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative" style={{ filter: "drop-shadow(0 0 48px rgba(150,108,54,0.22))" }}>
              <div
                className="relative bg-forest-dark overflow-hidden"
                style={{
                  aspectRatio: "16/9",
                  clipPath: "polygon(8% 0%, 100% 0%, 100% 88%, 92% 100%, 0% 100%, 0% 12%)",
                }}
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  src="/videos/hero-video.mp4"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={24} className="text-[#1a1a1a]/30" />
      </motion.div>
    </section>
  );
}

/* ─── BOLD STATEMENT ─────────────────────────────────────────── */
function BoldStatement() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="statement" className="py-28 bg-forest-dark relative overflow-hidden">
      {/* Dot texture overlay — fades toward bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1.5' fill='%23c9a97a'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "24px 24px",
          opacity: 0.09,
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp}>
            <span
              className="text-gold block mb-6 leading-tight select-none text-3xl sm:text-5xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Your next booking is already in your database.
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-cream text-xl sm:text-3xl leading-tight mb-10"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            It&apos;s a past client who hasn&apos;t heard from you since their last appointment.
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-sans"
          >
            <a
              href="/services"
              className="text-gold hover:text-gold-light transition-colors duration-200"
            >
              See how NIB fixes this →
            </a>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-cream transition-colors duration-200"
            >
              Book a free call →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── PAGE ───────────────────────────────────────────────────── */

export default function Home() {
  return (
    <main>
      <Hero />
      {/* Divider: cream → forest */}
      <div className="bg-cream leading-none overflow-hidden">
        <svg viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block" style={{ height: "48px" }}>
          <polygon points="0,48 1440,0 1440,48" fill="#2e543d" />
        </svg>
      </div>
      <IndustriesTicker />
      {/* Divider: forest → forest-dark */}
      <div className="bg-forest leading-none overflow-hidden">
        <svg viewBox="0 0 1440 32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block" style={{ height: "32px" }}>
          <polygon points="0,0 1440,32 1440,0" fill="#1e3828" />
        </svg>
      </div>
      <BoldStatement />
      {/* Divider: forest-dark → gold */}
      <div className="bg-forest-dark leading-none overflow-hidden">
        <svg viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block" style={{ height: "48px" }}>
          <polygon points="0,48 1440,0 1440,48" fill="#966c36" />
        </svg>
      </div>
      <FinalCTA />
    </main>
  );
}
