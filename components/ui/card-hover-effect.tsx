"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    icon?: React.ReactNode;
    link?: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-4", className)}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full cursor-default"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-[#F5F2E8] block rounded-2xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.1 } }}
              />
            )}
          </AnimatePresence>
          <ProblemCard>
            {item.icon && (
              <div className="mb-4 text-[#1F3D2B]">{item.icon}</div>
            )}
            <ProblemCardTitle>{item.title}</ProblemCardTitle>
            <ProblemCardDescription>{item.description}</ProblemCardDescription>
          </ProblemCard>
        </div>
      ))}
    </div>
  );
};

export const ProblemCard = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div
    className={cn(
      "rounded-2xl h-full w-full p-6 bg-white border border-[#1F3D2B]/8 shadow-sm relative z-20 transition-shadow duration-200 group-hover:shadow-md",
      className
    )}
  >
    {children}
  </div>
);

export const ProblemCardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <h4 className={cn("text-[#1F3D2B] font-bold text-lg mb-2", className)}>
    {children}
  </h4>
);

export const ProblemCardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <p className={cn("text-[#666666] text-sm leading-relaxed", className)}>
    {children}
  </p>
);
