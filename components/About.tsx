const stats = [
  { value: "3", label: "Products launched or in progress" },
  { value: "100%", label: "Bootstrapped & independent" },
  { value: "∞", label: "Problems left to solve" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 sm:px-8 bg-white border-y border-neutral-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <span className="inline-block text-[12px] font-semibold text-primary-600 tracking-widest uppercase mb-4">
              About Us
            </span>
            <h2
              className="text-[36px] sm:text-[42px] font-bold text-[#171717] leading-tight tracking-tight mb-6"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              We build what
              <br />
              we wished existed.
            </h2>
            <div className="space-y-4 text-[16px] text-neutral-500 leading-relaxed">
              <p>
                BuddyTech Labs is a product studio focused on building focused,
                high-quality SaaS tools for everyday business problems. We don&apos;t
                build for the sake of building.
              </p>
              <p>
                Every product starts with a question:{" "}
                <em className="text-neutral-700 not-italic font-medium">
                  &ldquo;Why is this still painful?&rdquo;
                </em>{" "}
                Then we work backwards from the simplest possible solution.
              </p>
              <p>
                Our mission is to identify real-world problems and build simple,
                scalable SaaS solutions that help businesses grow — without the
                complexity, bloat, or enterprise pricing.
              </p>
            </div>
          </div>

          {/* Right: Stats + visual */}
          <div className="flex flex-col gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex items-center gap-5 bg-[#fafafa] rounded-xl p-6 border border-neutral-100"
              >
                <div
                  className="text-[32px] font-bold text-primary-600 leading-none flex-shrink-0 w-20"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  {stat.value}
                </div>
                <div className="w-px h-8 bg-neutral-200 flex-shrink-0" />
                <p className="text-[14px] text-neutral-500 leading-snug">{stat.label}</p>
              </div>
            ))}

            {/* Ethos card */}
            <div className="mt-2 rounded-xl p-6 border border-neutral-200 bg-white relative overflow-hidden">
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: "linear-gradient(90deg, #3d4eff, #a78bfa, #3d4eff)" }}
              />
              <p
                className="text-[15px] font-medium text-[#171717] leading-snug"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                &ldquo;Ship early, listen carefully, improve constantly.&rdquo;
              </p>
              <p className="mt-2 text-[13px] text-neutral-400">— Our product philosophy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
