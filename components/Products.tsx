import ProductCard from "./ProductCard";

const products = [
  {
    name: "MenuBuddy",
    description:
      "QR-based digital menu & ordering platform for restaurants. Reduce wait times, eliminate printing costs, and delight guests with a seamless experience.",
    status: "Live" as const,
    href: "https://menubuddy.example.com",
    accent: "#10b981",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <path d="M9 12h6M9 16h4" />
      </svg>
    ),
  },
  {
    name: "InsightFlow",
    description:
      "Analytics and insights platform for businesses. Turn raw data into clear, actionable decisions without needing a data science team.",
    status: "Coming Soon" as const,
    accent: "#f59e0b",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    name: "OffGrid",
    description:
      "Offline-first, privacy-focused productivity tool. Work without internet dependency — your data stays yours, always accessible.",
    status: "In Development" as const,
    accent: "#3d4eff",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 px-6 sm:px-8 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="max-w-xl mb-14">
          <span className="inline-block text-[12px] font-semibold text-primary-600 tracking-widest uppercase mb-4">
            Our Products
          </span>
          <h2
            className="text-[36px] sm:text-[42px] font-bold text-[#171717] leading-tight tracking-tight mb-4"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            Tools built for the
            <br />
            real world.
          </h2>
          <p className="text-[16px] text-neutral-500 leading-relaxed">
            Each product is born from a genuine frustration. We build, ship, and
            iterate until it genuinely helps people.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>

        {/* Bottom hint */}
        <p className="mt-8 text-center text-[13px] text-neutral-400">
          More products in the pipeline.{" "}
          <a href="#about" className="text-neutral-600 hover:text-[#171717] underline underline-offset-2 transition-colors">
            Learn about our process
          </a>
        </p>
      </div>
    </section>
  );
}
