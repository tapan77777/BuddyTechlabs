import type { Metadata } from "next";
import TapanPageClient from "@/components/tapan/TapanPageClient";

export const metadata: Metadata = {
  title: "Tapan — AI Builder, Developer, Indie Founder",
  description:
    "Solo founder, AI builder, shipping real products. Building InsightFlow and MenuBuddy at BuddyTech Labs.",
};

export default function TapanPage() {
  return <TapanPageClient />;
}
