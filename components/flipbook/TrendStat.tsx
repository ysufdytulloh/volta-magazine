import { TrendingDown, TrendingUp } from "lucide-react";

const toneClasses = {
  navy: { text: "text-navy", border: "border-navy" },
  amber: { text: "text-amber", border: "border-amber" },
  koral: { text: "text-koral", border: "border-koral" }
};

export default function TrendStat({
  direction,
  percentage,
  label,
  from,
  to,
  tone = "navy"
}: {
  direction: "down" | "up";
  percentage: string;
  label: string;
  from: string;
  to: string;
  tone?: "navy" | "amber" | "koral";
}) {
  const Icon = direction === "down" ? TrendingDown : TrendingUp;
  const { text, border } = toneClasses[tone];

  return (
    <div
      className={`rounded-xl border-l-4 ${border} bg-charcoal/[0.02] px-5 @sm:px-6 py-4 @sm:py-5`}
    >
      <div className="flex items-baseline gap-3">
        <Icon size={20} className={text} strokeWidth={2} />
        <p className={`font-display text-3xl @sm:text-4xl ${text}`}>
          {percentage}
        </p>
      </div>
      <p className="font-body text-xs @sm:text-sm text-charcoal/70 mt-2">
        {label}
      </p>
      <div className="flex items-center gap-2 mt-3 font-body text-[10px] @sm:text-xs text-charcoal/50">
        <span>
          {from}
        </span>
        <span>→</span>
        <span>
          {to}
        </span>
      </div>
    </div>
  );
}
