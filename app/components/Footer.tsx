import Image from "next/image";

const CALENDLY = "https://calendly.com";

export default function Footer() {
  return (
    <footer className="bg-[#1F3D2B] border-t border-white/8 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" aria-label="NIB Consulting Group home">
            <Image
              src="/logo-light.png"
              alt="NIB Consulting Group"
              width={110}
              height={32}
              className="object-contain mix-blend-multiply"
            />
          </a>

          <p className="text-[#F5F2E8]/40 text-xs text-center">
            © 2026 NIB Consulting Group. All rights reserved.
          </p>

          <div className="flex gap-5 text-[#F5F2E8]/50 text-xs">
            <a href="#" className="hover:text-[#F5F2E8] transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#F5F2E8] transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
