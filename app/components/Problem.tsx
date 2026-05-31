"use client";

import { motion } from "motion/react";
import { PhoneOff, CalendarX, UserX, Clock } from "lucide-react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const problems = [
  {
    icon: <PhoneOff size={28} />,
    title: "Enquiries go unanswered",
    description:
      "Every missed call or late reply is a lead your competitor picks up instead.",
  },
  {
    icon: <CalendarX size={28} />,
    title: "No-shows cost you every week",
    description:
      "Without reminders, a portion of your bookings simply do not arrive.",
  },
  {
    icon: <UserX size={28} />,
    title: "Customers go cold",
    description:
      "Without follow-up, one-time buyers forget you exist and never return.",
  },
  {
    icon: <Clock size={28} />,
    title: "You are doing it manually",
    description:
      "Every reminder and follow-up is time taken from running your business.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-4"
        >
          <span className="text-[#8A6E4B] text-xs font-semibold uppercase tracking-widest">
            The Problem
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-bold text-[#1F3D2B] text-center leading-tight mb-4"
        >
          Small businesses lose revenue through gaps they already know exist.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="text-[#666666] text-lg text-center max-w-xl mx-auto mb-2"
        >
          The problem is not finding new customers. It is keeping the ones you
          already have.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <HoverEffect items={problems} className="mt-4" />
        </motion.div>
      </div>
    </section>
  );
}
