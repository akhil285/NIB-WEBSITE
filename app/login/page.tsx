"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    if (!email || !password) return;
    setError("");
    setLoading(true);

    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      setError("Invalid email or password. Please try again.");
      setLoading(false);
      return;
    }

    window.location.href = "https://nib-buddha.com";
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSignIn();
  };

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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleKeyDown}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="••••••••"
                className="w-full border border-[#d4cfc0] rounded-lg px-4 py-3 text-sm font-sans text-[#1a1a1a] outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors duration-200"
              />
            </div>

            {/* Error */}
            {error && (
              <p className="text-red-500 text-sm font-sans">{error}</p>
            )}

            {/* Submit */}
            <div
              onClick={!loading ? handleSignIn : undefined}
              className={`w-full text-center py-3 rounded-full font-semibold text-sm font-sans transition-all duration-200 select-none
                ${loading
                  ? "bg-gold/50 text-forest-dark cursor-not-allowed"
                  : "bg-gold hover:bg-[#b8894e] text-forest-dark cursor-pointer"
                }`}
            >
              {loading ? "Signing in..." : "Sign In"}
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
