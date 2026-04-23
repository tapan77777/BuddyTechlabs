import Image from "next/image";
import Link from "next/link";

const TAPAN_PHOTO = "/ChatGPT Image Apr 22, 2026, 04_38_13 PM.png";

export default function MeetFounder() {
  return (
    <section className="py-20 px-6 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block text-[12px] font-semibold text-neutral-400 tracking-widest uppercase mb-5">
          The person behind it
        </span>
        <h2
          className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-[#171717] leading-tight tracking-tight mb-12"
          style={{ fontFamily: "var(--font-sora)" }}
        >
          
          <br />
         who cares deeply about what gets built.
        </h2>

        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-5">
          <Image
            src={TAPAN_PHOTO}
            alt="Tapan — Founder, BuddyTech Labs"
            width={60}
            height={60}
            className="rounded-lg"
            style={{
              width: 60,
              height: 60,
              objectFit: "cover",
              filter: "grayscale(100%)",
            }}
          />
          <div className="text-center sm:text-left">
            <p className="text-[16px] font-bold text-[#171717]">Tapan</p>
            <p className="text-[14px] text-neutral-400">Founder, BuddyTech Labs</p>
          </div>
          <div className="sm:ml-auto">
            <Link
              href="/tapan"
              className="inline-block text-[14px] font-semibold text-[#0a0a0a] hover:opacity-80 transition-opacity"
              style={{
                background: "#FFB800",
                padding: "10px 24px",
                borderRadius: 50,
              }}
            >
              View Portfolio →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
