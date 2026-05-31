"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { ArrowRight, ExternalLink } from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const nibPosts = [
  {
    slug: "/blog/reactivation",
    category: "Client Retention",
    title: "The Most Valuable Clients You're Ignoring Are Already in Your Database",
    excerpt: "Every appointment-based business owner says they need more clients. But when did you last reach out to the ones who already booked with you?",
    date: "May 2026",
    readTime: "5 min read",
    image: "/images/blog/blog-reactivation.jpg",
  },
  {
    slug: "/blog/speed-to-lead",
    category: "Lead Conversion",
    title: "Why the First Business to Reply Wins the Booking",
    excerpt: "Research shows responding within 5 minutes makes you 100x more likely to convert a lead than waiting 30 minutes. Most businesses respond in hours.",
    date: "May 2026",
    readTime: "5 min read",
    image: "/images/blog/blog-speed-to-lead.jpg",
  },
  {
    slug: "/blog/google-reviews",
    category: "Reviews & Reputation",
    title: "One Extra Star on Google Is Worth More Than Any Ad You'll Ever Run",
    excerpt: "A business sitting at 4.7 stars and one sitting at 4.2 stars are not close competitors in the eyes of a local client. The gap is almost entirely a systems problem.",
    date: "May 2026",
    readTime: "5 min read",
    image: "/images/blog/blog-google-reviews.jpg",
  },
];

const featuredPosts = [
  {
    slug: "https://medium.com/@jtgrahamm/the-silent-profit-killer-why-62-of-your-business-calls-go-unanswered-and-what-its-costing-you-7619af72cce4",
    category: "Industry Research",
    title: "The Silent Profit Killer: Why 62% of Business Calls Go Unanswered",
    excerpt: "A data-driven look at the missed call epidemic destroying small business revenue — and what it is actually costing you.",
    source: "Medium",
    image: "/images/blog/blog-missed-calls.jpg",
  },
  {
    slug: "https://www.shopify.com/enterprise/blog/running-winback-campaigns",
    category: "Client Retention",
    title: "Win-Back Campaigns: 7 Strategies to Re-Engage Lapsed Customers",
    excerpt: "Repeat customers drive 44% of revenue but only represent 21% of customers. Here is how leading businesses are systematically bringing them back.",
    source: "Shopify",
    image: "/images/blog/blog-winback.jpg",
  },
  {
    slug: "https://intelibot.ai/pages/blog/ai-appointment-booking-system-small-business.html",
    category: "AI & Automation",
    title: "AI Appointment Booking for Small Business: 2026 Guide",
    excerpt: "Businesses implementing AI booking systems are seeing 20 to 35% growth in appointments and no-show rates dropping by 40%. The numbers behind the shift.",
    source: "Intelibot",
    image: "/images/blog/blog-ai-booking.jpg",
  },
];

const cardGradients = [
  "linear-gradient(135deg, #1e3828 0%, #2e543d 100%)",
  "linear-gradient(135deg, #7a5628 0%, #966c36 100%)",
  "linear-gradient(135deg, #2e543d 0%, #c9a97a 100%)",
];

function CardImage({ category, image }: { category: string; image: string; index: number }) {
  return (
    <div className="aspect-video w-full relative overflow-hidden">
      <Image
        src={image}
        alt={category}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute bottom-3 left-3">
        <span
          className="border border-cream/30 text-cream text-xs font-sans font-medium px-3 py-1 rounded-full"
          style={{ background: "rgba(0,0,0,0.35)", backdropFilter: "blur(6px)" }}
        >
          {category}
        </span>
      </div>
    </div>
  );
}

function BlogHero() {
  return (
    <section className="pt-40 pb-24 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" transition={{ delayChildren: 0.2 }}>
          <motion.div variants={fadeInUp}><SectionLabel>Insights</SectionLabel></motion.div>
          <motion.div variants={fadeInUp}>
            <AnimatedHeading as="h1" className="text-4xl sm:text-5xl lg:text-6xl text-[#1a1a1a] mt-2 mb-6">
              Built for business owners. Written in plain English.
            </AnimatedHeading>
          </motion.div>
          <motion.p variants={fadeInUp} className="text-[#4a4a4a] text-lg font-sans">
            Tips on growing your business, understanding AI, and getting more from
            every client you already have.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function BlogGrid() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="py-28 bg-cream-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* From NIB */}
          <motion.div variants={fadeInUp} className="mb-8">
            <span className="text-[#4a4a4a]/50 text-xs font-sans uppercase tracking-[0.2em]">From NIB</span>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {nibPosts.map((post, index) => (
              <motion.article
                key={post.title}
                variants={fadeInUp}
                className="card-hover bg-white border border-black/8 rounded-xl overflow-hidden flex flex-col"
              >
                <CardImage category={post.category} image={post.image} index={index} />
                <div className="p-6 flex flex-col flex-1">
                  <h3
                    className="text-[#1a1a1a] text-xl leading-snug mb-3 flex-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-sm leading-relaxed mb-4 font-sans line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#1a1a1a]/40 text-xs font-sans">
                      By Akhil Uchil · {post.date} · {post.readTime}
                    </span>
                    <a
                      href={post.slug}
                      className="text-gold hover:text-gold-light text-sm font-sans transition-colors duration-200 flex items-center gap-1"
                    >
                      Read more <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Featured Reading */}
          <motion.div variants={fadeInUp} className="border-t border-black/8 pt-16 mb-8">
            <span className="text-[#4a4a4a]/50 text-xs font-sans uppercase tracking-[0.2em]">
              Featured Reading
            </span>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.title}
                variants={fadeInUp}
                className="card-hover bg-white border border-black/8 rounded-xl overflow-hidden flex flex-col"
              >
                <CardImage category={post.category} image={post.image} index={index} />
                <div className="p-6 flex flex-col flex-1">
                  <h3
                    className="text-[#1a1a1a] text-xl leading-snug mb-3 flex-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-sm leading-relaxed mb-4 font-sans line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-forest-muted text-xs font-sans">
                      via {post.source}
                    </span>
                    <a
                      href={post.slug}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold hover:text-gold-light text-sm font-sans transition-colors duration-200 flex items-center gap-1"
                    >
                      Read more <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function BlogPage() {
  return (
    <main>
      <BlogHero />
      <BlogGrid />
      <FinalCTA />
    </main>
  );
}
