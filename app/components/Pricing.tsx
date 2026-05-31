"use client";

import { motion } from "motion/react";

const CALENDLY = "https://calendly.com";

const plans = [
  {
    name: "Starter",
    setup: "$497",
    monthly: "$297",
    description: "For solo operators ready to stop losing leads.",
    features: [
      "Missed-call text-back",
      "Basic lead capture form",
      "Appointment reminder sequences",
      "Google review request automation",
      "Monthly performance report",
      "Email support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Core",
    setup: "$1,500",
    monthly: "$697",
    description: "The complete system for businesses serious about growth.",
    features: [
      "Everything in Starter",
      "Multi-step SMS and email sequences",
      "AI chat widget",
      "No-show reactivation campaigns",
      "CRM pipeline dashboard",
      "Bi-weekly strategy calls",
      "Priority support under 4 hours",
    ],
    cta: "Book a Demo",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Full Stack",
    setup: "$2,500",
    monthly: "$697",
    description:
      "Everything in Core plus a brand-new website built and managed for you.",
    features: [
      "Everything in Core",
      "Custom website design and build",
      "Website hosting and maintenance",
      "SEO foundation setup",
      "Conversion-optimised landing pages",
      "Dedicated account manager",
    ],
    cta: "Book a Demo",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-4"
        >
          <span className="text-[#8A6E4B] text-xs font-semibold uppercase tracking-widest">
            Pricing
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-bold text-[#1F3D2B] text-center leading-tight mb-4"
        >
          Transparent pricing. No surprises.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="text-[#666666] text-lg text-center max-w-xl mx-auto mb-14"
        >
          Every plan includes done-for-you setup, ongoing management, and
          real support, not just a software login.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlighted
                  ? "bg-[#1F3D2B] shadow-xl"
                  : "bg-[#F5F2E8] border border-[#1F3D2B]/8 shadow-sm"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#8A6E4B] text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-base font-bold mb-4 ${
                    plan.highlighted ? "text-[#F5F2E8]/70" : "text-[#666666]"
                  }`}
                >
                  {plan.name}
                </h3>

                {/* Setup fee row */}
                <div
                  className={`flex items-center justify-between rounded-xl px-4 py-3 mb-3 ${
                    plan.highlighted ? "bg-white/8" : "bg-white"
                  }`}
                >
                  <span
                    className={`text-xs font-semibold uppercase tracking-wide ${
                      plan.highlighted ? "text-[#F5F2E8]/45" : "text-[#666666]"
                    }`}
                  >
                    One-time setup
                  </span>
                  <span
                    className={`text-xl font-bold ${
                      plan.highlighted ? "text-[#F5F2E8]" : "text-[#1F3D2B]"
                    }`}
                  >
                    {plan.setup}
                  </span>
                </div>

                {/* Monthly fee row */}
                <div
                  className={`flex items-center justify-between rounded-xl px-4 py-3 ${
                    plan.highlighted
                      ? "bg-white/12 border border-white/20"
                      : "bg-[#1F3D2B]/5 border border-[#1F3D2B]/12"
                  }`}
                >
                  <span
                    className={`text-xs font-semibold uppercase tracking-wide ${
                      plan.highlighted ? "text-[#F5F2E8]/60" : "text-[#8A6E4B]"
                    }`}
                  >
                    Per month
                  </span>
                  <div className="flex items-end gap-0.5">
                    <span
                      className={`text-3xl font-bold ${
                        plan.highlighted ? "text-[#F5F2E8]" : "text-[#1F3D2B]"
                      }`}
                    >
                      {plan.monthly}
                    </span>
                    <span
                      className={`text-sm pb-0.5 ${
                        plan.highlighted
                          ? "text-[#F5F2E8]/40"
                          : "text-[#666666]"
                      }`}
                    >
                      /mo
                    </span>
                  </div>
                </div>

                <p
                  className={`text-sm mt-4 leading-relaxed ${
                    plan.highlighted ? "text-[#F5F2E8]/60" : "text-[#666666]"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-start gap-2.5 text-sm ${
                      plan.highlighted ? "text-[#F5F2E8]/75" : "text-[#1A1A1A]"
                    }`}
                  >
                    <svg
                      className={`mt-0.5 shrink-0 w-4 h-4 ${
                        plan.highlighted ? "text-[#F5F2E8]/60" : "text-[#1F3D2B]"
                      }`}
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M3 8l3.5 3.5L13 4.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center font-semibold py-3.5 rounded-full transition-colors duration-200 text-sm ${
                  plan.highlighted
                    ? "bg-[#F5F2E8] hover:bg-white text-[#1F3D2B]"
                    : "bg-[#1F3D2B] hover:bg-[#2a5239] text-[#F5F2E8]"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-[#666666] text-sm mt-10">
          Monthly retainer billed after setup is complete. Cancel anytime
          after 3 months.
        </p>
      </div>
    </section>
  );
}
