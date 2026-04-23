"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const TAPAN_PHOTO = "/ChatGPT Image Apr 22, 2026, 04_38_13 PM.png";

const PAGE_BG = "#fafaf8";

const roles = [
  "AI Builder.",
  "Full-stack Developer.",
  "Indie Founder.",
  "Entrepreneur.",
  "Traveller & Explorer.",
  "Content Creator.",
  "Freelancer.",
];

const whatIDo = [
  { emoji: "🤖", title: "AI Expert", desc: "I use Claude & LLMs daily to ship 10x faster" },
  { emoji: "💻", title: "Developer", desc: "Full-stack Next.js, Supabase, TypeScript" },
  { emoji: "🚀", title: "Founder", desc: "InsightFlow + MenuBuddy under BuddyTech Labs" },
  { emoji: "🎬", title: "Creator", desc: "Reels, YouTube, Remotion programmatic video" },
  { emoji: "✈️", title: "Traveller", desc: "Documenting India, budget guides, honest reviews" },
  { emoji: "🎯", title: "Freelancer", desc: "Available for dev, AI integration, content work" },
];

const skillsBase = [
  "Next.js", "TypeScript", "Supabase", "pgvector", "Clerk", "BullMQ",
  "OpenAI API", "Anthropic / Claude", "RAG Pipelines", "Tailwind",
  "Drizzle ORM", "Redis", "Vercel", "Remotion", "SEO", "Prompt Engineering",
];
const tickerItems = [...skillsBase, ...skillsBase];

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );
}

export default function TapanPageClient() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [roleVisible, setRoleVisible] = useState(true);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleVisible(false);
      setTimeout(() => {
        setRoleIdx((i) => (i + 1) % roles.length);
        setRoleVisible(true);
      }, 350);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileNavOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileNavOpen]);

  const currentRole = roles[roleIdx];
  const outlineRole = roles[(roleIdx + 1) % roles.length];

  const fade: React.CSSProperties = {
    opacity: roleVisible ? 1 : 0,
    transition: "opacity 0.35s ease",
  };

  const giant: React.CSSProperties = {
    fontFamily: "var(--font-syne)",
    fontWeight: 900,
    lineHeight: 0.9,
    letterSpacing: "-0.02em",
    textTransform: "uppercase" as const,
  };

  return (
    <div
      className="min-h-screen text-[#0a0a0a]"
      style={{ background: PAGE_BG, fontFamily: "var(--font-dm-sans)" }}
    >
      {/* ═══ NAV ═══ */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-black/[0.06]"
        style={{ background: `${PAGE_BG}e6` }}
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <Link
            href="/tapan"
            className="text-xl font-extrabold tracking-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            tapan<span className="text-[#FFB800]">.</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {(
              [
                ["Work", "#work"],
                ["Skills", "#skills"],
                ["Contact", "#contact"],
              ] as [string, string][]
            ).map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-neutral-500 hover:text-[#0a0a0a] transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:hello@buddytechlabs.com"
              className="hidden md:inline-flex items-center text-xs font-semibold border border-[#0a0a0a] px-4 py-2 rounded-full hover:bg-[#0a0a0a] hover:text-white transition-colors"
            >
              hello@buddytechlabs.com
            </a>
            <button
              onClick={() => setMobileNavOpen(true)}
              className="md:hidden p-2 -mr-1 rounded-lg hover:bg-neutral-100 transition-colors"
              aria-label="Open menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen nav */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-[60] bg-[#0a0a0a] flex flex-col p-8">
          <div className="flex items-center justify-between mb-14">
            <span
              className="text-xl font-extrabold text-white tracking-tight"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              tapan<span className="text-[#FFB800]">.</span>
            </span>
            <button
              onClick={() => setMobileNavOpen(false)}
              className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col gap-8">
            {(
              [
                ["Work", "#work"],
                ["Skills", "#skills"],
                ["Contact", "#contact"],
              ] as [string, string][]
            ).map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileNavOpen(false)}
                className="text-5xl font-extrabold text-white hover:text-[#FFB800] transition-colors"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="mt-auto pt-10">
            <a href="mailto:hello@buddytechlabs.com" className="text-sm text-neutral-500">
              hello@buddytechlabs.com
            </a>
          </div>
        </div>
      )}

      {/* ═══ HERO ═══ */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          overflow: "hidden",
          padding: "100px 40px 40px",
          background: PAGE_BG,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Photo — between solid text and outlined text */}
        <Image
          src={TAPAN_PHOTO}
          alt="Tapan — Founder, BuddyTech Labs"
          width={640}
          height={800}
          priority
          className="tapan-hero-photo"
          sizes="(max-width: 768px) 45vw, (max-width: 1024px) 28vw, 380px"
          style={{
            position: "absolute",
            right: "2%",
            top: "50%",
            transform: "translateY(-45%)",
            width: "clamp(220px, 28vw, 380px)",
            height: "auto",
            objectFit: "contain",
            mixBlendMode: "multiply",
            filter: "grayscale(100%) contrast(1.15)",
            zIndex: 5,
            pointerEvents: "none",
          }}
        />

        {/* Content container */}
        <div
          style={{ maxWidth: 1200, margin: "0 auto", width: "100%", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", position: "relative" }}
        >
          {/* Intro line */}
          <p
            className="tapan-hero-intro"
            style={{
              fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
              fontStyle: "italic",
              color: "#a3a3a3",
              marginBottom: 16,
              position: "relative",
              zIndex: 1,
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            👋 my name is Tapan, and I am a
          </p>

          {/* Solid role text */}
          <div
            className="tapan-hero-solid"
            style={{
              ...giant,
              fontSize: "clamp(3.5rem, 6vw, 7rem)",
              color: "#0a0a0a",
              position: "relative",
              zIndex: 10,
              maxWidth: "75%",
              ...fade,
            }}
          >
            {currentRole}
          </div>

          {/* Outlined role text — masks photo body */}
          <div
            className="tapan-hero-outline"
            style={{
              ...giant,
              fontSize: "clamp(3rem, 5.5vw, 6rem)",
              WebkitTextStroke: "2px #0a0a0a",
              color: "transparent",
              marginTop: "-0.05em",
              position: "relative",
              zIndex: 15,
              backgroundColor: PAGE_BG,
              maxWidth: "100%",
              overflow: "hidden",
              ...fade,
            }}
          >
            {outlineRole}
          </div>

          {/* Scroll indicator */}
          <div
            className="flex items-center gap-3 mt-8"
            style={{ position: "relative", zIndex: 20 }}
          >
            <div
              className="flex items-center justify-center flex-shrink-0 hover:bg-[#FFB800] hover:border-[#FFB800] transition-colors cursor-default select-none"
              style={{ width: 36, height: 36, borderRadius: "50%", border: "2px solid #0a0a0a" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                color: "#a3a3a3",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
              }}
            >
              Scroll to explore
            </span>
          </div>
        </div>

        {/* Bottom bar — location + CTAs */}
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            width: "100%",
            position: "relative",
            zIndex: 20,
            paddingTop: 20,
            borderTop: "1px solid rgba(0,0,0,0.1)",
            marginTop: 32,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <p style={{ fontSize: 14, fontWeight: 500, color: "#737373" }}>
            📍 Based in India 🇮🇳
          </p>
          <div className="flex items-center gap-3">
            <a
              href="mailto:hello@buddytechlabs.com"
              className="hover:bg-[#e6a600] transition-colors"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#FFB800",
                color: "#0a0a0a",
                fontWeight: 600,
                fontSize: 14,
                padding: "12px 28px",
                borderRadius: 50,
                whiteSpace: "nowrap",
                textDecoration: "none",
              }}
            >
              Hire me →
            </a>
            <a
              href="#work"
              className="hover:bg-[#0a0a0a] hover:text-white transition-colors"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                border: "2px solid #0a0a0a",
                color: "#0a0a0a",
                fontWeight: 600,
                fontSize: 14,
                padding: "12px 28px",
                borderRadius: 50,
                whiteSpace: "nowrap",
                textDecoration: "none",
              }}
            >
              See my work →
            </a>
          </div>
        </div>
      </section>

      {/* ═══ WHAT I DO ═══ */}
      <section id="work" className="py-20 sm:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            What I Do
          </h2>
          <p className="text-neutral-400 mb-10 sm:mb-14 text-[15px]">
            Wearing many hats — building across code, content &amp; commerce.
          </p>
          <div className="flex gap-4 overflow-x-auto pb-3 sm:pb-0 sm:grid sm:grid-cols-3 snap-x snap-mandatory sm:snap-none [-webkit-overflow-scrolling:touch]">
            {whatIDo.map((item) => (
              <div
                key={item.title}
                className="flex-shrink-0 w-64 sm:w-auto snap-start rounded-2xl p-6 border border-neutral-200 hover:border-[#FFB800] hover:shadow-md transition-all duration-200 group"
                style={{ background: PAGE_BG }}
              >
                <span className="text-3xl block mb-4">{item.emoji}</span>
                <h3
                  className="text-lg font-extrabold mb-1.5"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRODUCTS ═══ */}
      <section className="py-20 sm:py-28" style={{ background: PAGE_BG }}>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Products
          </h2>
          <p className="text-neutral-400 mb-10 sm:mb-14 text-[15px]">
            Two live products — both built and shipped solo.
          </p>
          <div className="flex flex-col gap-5">
            {/* InsightFlow */}
            <div className="group bg-white rounded-2xl p-7 sm:p-10 border-2 border-neutral-200 hover:border-[#FFB800] transition-all duration-200">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                <div>
                  <span
                    className="text-6xl sm:text-7xl font-extrabold text-neutral-100 block leading-none"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    01
                  </span>
                  <h3
                    className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    InsightFlow
                  </h3>
                  <p className="text-neutral-500 mt-2 text-[15px]">
                    AI feedback tool built for product managers.
                  </p>
                </div>
                <span className="self-start text-xs font-bold bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full whitespace-nowrap">
                  Active GTM
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "Supabase", "pgvector", "Clerk", "BullMQ"].map((t) => (
                  <span key={t} className="text-xs font-semibold bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* MenuBuddy */}
            <div className="group bg-white rounded-2xl p-7 sm:p-10 border-2 border-neutral-200 hover:border-[#FFB800] transition-all duration-200">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                <div>
                  <span
                    className="text-6xl sm:text-7xl font-extrabold text-neutral-100 block leading-none"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    02
                  </span>
                  <h3
                    className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    MenuBuddy
                  </h3>
                  <p className="text-neutral-500 mt-2 text-[15px]">
                    QR digital menu platform for restaurants.
                  </p>
                </div>
                <span className="self-start text-xs font-bold bg-green-50 text-green-600 px-3 py-1.5 rounded-full whitespace-nowrap">
                  Live · Revenue
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Next.js", "Supabase", "TypeScript", "Tailwind"].map((t) => (
                  <span key={t} className="text-xs font-semibold bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href="https://menubuddy.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0a0a0a] group-hover:text-[#FFB800] transition-colors"
              >
                Visit menubuddy.co.in <ArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SKILLS ═══ */}
      <section id="skills" className="py-20 sm:py-28 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 mb-10 sm:mb-14">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Stack &amp; Skills
          </h2>
          <p className="text-neutral-400 text-[15px]">The tools I reach for every day.</p>
        </div>

        {/* Marquee ticker */}
        <div className="w-full overflow-hidden border-y border-neutral-100 py-5" style={{ background: PAGE_BG }}>
          <div className="tapan-marquee flex w-max">
            {tickerItems.map((skill, i) => (
              <span
                key={`${skill}-${i}`}
                className="text-sm font-bold text-neutral-600 whitespace-nowrap flex items-center"
                style={{ paddingRight: "2.5rem" }}
              >
                {skill}
                <span className="text-[#FFB800] ml-10 text-base font-extrabold">·</span>
              </span>
            ))}
          </div>
        </div>

        {/* Stat boxes */}
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 mt-14">
          <div className="grid grid-cols-3 gap-6 sm:gap-12 max-w-lg">
            {[
              { value: "3+", label: "Years Building" },
              { value: "2", label: "Live Products" },
              { value: "100%", label: "Solo" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  className="text-4xl sm:text-6xl font-extrabold leading-none text-[#0a0a0a]"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {s.value}
                </div>
                <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mt-2">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section id="contact" className="py-20 sm:py-32" style={{ background: PAGE_BG }}>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 text-center">
          <h2
            className="text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Let&apos;s work together.
          </h2>
          <p className="text-neutral-400 mb-12 text-[15px]">
            Developer · Freelancer · Founder · Always building
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://twitter.com/tapan_ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border-2 border-[#0a0a0a] text-[#0a0a0a] font-bold px-7 py-4 rounded-full hover:bg-[#0a0a0a] hover:text-white transition-colors duration-200 text-[15px]"
            >
              <TwitterIcon /> @tapan_ai
            </a>
            <a
              href="https://www.linkedin.com/in/tapan-naik/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border-2 border-[#0a0a0a] text-[#0a0a0a] font-bold px-7 py-4 rounded-full hover:bg-[#0a0a0a] hover:text-white transition-colors duration-200 text-[15px]"
            >
              <LinkedInIcon /> LinkedIn
            </a>
            <a
              href="mailto:hello@buddytechlabs.com"
              className="inline-flex items-center justify-center gap-3 bg-[#FFB800] text-[#0a0a0a] font-bold px-7 py-4 rounded-full hover:bg-[#e6a600] transition-colors duration-200 text-[15px]"
            >
              <MailIcon /> hello@buddytechlabs.com
            </a>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="py-6 bg-white border-t border-neutral-100">
        <p className="text-center text-xs text-neutral-400 font-medium tracking-wide">
          tapan. · BuddyTech Labs · Rourkela, India · 2026
        </p>
      </footer>
    </div>
  );
}
