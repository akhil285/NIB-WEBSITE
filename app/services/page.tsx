"use client";

import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { X, Check, Mic } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FinalCTA from "@/components/sections/FinalCTA";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn } from "@/lib/animations";
import { cn } from "@/lib/utils";

const CALENDLY = "https://calendly.com/akhil-nib-consulting/30min";

/* ─── HERO ────────────────────────────────────────────────────── */
function ServicesHero() {
  return (
    <section className="hidden md:flex min-h-screen flex-col items-center justify-center pt-40 pb-24 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          transition={{ delayChildren: 0.2 }}
        >
          <motion.div variants={fadeInUp}><SectionLabel>What We Build</SectionLabel></motion.div>
          <motion.div variants={fadeInUp}>
            <AnimatedHeading as="h1" className="text-4xl sm:text-5xl lg:text-6xl text-[#1a1a1a] mt-2 mb-6 leading-tight">
              One system. Eight agents. Zero extra work.
            </AnimatedHeading>
          </motion.div>
          <motion.p variants={fadeInUp} className="text-[#4a4a4a] text-lg max-w-2xl mx-auto font-sans leading-relaxed">
            NIB doesn&apos;t sell software you have to manage. We build and run a complete
            AI client-management system, deployed inside your business, working for you
            every hour of every day.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── BEFORE / AFTER ──────────────────────────────────────────── */
const withoutNIB = [
  "Enquiries go unanswered for hours",
  "Leads disappear after one message",
  "No-shows hurt revenue with no warning",
  "Empty slots stay empty all week",
  "Past clients never hear from you again",
  "Google reviews pile up only in your head",
];
const withNIB = [
  "Every enquiry gets an instant, intelligent reply",
  "Leads are followed up automatically until they book",
  "24h and 2h reminders protect every appointment",
  "Reactivation campaigns fill gaps before they cost you",
  "Past clients get reached out to when you have space",
  "Happy clients are asked for reviews at the perfect moment",
];

function BeforeAfter() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-28 bg-cream-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel>The Difference</SectionLabel>
          <AnimatedHeading as="h2" className="text-4xl sm:text-5xl text-[#1a1a1a] mt-2">
            What changes when NIB is running.
          </AnimatedHeading>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="rounded-xl border bg-white overflow-hidden"
            style={{ borderColor: "rgba(127,29,29,0.15)" }}
          >
            {/* Without NIB image */}
            <img
              src="/images/services/without-nib.jpeg"
              alt="Without NIB"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center top", display: "block" }}
            />
            <div className="p-8">
              <h3
                className="text-[#1a1a1a]/50 text-2xl mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Without NIB
              </h3>
              <ul className="space-y-3">
                {withoutNIB.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#4a4a4a] text-sm font-sans">
                    <X size={16} className="text-red-500/70 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="rounded-xl border overflow-hidden"
            style={{ background: "rgba(46,84,61,0.08)", borderColor: "rgba(150,108,54,0.25)" }}
          >
            {/* With NIB image */}
            <img
              src="/images/services/with-nib.jpeg"
              alt="With NIB"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center top", display: "block" }}
            />
            <div className="p-8">
              <h3
                className="text-[#1a1a1a] text-2xl mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                With NIB
              </h3>
              <ul className="space-y-3">
                {withNIB.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#1a1a1a] text-sm font-sans">
                    <Check size={16} className="text-gold mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── BUDDHA REVEAL ───────────────────────────────────────────── */
function BuddhaReveal() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="pt-64 pb-36 bg-cream-dark relative overflow-hidden">
      {/* Gold radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(150,108,54,0.06) 0%, transparent 65%)",
        }}
      />

      <motion.div
        ref={ref}
        className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10"
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <SectionLabel className="text-gold-muted">The Engine Behind It All</SectionLabel>

        <motion.h2
          className="text-6xl sm:text-7xl lg:text-8xl text-[#1a1a1a] mt-4 mb-8 leading-none"
          style={{ fontFamily: "var(--font-heading)" }}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          Meet Buddha.
        </motion.h2>

        <motion.p
          className="text-[#4a4a4a] text-lg leading-relaxed max-w-2xl mx-auto mb-12 font-sans"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Buddha is NIB&apos;s proprietary AI system, purpose-built for appointment-based
          businesses. It&apos;s not a chatbot. It&apos;s not a workflow tool. It&apos;s a complete
          client-management brain that learns your business, coordinates every agent,
          and runs your client operations so you don&apos;t have to.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 text-[#4a4a4a] text-sm font-sans"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <span>Installed in your business.</span>
          <span className="text-gold/50">·</span>
          <span>Configured to your rules.</span>
          <span className="text-gold/50">·</span>
          <span>Running 24/7.</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─── PRICING HEADER ─────────────────────────────────────────── */
function PricingHeader() {
  return (
    <section id="pricing" className="pt-24 pb-12 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" transition={{ delayChildren: 0.2 }}>
          <motion.div variants={fadeInUp}><SectionLabel>Transparent Packaging</SectionLabel></motion.div>
          <motion.div variants={fadeInUp}>
            <AnimatedHeading as="h2" className="text-4xl sm:text-5xl lg:text-6xl text-[#1a1a1a] mt-2 mb-6">
              Simple packages. Measurable results.
            </AnimatedHeading>
          </motion.div>
          <motion.p variants={fadeInUp} className="text-[#4a4a4a] text-lg font-sans">
            No long contracts. No technical setup required. Cancel anytime with 30 days notice.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── PRICING CARDS ───────────────────────────────────────────── */
const plans = [
  {
    name: "Essential",
    features: [
      "AI Receptionist",
      "Booking link handling",
      "Basic follow-up",
    ],
    featured: false,
  },
  {
    name: "Growth",
    features: [
      "Everything in Essential",
      "No-show reminders",
      "Review request automation",
    ],
    featured: true,
  },
  {
    name: "Campaign Growth",
    features: [
      "Everything in Growth",
      "Active reactivation campaigns",
      "Optional voice AI add-on",
    ],
    featured: false,
  },
];

function PricingCards() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-28 bg-cream-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={scaleIn}
              className={cn(
                "card-hover rounded-xl p-8 flex flex-col h-full",
                plan.featured
                  ? "bg-forest border-2 border-gold shadow-2xl"
                  : "bg-white border border-black/10"
              )}
            >
              {plan.featured && (
                <span className="inline-block bg-gold text-forest-dark text-xs font-bold px-3 py-1 rounded-full font-sans uppercase tracking-wide mb-4 w-fit">
                  Most Popular
                </span>
              )}
              <h2 className={cn("text-3xl mb-6", plan.featured ? "text-cream" : "text-[#1a1a1a]")} style={{ fontFamily: "var(--font-heading)" }}>{plan.name}</h2>

              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className={cn("flex items-start gap-2.5 text-sm font-sans", plan.featured ? "text-cream/70" : "text-[#4a4a4a]")}>
                    <Check size={14} className="text-gold mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "block text-center font-semibold py-4 rounded-full transition-all duration-200 text-sm font-sans",
                  plan.featured
                    ? "bg-gold hover:bg-gold-light text-forest-dark"
                    : "border border-gold/40 hover:border-gold text-gold hover:bg-gold/5"
                )}
              >
                Book a Call
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── VOICE AI ────────────────────────────────────────────────── */
const voiceFeatures = [
  "AI answers inbound calls",
  "Captures caller name, service request, contact details",
  "Sends SMS booking link immediately after the call",
  "End-of-call summary sent to you by email",
  "Works for missed calls too",
];

function VoiceAI() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-28 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp}>
            <SectionLabel>Optional Add-On</SectionLabel>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Mic size={40} className="text-gold mx-auto my-4" />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <AnimatedHeading as="h2" className="text-4xl sm:text-5xl text-[#1a1a1a] mt-2 mb-6">
              Never miss a call again.
            </AnimatedHeading>
          </motion.div>
          <motion.p variants={fadeInUp} className="text-[#4a4a4a] text-lg leading-relaxed mb-10 font-sans">
            The Voice AI add-on gives your business an AI phone receptionist that answers
            calls 24/7, takes enquiry details, and sends a booking link by SMS —
            even when you&apos;re mid-appointment.
          </motion.p>
          <motion.ul variants={staggerContainer} className="text-left max-w-sm mx-auto space-y-3 mb-10">
            {voiceFeatures.map((f) => (
              <motion.li key={f} variants={fadeInUp} className="flex items-start gap-3 text-[#4a4a4a] text-sm font-sans">
                <Check size={14} className="text-gold mt-0.5 shrink-0" />
                {f}
              </motion.li>
            ))}
          </motion.ul>
          <motion.div variants={fadeInUp}>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-gold/40 hover:border-gold text-gold hover:bg-gold/5 font-semibold px-8 py-4 rounded-full transition-all duration-200 font-sans"
            >
              Ask about Voice AI on your call
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── PRICING FAQ ─────────────────────────────────────────────── */
const pricingFaqs = [
  {
    q: "Why don't you show exact prices?",
    a: "Because every salon is different. Volume, setup complexity, and the right package all affect pricing. We'd rather have a quick conversation and give you a number that actually makes sense for your business.",
  },
  {
    q: "Are there setup fees?",
    a: "This is covered on your discovery call. Some packages include setup, others have a one-time configuration fee.",
  },
  {
    q: "What are the SMS and voice costs?",
    a: "Usage costs (Twilio SMS, voice minutes) are either included up to a fair-use cap or passed through at cost depending on your package. We'll be transparent about this on your call.",
  },
  {
    q: "Can I upgrade or downgrade my package?",
    a: "Yes. You can move between packages with 30 days notice.",
  },
];

function PricingFAQ() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-28 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionLabel>Pricing Questions</SectionLabel>
          <AnimatedHeading as="h2" className="text-4xl sm:text-5xl text-[#1a1a1a] mt-2">
            Common questions about pricing.
          </AnimatedHeading>
        </div>
        <motion.div ref={ref} variants={fadeInUp} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <Accordion multiple={false} className="space-y-3">
            {pricingFaqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`pfaq-${i}`}
                className="bg-white border border-black/10 rounded-xl px-6 overflow-hidden data-[state=open]:border-gold/40"
              >
                <AccordionTrigger className="text-[#1a1a1a] font-sans text-left py-5 hover:no-underline hover:text-gold transition-colors duration-200">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#4a4a4a] font-sans text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <main>
      <BuddhaReveal />
      <BeforeAfter />
      <ServicesHero />
      <PricingHeader />
      <PricingCards />
      <VoiceAI />
      <PricingFAQ />
      <FinalCTA />
    </main>
  );
}
