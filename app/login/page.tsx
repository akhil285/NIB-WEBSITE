"use client";

import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-[420px]">
        <div
          className="bg-white rounded-2xl p-10"
          style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.08)" }}
        >
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <Image
              src="/logo-light-removebg-preview.png"
              alt="NIB Consulting"
              width={100}
              height={30}
              className="object-contain"
              priority
            />
            <span className="mt-3 text-gold text-xs font-semibold uppercase tracking-[0.2em] font-sans">
              Buddha Dashboard
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-[#1a1a1a] text-2xl text-center mt-4"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            Welcome back
          </h1>
          <p className="text-[#4a4a4a] text-sm text-center mt-1 font-sans">
            Sign in to access your client dashboard
          </p>

          {/* Fields */}
          <div className="mt-8 space-y-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-[#1a1a1a] text-sm font-medium font-sans">
                Email address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-[#d4cfc0] rounded-lg px-4 py-3 text-sm font-sans text-[#1a1a1a] outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[#1a1a1a] text-sm font-medium font-sans">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full border border-[#d4cfc0] rounded-lg px-4 py-3 text-sm font-sans text-[#1a1a1a] outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors duration-200"
              />
            </div>

            {/* Submit */}
            <div
              onClick={() => { window.location.href = "https://nib-buddha.com"; }}
              className="w-full text-center py-3 rounded-full font-semibold text-sm font-sans transition-all duration-200 select-none bg-gold hover:bg-[#b8894e] text-forest-dark cursor-pointer"
            >
              Sign In
            </div>
          </div>
        </div>

        {/* Back link */}
        <div className="text-center mt-6">
          <Link
            href="/"
            className="text-[#4a4a4a] text-xs font-sans hover:text-[#1a1a1a] transition-colors duration-200"
          >
            ← Back to nib-consulting.com
          </Link>
        </div>
      </div>
    </div>
  );
}
