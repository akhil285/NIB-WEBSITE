"use client";

import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Instant Response",
    body: "Every enquiry gets a reply within 60 seconds, around the clock. No lead goes unanswered.",
    tags: ["Missed-Call Text-Back", "AI Chat", "Lead Forms"],
  },
  {
    number: "02",
    title: "Automatic Follow-Up",
    body: "Leads who do not book get a personalised sequence over five days. It stops the moment they respond.",
    tags: ["SMS Sequences", "Email Drip", "Personalised Outreach"],
  },
  {
    number: "03",
    title: "No-Show Prevention",
    body: "Reminders go out at 48 hours and 2 hours before every appointment. Rebooking is handled automatically.",
    tags: ["Appointment Reminders", "Confirmation Flows", "Reschedule Automation"],
  },
  {
    number: "04",
    title: "Reactivation",
    body: "Quiet customers receive a personalised message at 90 days. Review requests go out after every completed job.",
    tags: ["Review Requests", "Reactivation Campaigns", "Loyalty Offers"],
  },
];

export default function Solution() {
  return (
    <section id="solution" className="py-24 bg-[#F5F2E8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-4"
        >
          <span className="text-[#8A6E4B] text-xs font-semibold uppercase tracking-widest">
            The System
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-bold text-[#1F3D2B] text-center leading-tight mb-4"
        >
          One system. Every stage of your customer journey.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="text-[#666666] text-lg text-center max-w-lg mx-auto mb-14"
        >
          We build it. We run it. You focus on doing the work.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl p-8 border border-[#1F3D2B]/8 shadow-sm"
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-[#1F3D2B] flex items-center justify-center text-[#F5F2E8] font-bold text-sm">
                  {s.number}
                </div>
                <div>
                  <h3 className="text-[#1F3D2B] font-bold text-xl mb-2">
                    {s.title}
                  </h3>
                  <p className="text-[#666666] text-sm leading-relaxed mb-4">
                    {s.body}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="bg-[#F5F2E8] text-[#8A6E4B] text-xs font-medium px-3 py-1 rounded-full border border-[#8A6E4B]/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
