import Link from "next/link";
import Image from "next/image";

const CALENDLY = "https://calendly.com/akhil-nib-consulting/30min";

const navLinks = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing",  href: "/services#pricing" },
  { label: "Blog",     href: "/blog" },
  { label: "Contact",  href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-forest-dark">
      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

          {/* Left — logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <Image
              src="/logo-dark-removebg-preview.png"
              alt="NIB Consulting"
              width={110}
              height={34}
              className="object-contain opacity-90"
            />
            <p className="text-cream/50 text-sm font-sans text-center md:text-left max-w-xs">
              Done-for-you AI client management for appointment-based businesses.
            </p>
          </div>

          {/* Center — nav links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-cream/50 hover:text-cream text-sm font-sans transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right — CTA + email */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold hover:bg-gold-light text-forest-dark font-semibold text-sm px-6 py-2.5 rounded-full transition-colors duration-200 font-sans"
            >
              Book a Call
            </a>
            <a
              href="mailto:akhil@nib-consulting.com"
              className="text-cream/40 hover:text-cream/70 text-xs font-sans transition-colors duration-200"
            >
              akhil@nib-consulting.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-forest-muted text-xs font-sans text-center">
            © 2026 NIB Consulting. All rights reserved.
          </p>
          <div className="flex gap-4 text-forest-muted text-xs font-sans">
            <Link href="#" className="hover:text-cream/50 transition-colors duration-200">Privacy Policy</Link>
            <Link href="#" className="hover:text-cream/50 transition-colors duration-200">Terms of Service</Link>
            <Link href="/sms-opt-in" className="hover:text-cream/50 transition-colors duration-200">SMS Opt-In</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
