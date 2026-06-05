import Image from "next/image";

const currentYear = new Date().getFullYear();

const footerLinks = [
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Vision", href: "#vision" },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0a0a0f] border-t border-neutral-100 dark:border-white/[0.06] py-10 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo + copyright */}
        <div className="flex items-center gap-3">
          <Image src="/icon-96.svg" alt="BuddyTech Labs" width={28} height={28} className="rounded-lg flex-shrink-0" />
          <span className="text-[13px] text-neutral-400 dark:text-neutral-500">
            &copy; {currentYear}{" "}
            <span className="text-neutral-600 dark:text-neutral-300 font-medium">BuddyTech Labs</span>.
            All rights reserved.
          </span>
        </div>

        {/* Nav links */}
        <nav className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-neutral-400 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-200 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <span className="text-[12px] text-neutral-400 dark:text-neutral-500">Made with</span>
          <span className="text-[12px] text-neutral-500 dark:text-neutral-400 font-medium">Next.js &amp; ☕</span>
        </div>
      </div>
    </footer>
  );
}
