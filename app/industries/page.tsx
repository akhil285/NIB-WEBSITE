"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Scissors, Stethoscope, Sparkles, Leaf, Zap, Activity, Palette, Heart, Wind, Sun, Eye, Dumbbell } from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const industries = [
  { Icon: Scissors,    name: "Hair Salons",           desc: "The original NIB market. Full calendar management from enquiry to rebooking.",              image: "/images/industries/hair_salon.jpg" },
  { Icon: Stethoscope, name: "Dental Clinics",        desc: "Appointment reminders, patient reactivation, and review collection on autopilot.",           image: "/images/industries/dental_clinic.webp" },
  { Icon: Sparkles,    name: "Beauty Studios",        desc: "Never miss an enquiry. Keep clients coming back with automated follow-up.",                   image: "/images/industries/beauty_studio.avif" },
  { Icon: Leaf,        name: "Med Spas",              desc: "Premium client experience backed by an intelligent booking and follow-up system.",            image: "/images/industries/med_spas.avif" },
  { Icon: Zap,         name: "Barbershops",           desc: "Fill every chair. Reactivate quiet clients before the week goes empty.",                     image: "/images/industries/barber_salon.jpg" },
  { Icon: Activity,    name: "Physiotherapy Clinics", desc: "Reduce no-shows and keep patients on their treatment schedule automatically.",                image: "/images/industries/physio_therapy.jpg" },
  { Icon: Palette,     name: "Nail Salons",           desc: "Fast replies, reminders, and review requests without lifting a finger.",                     image: "/images/industries/nail_salon.webp" },
  { Icon: Heart,       name: "Wellness Centers",      desc: "Holistic client management that keeps your schedule full and clients engaged.",               image: "/images/industries/wellness_center.jpg" },
  { Icon: Wind,        name: "Chiropractic Offices",  desc: "Consistent follow-up and reactivation so patients never fall off their plan.",               image: "/images/industries/chiro_practic.jpg" },
  { Icon: Sun,         name: "Skin Clinics",          desc: "Protect booked revenue with smart reminders and bring back lapsed clients.",                  image: "/images/industries/skin_clinic.jpg" },
  { Icon: Eye,         name: "Lash Studios",          desc: "Automated rebooking suggestions keep your chair full between appointments.",                  image: "/images/industries/lash_studio.jpg" },
  { Icon: Dumbbell,    name: "Fitness Studios",       desc: "Member reactivation, class reminders, and review growth handled for you.",                   image: "/images/industries/fitness_studio.webp" },
];

/* ─── HERO ────────────────────────────────────────────────────── */
function IndustriesHero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-24 pb-16 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          transition={{ delayChildren: 0.2 }}
        >
          <motion.div variants={fadeInUp}>
            <SectionLabel>Who We Work With</SectionLabel>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <AnimatedHeading as="h1" className="text-4xl sm:text-5xl lg:text-6xl text-[#1a1a1a] mt-2 mb-6 leading-tight">
              Built for any business that runs on appointments.
            </AnimatedHeading>
          </motion.div>
          <motion.p variants={fadeInUp} className="text-[#4a4a4a] text-lg max-w-[560px] mx-auto font-sans leading-relaxed">
            If your revenue depends on bookings, repeat clients, and fast response times, NIB was built for you.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── GRID ────────────────────────────────────────────────────── */
function IndustriesGrid() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="py-28 bg-cream-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel>Our Markets</SectionLabel>
          <AnimatedHeading as="h2" className="text-4xl sm:text-5xl text-[#1a1a1a] mt-2">
            Every appointment-based business. One system.
          </AnimatedHeading>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {industries.map(({ Icon, name, desc, image }) => (
            <motion.div
              key={name}
              variants={fadeInUp}
              className="bg-cream rounded-xl border-t-2 border-gold overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_32px_rgba(150,108,54,0.18)]"
            >
              {/* Image area */}
              {image ? (
                <div className="aspect-video w-full relative">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              ) : null}
              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-[#1a1a1a] text-xl mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {name}
                </h3>
                <p className="text-[#4a4a4a] text-sm font-sans leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function IndustriesPage() {
  return (
    <main>
      <IndustriesHero />
      <IndustriesGrid />
      <FinalCTA />
    </main>
  );
}
