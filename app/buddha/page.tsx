"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Clock, MessageSquare, Calendar } from "lucide-react";
import { createClient } from "@/lib/supabase";

// Vercel environment variables required for production:
// NEXT_PUBLIC_SUPABASE_URL
// NEXT_PUBLIC_SUPABASE_ANON_KEY

const statusCards = [
  {
    Icon: Clock,
    title: "System Setup",
    status: "In Progress",
    description: "Your AI agents are being configured for your business.",
  },
  {
    Icon: MessageSquare,
    title: "SMS Integration",
    status: "Pending",
    description: "Twilio SMS connection will be activated during onboarding.",
  },
  {
    Icon: Calendar,
    title: "Booking Sync",
    status: "Pending",
    description: "Your Calendly integration will be connected during setup.",
  },
];

export default function BuddhaDashboard() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) setUserEmail(user.email ?? null);
    });
  }, []);

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-[#1e3828] flex flex-col">

      {/* Top bar */}
      <div className="bg-[#2e543d] h-16 flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-dark-removebg-preview.png"
            alt="NIB Consulting"
            width={80}
            height={24}
            className="object-contain"
            priority
          />
          <span
            className="text-gold text-xl ml-1"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            Buddha
          </span>
        </div>

        <div className="flex items-center gap-4">
          {userEmail && (
            <span className="text-cream/60 text-sm font-sans hidden sm:block">
              {userEmail}
            </span>
          )}
          <div
            onClick={handleSignOut}
            className="border border-gold text-gold text-sm font-sans px-4 py-1.5 rounded-full cursor-pointer hover:bg-gold/10 transition-colors duration-200 select-none"
          >
            Sign Out
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center py-16 px-6">

        <h1
          className="text-cream text-3xl text-center"
          style={{ fontFamily: "var(--font-dm-serif)" }}
        >
          Welcome to Buddha.
        </h1>
        <p className="text-cream/60 text-sm font-sans mt-3 text-center max-w-md leading-relaxed">
          Your AI client management dashboard is being set up.
          You&apos;ll be notified when your system is ready.
        </p>

        {/* Status cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12 w-full max-w-3xl">
          {statusCards.map(({ Icon, title, status, description }) => (
            <div
              key={title}
              className="bg-[#2e543d] rounded-xl p-6 border border-white/10"
            >
              <Icon size={22} className="text-gold mb-4" />
              <h3
                className="text-cream text-lg mb-1"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                {title}
              </h3>
              <p className="text-gold/70 text-sm font-sans mb-2">{status}</p>
              <p className="text-cream/50 text-sm font-sans leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Support note */}
        <p className="text-cream/30 text-xs font-sans mt-12 text-center">
          For support contact akhil@nib-consulting.com
        </p>
      </div>
    </div>
  );
}
