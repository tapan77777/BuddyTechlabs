import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BuddyTech Labs — Building SaaS Products That Solve Real Problems",
  description:
    "BuddyTech Labs builds simple, scalable SaaS solutions that help businesses grow. We identify real-world problems and ship products that work.",
  keywords: [
    "BuddyTech Labs",
    "SaaS",
    "software products",
    "MenuBuddy",
    "InsightFlow",
    "OffGrid",
    "startup",
  ],
  openGraph: {
    title: "BuddyTech Labs — Building SaaS Products That Solve Real Problems",
    description:
      "We identify real-world problems and build simple, scalable SaaS solutions that help businesses grow.",
    type: "website",
    locale: "en_US",
    siteName: "BuddyTech Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuddyTech Labs",
    description: "Building SaaS products that solve real-world problems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable}`}>
      <body className="min-h-screen bg-[#fafafa] text-[#171717]">
        {children}
      </body>
    </html>
  );
}
