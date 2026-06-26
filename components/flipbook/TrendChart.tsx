type DataPoint = { label: string; value: number };

const colorMap = {
  koral: { stroke: "stroke-koral", fill: "fill-koral" },
  amber: { stroke: "stroke-amber", fill: "fill-amber" },
  biru: { stroke: "stroke-biru", fill: "fill-biru" }
};

export default function TrendChart({
  data,
  unit = "%",
  color = "koral",
  source
}: {
  data: DataPoint[];
  unit?: string;
  color?: "koral" | "amber" | "biru";
  source: string;
}) {
  const max = Math.max(...data.map(d => d.value)) * 1.2;
  const w = 640;
  const h = 200;
  const pad = 28;
  const stepX = (w - pad * 2) / (data.length - 1);
  const points = data.map((d, i) => ({
    x: pad + i * stepX,
    y: h - pad - d.value / max * (h - pad * 2),
    ...d
  }));
  const pathD = points
    .map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`)
    .join(" ");
  const c = colorMap[color];

  return (
    <div>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto">
        <line
          x1={pad}
          y1={h - pad}
          x2={w - pad}
          y2={h - pad}
          className="stroke-charcoal/20"
          strokeWidth="1"
        />
        <path
          d={pathD}
          fill="none"
          className={c.stroke}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {points.map((p, i) =>
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="4" className={c.fill} />
            <text
              x={p.x}
              y={p.y - 10}
              textAnchor="middle"
              className="font-body fill-charcoal"
              fontSize="10"
            >
              {p.value}
              {unit}
            </text>
            <text
              x={p.x}
              y={h - pad + 16}
              textAnchor="middle"
              className="font-body fill-charcoal/50"
              fontSize="9"
            >
              {p.label}
            </text>
          </g>
        )}
      </svg>
      <p className="font-body text-[10px] @sm:text-xs text-charcoal/40 italic text-center mt-2">
        Sumber — {source}
      </p>
    </div>
  );
}
