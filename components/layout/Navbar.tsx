"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const CALENDLY = "https://calendly.com/akhil-nib-consulting/30min";

const navLinks = [
  { label: "Home",       href: "/" },
  { label: "About",      href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Services",   href: "/services" },
  { label: "Blog",       href: "/blog" },
  { label: "Contact",    href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-400",
        scrolled
          ? "bg-forest-dark/95 backdrop-blur-md border-b border-gold/10 shadow-xl"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo + Login */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center shrink-0" aria-label="NIB Consulting home">
              <Image
                src={scrolled ? "/logo-dark-removebg-preview.png" : "/logo-light-removebg-preview.png"}
                alt="NIB Consulting"
                width={120}
                height={36}
                className="object-contain"
                priority
                onError={() => {}}
              />
            </Link>
            <Link
              href="/login"
              className={cn(
                "hidden md:inline-block text-sm font-sans px-4 py-1.5 rounded-full border transition-all duration-200",
                scrolled
                  ? "border-cream/40 text-cream/70 hover:border-cream hover:text-cream"
                  : "border-forest/40 text-forest/70 hover:border-forest hover:text-forest"
              )}
            >
              Login
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium font-sans transition-all duration-300 group",
                  scrolled ? "text-cream hover:text-gold" : "text-forest hover:text-gold"
                )}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold group-hover:w-full transition-all duration-300 ease-out" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold hover:bg-gold-light text-forest-dark font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-200 hover:scale-[1.03] font-sans"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile hamburger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <button className={cn("md:hidden p-2", scrolled ? "text-cream" : "text-forest")} aria-label="Open menu" />
              }
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-forest-dark border-gold/10 w-full max-w-none flex flex-col"
              style={{ width: '100%', maxWidth: '100%' }}
            >
              <div className="flex flex-col pt-8 flex-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-cream/75 hover:text-gold text-lg font-medium font-sans transition-colors duration-200 text-center py-4 px-8"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="text-cream/75 hover:text-gold text-lg font-medium font-sans transition-colors duration-200 text-center py-4 px-8"
                >
                  Login
                </Link>
              </div>
              <div className="pb-8 mx-6">
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-gold hover:bg-gold-light text-forest-dark font-semibold py-3.5 rounded-full transition-colors duration-200 font-sans"
                  onClick={() => setOpen(false)}
                >
                  Book a Call
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
