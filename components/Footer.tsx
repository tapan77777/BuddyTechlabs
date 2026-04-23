const currentYear = new Date().getFullYear();

const footerLinks = [
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Vision", href: "#vision" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-100 py-10 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo + copyright */}
        <div className="flex items-center gap-3">
          <img src="/icon-96.svg" width={28} height={28} alt="BuddyTech Labs" className="flex-shrink-0" />
          <span className="text-[13px] text-neutral-400">
            &copy; {currentYear}{" "}
            <span className="text-neutral-600 font-medium">BuddyTech Labs</span>.
            All rights reserved.
          </span>
        </div>

        {/* Nav links */}
        <nav className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-neutral-400 hover:text-neutral-700 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <span className="text-[12px] text-neutral-400">Made with</span>
          <span className="text-[12px] text-neutral-500 font-medium">Next.js &amp; ☕</span>
        </div>
      </div>
    </footer>
  );
}
