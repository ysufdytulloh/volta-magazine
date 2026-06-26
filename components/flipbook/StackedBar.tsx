type Segment = { label: string; percentage: number; bg: string };

export default function StackedBar({
  segments,
  total,
  totalLabel
}: {
  segments: Segment[];
  total: string;
  totalLabel: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <p className="font-body text-[10px] @sm:text-xs tracking-wide text-charcoal/50 uppercase">
          {totalLabel}
        </p>
        <p className="font-display text-xl @sm:text-2xl text-charcoal">
          {total}
        </p>
      </div>
      <div className="h-4 @sm:h-5 rounded-full overflow-hidden flex">
        {segments.map((s, i) =>
          <div key={i} className={s.bg} style={{ width: `${s.percentage}%` }} />
        )}
      </div>
      <div className="flex justify-between mt-2 gap-3 flex-wrap">
        {segments.map((s, i) =>
          <div key={i} className="flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${s.bg}`} />
            <span className="font-body text-[10px] @sm:text-xs text-charcoal/70">
              {s.label} — {s.percentage}%
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
