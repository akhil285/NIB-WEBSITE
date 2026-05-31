"use client";

import { motion } from "motion/react";
import { Marquee } from "@/components/ui/marquee";

const CALENDLY = "https://calendly.com";

const industries = [
  "Dental Clinics",
  "Beauty Salons",
  "Estate Agents",
  "Accountants",
  "Trades",
  "Law Firms",
  "Physio Clinics",
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

export default function Hero() {
  return (
    <section className="pt-16 bg-[#F5F2E8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div>
            <motion.span
              {...fadeUp(0)}
              className="inline-block text-[#8A6E4B] text-xs font-semibold uppercase tracking-widest mb-5"
            >
              Done-For-You Automation
            </motion.span>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-4xl sm:text-5xl font-bold text-[#1F3D2B] leading-tight tracking-tight mb-6"
            >
              Stop losing leads and no-shows, automatically.
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="text-[#1A1A1A] text-lg leading-relaxed mb-8 max-w-lg"
            >
              We install a system that captures every enquiry, follows up
              faster, reduces no-shows, and brings past customers back —
              without you touching the tech.
            </motion.p>

            <motion.div {...fadeUp(0.3)} className="mb-6">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#1F3D2B] hover:bg-[#2a5239] text-[#F5F2E8] font-semibold px-7 py-3.5 rounded-full transition-colors duration-200 text-sm"
              >
                See It Working
              </a>
            </motion.div>

            <motion.p
              {...fadeUp(0.4)}
              className="text-[#666666] text-sm"
            >
              Book a free 10-minute call. No pitch. No obligation.
            </motion.p>
          </div>

          {/* Right column — UI mockup cards */}
          <div className="flex flex-col gap-4">
            <motion.div {...fadeUp(0.2)} className="bg-[#1F3D2B] rounded-2xl p-5 shadow-md">
              <div className="text-[#F5F2E8]/50 text-xs font-medium mb-3 uppercase tracking-wide">
                Chat Widget
              </div>
              <div className="space-y-2">
                <div className="flex justify-start">
                  <div className="bg-white/10 text-[#F5F2E8] text-sm px-4 py-2.5 rounded-2xl rounded-tl-sm max-w-[80%]">
                    Do you have availability Friday?
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-[#2a5239] text-[#F5F2E8] text-sm px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[85%]">
                    Hi Sarah, yes! I can book you for Friday at 2pm or 4pm —
                    which works?
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.3)} className="bg-[#2a2a2a] rounded-2xl p-5 shadow-md">
              <div className="text-white/50 text-xs font-medium mb-3 uppercase tracking-wide">
                SMS Reminder
              </div>
              <div className="flex justify-end">
                <div className="bg-[#1F3D2B] text-[#F5F2E8] text-sm px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[90%]">
                  Hi James, your appointment is tomorrow at 10am. Reply YES
                  to confirm.
                </div>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp(0.4)}
              className="bg-white rounded-2xl p-5 border border-[#1F3D2B]/10 shadow-sm"
            >
              <div className="text-[#666666] text-xs font-medium mb-3 uppercase tracking-wide">
                Reactivation Email
              </div>
              <div className="border-b border-[#1F3D2B]/10 pb-2 mb-2">
                <p className="text-[#1A1A1A] text-sm font-semibold">
                  It has been a while. We have something for you.
                </p>
              </div>
              <p className="text-[#666666] text-sm">
                Hi Claire, it has been 90 days since your last visit...
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="border-t border-[#1F3D2B]/10 py-4">
        <Marquee pauseOnHover className="[--duration:30s] [--gap:3rem]">
          {industries.map((name) => (
            <span key={name} className="text-[#8A6E4B] text-sm font-medium px-4">
              {name}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
