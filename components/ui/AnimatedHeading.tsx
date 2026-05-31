"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { staggerContainer, wordReveal } from "@/lib/animations";

type HeadingTag = "h1" | "h2" | "h3";

interface AnimatedHeadingProps {
  children: string;
  as?: HeadingTag;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export default function AnimatedHeading({
  children,
  as: Tag = "h2",
  className,
  delay = 0,
  staggerDelay = 0.08,
}: AnimatedHeadingProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const words = children.split(" ");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const HeadingEl = Tag as React.ElementType;

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <HeadingEl className={className}>
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={wordReveal}
            className="inline-block mr-[0.25em] last:mr-0"
          >
            {word}
          </motion.span>
        ))}
      </HeadingEl>
    </motion.div>
  );
}
