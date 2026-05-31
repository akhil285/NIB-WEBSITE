"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const ringX = useSpring(mouseX, { stiffness: 140, damping: 18, mass: 0.4 });
  const ringY = useSpring(mouseY, { stiffness: 140, damping: 18, mass: 0.4 });

  useEffect(() => {
    setMounted(true);

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const el = e.target as Element;
      setIsHovering(
        !!el.closest('a, button, [role="button"], .card-hover, input, textarea, select')
      );
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
    };
  }, [mouseX, mouseY]);

  // Only show on devices with a fine pointer (desktop)
  if (!mounted) return null;

  return (
    <>
      {/* Dot — instant */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ x: mouseX, y: mouseY }}
      >
        <div
          className="rounded-full bg-gold transition-all duration-200"
          style={{
            width:   isHovering ? 0 : 8,
            height:  isHovering ? 0 : 8,
            opacity: isHovering ? 0 : 1,
          }}
        />
      </motion.div>

      {/* Ring — spring-delayed */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
        style={{ x: ringX, y: ringY }}
      >
        <div
          className="rounded-full border border-gold/30 transition-all duration-300"
          style={{
            width:           isHovering ? 48 : 32,
            height:          isHovering ? 48 : 32,
            borderColor:     isHovering ? "rgba(150,108,54,0.5)" : "rgba(150,108,54,0.3)",
            backgroundColor: isHovering ? "rgba(150,108,54,0.08)" : "transparent",
          }}
        />
      </motion.div>
    </>
  );
}
