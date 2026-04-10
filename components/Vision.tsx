const pillars = [
  {
    title: "Simple by design",
    description: "We strip away complexity until only the essential remains. If you need a manual, we failed.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12l3 3 5-5" />
      </svg>
    ),
  },
  {
    title: "Scalable from day one",
    description: "Our infrastructure decisions account for 1 user and 1 million. Growth shouldn't break things.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Relentlessly focused",
    description: "One problem per product, solved completely. We don't build feature factories.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
];

export default function Vision() {
  return (
    <section id="vision" className="py-24 px-6 sm:px-8 relative overflow-hidden bg-[#0e0f1a]">
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(61, 78, 255, 0.15) 0%, transparent 70%)",
        }}
      />

      {/* Corner glows */}
      <div className="absolute top-0 right-0 w-72 h-72 opacity-10"
        style={{ background: "radial-gradient(circle, #a78bfa 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 opacity-10"
        style={{ background: "radial-gradient(circle, #3d4eff 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[12px] font-semibold text-primary-400 tracking-widest uppercase mb-4">
            Our Vision
          </span>
          <h2
            className="text-[36px] sm:text-[48px] lg:text-[56px] font-bold text-white leading-tight tracking-tight mb-6"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            Building the digital
            <br />
            <span style={{
              background: "linear-gradient(135deg, #7c87ff 0%, #c4b5fd 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              infrastructure layer
            </span>
            <br />
            for modern businesses.
          </h2>
          <p className="text-[17px] text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            Every business deserves software that works — not software that requires
            a dedicated IT team to maintain. We&apos;re here to close that gap.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="relative rounded-2xl p-7 border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm group hover:bg-white/[0.07] hover:border-white/[0.12] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-600/20 flex items-center justify-center mb-5 text-primary-400 group-hover:bg-primary-600/30 transition-colors duration-300">
                {pillar.icon}
              </div>
              <h3
                className="text-[16px] font-semibold text-white mb-2 leading-snug"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                {pillar.title}
              </h3>
              <p className="text-[14px] text-neutral-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2 bg-white text-[#171717] text-[14px] font-semibold px-6 py-3 rounded-full hover:bg-neutral-100 transition-colors duration-200"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Explore our products
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <span className="text-[13px] text-neutral-500">
              More products shipping in 2025
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
