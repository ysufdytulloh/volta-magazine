export default function RadialStat({
  percentage,
  label,
  color = "koral"
}: {
  percentage: number;
  label: string;
  color?: "koral" | "amber" | "biru";
}) {
  const colorClass = {
    koral: "stroke-koral",
    amber: "stroke-amber",
    biru: "stroke-biru"
  }[color];
  const r = 50;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - percentage / 100 * circumference;

  return (
    <div className="flex items-center gap-4 @sm:gap-6">
      <svg
        viewBox="0 0 120 120"
        className="w-20 h-20 @sm:w-24 @sm:h-24 shrink-0"
      >
        <circle
          cx="60"
          cy="60"
          r={r}
          fill="none"
          className="stroke-charcoal/10"
          strokeWidth="10"
        />
        <circle
          cx="60"
          cy="60"
          r={r}
          fill="none"
          className={colorClass}
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 60 60)"
        />
        <text
          x="60"
          y="67"
          textAnchor="middle"
          className="font-display fill-charcoal"
          fontSize="22"
        >
          {percentage}%
        </text>
      </svg>
      <p className="font-body text-xs @sm:text-sm text-charcoal/70 max-w-[180px]">
        {label}
      </p>
    </div>
  );
}
