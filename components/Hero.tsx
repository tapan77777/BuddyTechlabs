export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#fafafa]">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(#171717 1px, transparent 1px), linear-gradient(90deg, #171717 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Gradient blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #3d4eff 0%, transparent 70%)" }}
      />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, #a78bfa 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
        {/* Pill badge */}
        <div className="animate-fade-slide-up inline-flex items-center gap-2 bg-white border border-neutral-200 rounded-full px-4 py-1.5 mb-8 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[12px] font-medium text-neutral-500 tracking-wide uppercase">
            Building since 2024
          </span>
        </div>

        {/* Heading */}
        <h1
          className="animate-fade-slide-up delay-100 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-[#171717] mb-6"
          style={{ fontFamily: "var(--font-sora)" }}
        >
          Building SaaS products
          <br />
          <span className="gradient-text">that matter.</span>
        </h1>

        {/* Subheading */}
        <p className="animate-fade-slide-up delay-200 text-lg sm:text-xl text-neutral-500 leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
          We identify real-world problems and build simple, scalable solutions
          that help businesses grow — fast.
        </p>

        {/* CTAs */}
        <div className="animate-fade-slide-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#products"
            className="inline-flex items-center gap-2 bg-primary-600 text-white text-[15px] font-semibold px-7 py-3.5 rounded-full hover:bg-primary-700 transition-all duration-200 shadow-lg shadow-primary-600/20 hover:shadow-primary-600/30 hover:-translate-y-0.5"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            Explore Products
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 bg-white text-[#171717] text-[15px] font-medium px-7 py-3.5 rounded-full border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 transition-all duration-200"
          >
            Our Mission
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in delay-600 mt-24 flex flex-col items-center gap-2">
          <span className="text-[11px] font-medium text-neutral-400 tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-neutral-300 to-transparent" />
        </div>
      </div>
    </section>
  );
}
