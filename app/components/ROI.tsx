"use client";

import { motion } from "motion/react";
import { NumberTicker } from "@/components/ui/number-ticker";

const CALENDLY = "https://calendly.com";

const questions = [
  {
    low: 10,
    high: 20,
    unit: "%",
    question:
      "of your enquiries currently go unanswered, how many bookings are you missing each month?",
  },
  {
    low: 5,
    high: 15,
    unit: "%",
    question:
      "faster follow-up converted more leads, what would that do to your calendar over a year?",
  },
  {
    low: 20,
    high: 50,
    unit: "%",
    question:
      "reminders reduced your no-show rate, how many empty slots could you recover each week?",
  },
  {
    low: 5,
    high: 10,
    unit: "%",
    question:
      "of past customers came back after a single reactivation message, what would that add without any new ad spend?",
  },
];

export default function ROI() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-4"
        >
          <span className="text-[#8A6E4B] text-xs font-semibold uppercase tracking-widest">
            The Numbers
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-bold text-[#1F3D2B] text-center leading-tight mb-4"
        >
          What would fixing the gaps be worth to your business?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="text-[#666666] text-lg text-center max-w-2xl mx-auto mb-14"
        >
          We do not guess your numbers. We show where revenue usually leaks —
          then you decide what the upside could be.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {questions.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#F5F2E8] rounded-2xl p-8 border border-[#1F3D2B]/8 shadow-sm"
            >
              <p className="text-[#1F3D2B] text-lg font-medium leading-relaxed">
                <span className="text-[#8A6E4B]">If </span>
                <NumberTicker
                  value={q.low}
                  className="text-[#1F3D2B] font-bold"
                />
                <span className="text-[#1F3D2B] font-bold">–</span>
                <NumberTicker
                  value={q.high}
                  className="text-[#1F3D2B] font-bold"
                />
                <span className="text-[#1F3D2B] font-bold">{q.unit} </span>
                <span className="text-[#666666]">{q.question}</span>
              </p>
            </motion.div>
          ))}
        </div>

        <p className="text-[#666666] text-sm text-center mb-10">
          Results depend on enquiry volume, pricing, and current business
          processes.
        </p>

        <div className="text-center">
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1F3D2B] hover:bg-[#2a5239] text-[#F5F2E8] font-semibold px-8 py-4 rounded-full transition-colors duration-200 text-sm"
          >
            See what this looks like for your business
          </a>
        </div>
      </div>
    </section>
  );
}
