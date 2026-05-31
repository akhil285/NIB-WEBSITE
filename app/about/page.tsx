"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import FinalCTA from "@/components/sections/FinalCTA";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";

const CALENDLY = "https://calendly.com/akhil-nib-consulting/30min";

/* ─── HERO ────────────────────────────────────────────────────── */
function AboutHero() {
  return (
    <section className="pt-40 pb-24 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          transition={{ delayChildren: 0.2 }}
        >
          <motion.div variants={fadeInUp}>
            <SectionLabel>The Person Behind NIB</SectionLabel>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <AnimatedHeading as="h1" className="text-4xl sm:text-5xl lg:text-6xl text-[#1a1a1a] mt-2 leading-tight">
              Built by someone who believes local businesses deserve enterprise-level tools.
            </AnimatedHeading>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── FOUNDER ─────────────────────────────────────────────────── */
function Founder() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="py-28 bg-cream-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Photo */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex justify-center"
          >
            <div
              className="relative w-80 h-80 max-w-full"
              style={{ filter: "drop-shadow(0 0 32px rgba(150,108,54,0.28))" }}
            >
              {/* Animated rotating gold border ring */}
              <div
                className="absolute founder-animated-border"
                style={{
                  inset: "-3px",
                  clipPath: "polygon(8% 0%, 100% 0%, 100% 92%, 92% 100%, 0% 100%, 0% 8%)",
                }}
              />
              {/* Founder photo */}
              <div
                className="relative w-full h-full overflow-hidden"
                style={{
                  clipPath: "polygon(8% 0%, 100% 0%, 100% 92%, 92% 100%, 0% 100%, 0% 8%)",
                }}
              >
                <Image
                  src="/images/founder.png"
                  alt="Akhil Uchil"
                  fill
                  className="object-cover"
                  sizes="320px"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h2
              className="text-[#1a1a1a] text-4xl mb-2 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Akhil Uchil
            </h2>
            <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-8 font-sans">
              Founder, NIB Consulting
            </p>

            <div className="space-y-5 text-[#4a4a4a] font-sans leading-relaxed text-base">
              <p>
                NIB was built on a simple observation: small businesses are doing everything
                right, with a great team, loyal clients, and real demand, but losing revenue
                every day to systems that weren&apos;t designed for them.
              </p>
              <p>
                I built NIB to change that. Not with complicated software that needs
                a full-time admin to run. But with a done-for-you AI system that acts
                as a silent team member, handling enquiries, following up on leads,
                and keeping clients coming back.
              </p>
              <p>
                My goal is to give every independent business the operational power of a
                much larger enterprise, without the overhead.
              </p>
              {/* Replace with Akhil's real bio when ready */}
            </div>

            <div className="mt-10">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold hover:bg-gold-light text-forest-dark font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:scale-[1.03] font-sans"
              >
                Book a call with Akhil
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── VISION ──────────────────────────────────────────────────── */
function Vision() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-28 bg-cream">
      <motion.div
        ref={ref}
        className="max-w-3xl mx-auto px-4 sm:px-6 text-center"
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <SectionLabel>The Vision</SectionLabel>
        <AnimatedHeading as="h2" className="text-4xl sm:text-5xl text-[#1a1a1a] mt-2 mb-6">
          An AI operating layer for every local service business.
        </AnimatedHeading>
        <p className="text-[#4a4a4a] text-lg leading-relaxed font-sans">
          NIB started with appointment-based businesses because their revenue is directly tied to
          appointments, speed, and repeat clients. But the vision is bigger. Every
          appointment-based business deserves a system that works as hard as they do.
          Clinics, studios, wellness providers, home services. The business is just the beginning.
        </p>
      </motion.div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <Founder />
      <Vision />
      <FinalCTA />
    </main>
  );
}
