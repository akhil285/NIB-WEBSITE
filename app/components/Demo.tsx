"use client";

import { motion } from "motion/react";

const CALENDLY = "https://calendly.com";

export default function Demo() {
  return (
    <section id="demo" className="py-24 bg-[#F5F2E8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-4"
        >
          <span className="text-[#8A6E4B] text-xs font-semibold uppercase tracking-widest">
            See It Working
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-bold text-[#1F3D2B] text-center leading-tight mb-14"
        >
          This is what your customers experience.
        </motion.h2>

        {/* Three preview cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Chat widget */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="bg-[#1F3D2B] rounded-2xl p-6 shadow-md"
          >
            <div className="text-[#F5F2E8]/50 text-xs font-semibold uppercase tracking-wide mb-4">
              Chat Widget
            </div>
            <div className="space-y-3">
              <div className="flex justify-start">
                <div className="bg-white/10 text-[#F5F2E8] text-sm px-4 py-2.5 rounded-2xl rounded-tl-sm max-w-[85%] leading-relaxed">
                  Do you have availability this Friday?
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-[#2a5239] text-[#F5F2E8] text-sm px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[90%] leading-relaxed">
                  Hi Sarah, yes we do! I can book you in for Friday at 2pm or
                  4pm, which works best?
                </div>
              </div>
            </div>
          </motion.div>

          {/* SMS reminder */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="bg-[#2a2a2a] rounded-2xl p-6 shadow-md"
          >
            <div className="text-white/50 text-xs font-semibold uppercase tracking-wide mb-4">
              SMS Reminder
            </div>
            <div className="flex justify-center mb-3">
              <div className="w-24 h-1 bg-white/20 rounded-full" />
            </div>
            <div className="flex justify-end">
              <div className="bg-[#1F3D2B] text-[#F5F2E8] text-sm px-4 py-3 rounded-2xl rounded-tr-sm max-w-[95%] leading-relaxed">
                Hi James, just a reminder your appointment is tomorrow at
                10am. Reply YES to confirm or RESCHEDULE to change it.
              </div>
            </div>
          </motion.div>

          {/* Reactivation email */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl p-6 border border-[#1F3D2B]/10 shadow-sm"
          >
            <div className="text-[#666666] text-xs font-semibold uppercase tracking-wide mb-4">
              Reactivation Email
            </div>
            <div className="border border-[#1F3D2B]/10 rounded-xl overflow-hidden">
              <div className="bg-[#F5F2E8] px-4 py-2.5 border-b border-[#1F3D2B]/10">
                <p className="text-[#1A1A1A] text-xs font-semibold leading-snug">
                  It has been a while. We have something for you.
                </p>
              </div>
              <div className="px-4 py-3">
                <p className="text-[#666666] text-sm leading-relaxed">
                  Hi Claire, it has been 90 days since your last visit. We
                  would love to see you again...
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Free trial panel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="bg-white rounded-2xl p-10 border border-[#1F3D2B]/10 shadow-sm text-center max-w-2xl mx-auto"
        >
          <h3 className="text-[#1F3D2B] text-2xl font-bold mb-4">
            Try it on your business, free for 14 days.
          </h3>
          <p className="text-[#666666] text-base leading-relaxed mb-8">
            We run a free 14-day pilot for selected businesses. You see the
            system working on your actual enquiries before you pay anything.
            After the pilot, if you want to continue, you pay the full setup
            cost and 50% of the first monthly retainer.
          </p>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1F3D2B] hover:bg-[#2a5239] text-[#F5F2E8] font-semibold px-8 py-4 rounded-full transition-colors duration-200 text-sm"
          >
            Apply for a Free Pilot
          </a>
        </motion.div>
      </div>
    </section>
  );
}
