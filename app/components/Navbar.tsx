"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const CALENDLY = "https://calendly.com";

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Demo", href: "#demo" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-[#1F3D2B] transition-shadow duration-200 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" aria-label="NIB Consulting Group home" className="flex items-center">
            <Image
              src="/Logo-tagline.png"
              alt="NIB Consulting Group"
              width={1536}
              height={1024}
              style={{ height: "38px", width: "auto" }}
              className="object-contain"
              priority
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[#F5F2E8]/75 hover:text-[#F5F2E8] text-sm font-medium transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F5F2E8] hover:bg-white text-[#1F3D2B] text-sm font-semibold px-5 py-2 rounded-full transition-colors duration-200"
            >
              See It Working
            </a>
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-0.5 bg-[#F5F2E8]" />
            <span className="block w-5 h-0.5 bg-[#F5F2E8]" />
            <span className="block w-5 h-0.5 bg-[#F5F2E8]" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#1F3D2B] border-t border-white/10 px-4 pb-5 pt-3 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[#F5F2E8]/75 hover:text-[#F5F2E8] text-sm font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F5F2E8] text-[#1F3D2B] text-sm font-semibold px-5 py-2.5 rounded-full text-center"
          >
            See It Working
          </a>
        </div>
      )}
    </nav>
  );
}
