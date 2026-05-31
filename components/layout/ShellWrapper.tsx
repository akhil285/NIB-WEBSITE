"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const BARE_ROUTES = ["/login", "/buddha"];

export default function ShellWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const bare = BARE_ROUTES.some((r) => pathname.startsWith(r));

  return (
    <>
      {!bare && <Navbar />}
      {children}
      {!bare && <Footer />}
    </>
  );
}
