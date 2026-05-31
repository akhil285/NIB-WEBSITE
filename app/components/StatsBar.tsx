"use client";

import { motion } from "motion/react";
import { NumberTicker } from "@/components/ui/number-ticker";

const stats = [
  {
    prefix: "1 in ",
    value: 5,
    suffix: "",
    label: "enquiries go unanswered outside business hours",
  },
  {
    prefix: "",
    value: 30,
    suffix: "%",
    label: "of bookings result in a no-show without reminders",
  },
  {
    prefix: "",
    value: 5,
    suffix: "×",
    label: "cheaper to retain a customer than acquire a new one",
  },
];

export default function StatsBar() {
  return (
    <section className="bg-[#1F3D2B] py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            >
              <div className="text-[#F5F2E8] text-5xl font-bold mb-3 tabular-nums">
                {s.prefix}
                <NumberTicker
                  value={s.value}
                  className="text-[#F5F2E8] text-5xl font-bold"
                />
                {s.suffix}
              </div>
              <p className="text-[#F5F2E8]/60 text-sm max-w-xs mx-auto leading-relaxed">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
