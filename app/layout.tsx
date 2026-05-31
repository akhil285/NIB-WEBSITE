import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import Providers from "./providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NIB Consulting: AI Client Management for Salons",
  description:
    "NIB Consulting builds done-for-you AI systems that help salons capture more leads, reduce no-shows, reactivate past clients, and fill their calendar automatically.",
  metadataBase: new URL("https://nib-consulting.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "NIB Consulting: AI Client Management for Salons",
    description:
      "Done-for-you AI systems that help salons capture more leads, reduce no-shows, reactivate past clients, and fill their calendar automatically.",
    type: "website",
    url: "https://nib-consulting.com",
    siteName: "NIB Consulting",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "NIB Consulting" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NIB Consulting: AI Client Management for Salons",
    description: "Done-for-you AI systems for appointment-based businesses. Capture leads, reduce no-shows, fill your calendar.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [{ url: "/logo.icon.round-removebg.png", type: "image/png" }],
    shortcut: "/logo.icon.round-removebg.png",
    apple: "/logo.icon.round-removebg.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSerifDisplay.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <Providers>
          <CustomCursor />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
