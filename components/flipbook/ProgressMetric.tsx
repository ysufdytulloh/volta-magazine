export default function ProgressMetric({
  label,
  value,
  percentage,
  caption,
  barColor = "bg-amber"
}: {
  label: string;
  value: string;
  percentage: number;
  caption: string;
  barColor?: string;
}) {
  return (
    <div className="rounded-xl border border-charcoal/10 px-4 @sm:px-5 py-4 @sm:py-5">
      <div className="flex items-baseline justify-between mb-2">
        <p className="font-body text-[10px] @sm:text-xs tracking-wide text-charcoal/50 uppercase">
          {label}
        </p>
        <p className="font-display text-lg @sm:text-xl text-charcoal">
          {value}
        </p>
      </div>
      <div className="h-2 @sm:h-2.5 rounded-full bg-charcoal/8 overflow-hidden">
        <div
          className={`h-full rounded-full ${barColor}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="font-body text-[10px] @sm:text-xs text-charcoal/40 mt-2">
        {caption}
      </p>
    </div>
  );
}
