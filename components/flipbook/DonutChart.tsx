type Segment = { label: string; value: number; stroke: string; bg: string };

export default function DonutChart({
  segments,
  centerLabel
}: {
  segments: Segment[];
  centerLabel: string;
}) {
  const total = segments.reduce((sum, s) => sum + s.value, 0);
  const r = 45;
  const circumference = 2 * Math.PI * r;

  const arcs = segments.map((s, i) => {
    const before = segments.slice(0, i).reduce((sum, x) => sum + x.value, 0);
    const fraction = s.value / total;
    const dash = fraction * circumference;
    const gap = circumference - dash;
    const rotation = before / total * 360 - 90;
    return { ...s, dash, gap, rotation };
  });

  return (
    <div className="flex items-center gap-5 @sm:gap-8">
      <svg
        viewBox="0 0 120 120"
        className="w-28 h-28 @sm:w-32 @sm:h-32 shrink-0"
      >
        <circle
          cx="60"
          cy="60"
          r={r}
          fill="none"
          className="stroke-charcoal/8"
          strokeWidth="14"
        />
        {arcs.map((s, i) =>
          <circle
            key={i}
            cx="60"
            cy="60"
            r={r}
            fill="none"
            className={s.stroke}
            strokeWidth="14"
            strokeDasharray={`${s.dash} ${s.gap}`}
            transform={`rotate(${s.rotation} 60 60)`}
          />
        )}
        <text
          x="60"
          y="56"
          textAnchor="middle"
          className="font-display fill-charcoal"
          fontSize="18"
        >
          {total.toFixed(1)}
        </text>
        <text
          x="60"
          y="72"
          textAnchor="middle"
          className="font-body fill-charcoal/50"
          fontSize="9"
        >
          {centerLabel}
        </text>
      </svg>
      <div className="space-y-2">
        {segments.map((s, i) =>
          <div key={i} className="flex items-start gap-2">
            <span
              className={`w-2.5 h-2.5 rounded-full ${s.bg} mt-1 shrink-0`}
            />
            <p className="font-body text-xs @sm:text-sm text-charcoal/80">
              <span className="font-display text-charcoal">{s.value}</span> juta
              MMSCF — {s.label}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
