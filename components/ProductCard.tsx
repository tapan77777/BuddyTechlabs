import Link from "next/link";

type Status = "Live" | "Coming Soon" | "In Development";

interface ProductCardProps {
  name: string;
  description: string;
  status: Status;
  href?: string;
  icon: React.ReactNode;
  accent: string;
}

const statusConfig: Record<Status, { label: string; classes: string; dot: string }> = {
  Live: {
    label: "Live",
    classes: "bg-emerald-50 text-emerald-700 border-emerald-200",
    dot: "bg-emerald-500",
  },
  "Coming Soon": {
    label: "Coming Soon",
    classes: "bg-amber-50 text-amber-700 border-amber-200",
    dot: "bg-amber-500",
  },
  "In Development": {
    label: "In Development",
    classes: "bg-blue-50 text-blue-700 border-blue-200",
    dot: "bg-blue-500",
  },
};

export default function ProductCard({
  name,
  description,
  status,
  href,
  icon,
  accent,
}: ProductCardProps) {
  const badge = statusConfig[status];
  const isLive = status === "Live" && href;

  const cardContent = (
    <div className="card-hover group relative bg-white rounded-2xl border border-neutral-200 p-7 flex flex-col gap-6 h-full cursor-default">
      {/* Subtle top accent line */}
      <div
        className="absolute top-0 left-8 right-8 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: accent }}
      />

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: `${accent}15` }}
      >
        <div style={{ color: accent }}>{icon}</div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3
            className="text-[18px] font-semibold text-[#171717] leading-snug"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            {name}
          </h3>
          <span
            className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full border flex-shrink-0 ${badge.classes}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} />
            {badge.label}
          </span>
        </div>
        <p className="text-[14px] text-neutral-500 leading-relaxed">{description}</p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-neutral-100">
        {isLive ? (
          <span className="text-[13px] font-medium text-primary-600 flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200">
            Visit product
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        ) : (
          <span className="text-[13px] text-neutral-400 font-medium">
            {status === "Coming Soon" ? "Notify me" : "In progress"}
          </span>
        )}
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200"
          style={{ background: `${accent}12` }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke={accent}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
        </div>
      </div>
    </div>
  );

  if (isLive) {
    return (
      <Link href={href!} target="_blank" rel="noopener noreferrer" className="block h-full">
        {cardContent}
      </Link>
    );
  }

  return <div className="h-full">{cardContent}</div>;
}
