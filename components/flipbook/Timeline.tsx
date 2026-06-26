type TimelineItem = { year: string; label: string };

const toneClasses = {
  koral: "bg-koral",
  amber: "bg-amber",
  navy: "bg-navy"
};

export default function Timeline({
  items,
  tone = "koral",
  span
}: {
  items: TimelineItem[];
  tone?: "koral" | "amber" | "navy";
  span?: string;
}) {
  const dotColor = toneClasses[tone];
  const first = items[0];
  const last = items[items.length - 1];

  return (
    <div className="relative px-2 pt-2">
      <div className="relative h-px bg-charcoal/15 mb-1">
        <span
          className={`absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full ${dotColor} border-2 border-cream`}
        />
        <span
          className={`absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full ${dotColor} border-2 border-cream`}
        />
        {span &&
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-cream px-2">
            <span className="font-body text-[10px] @sm:text-xs text-charcoal/40 italic whitespace-nowrap">
              {span}
            </span>
          </span>}
      </div>
      <div className="flex justify-between mt-3">
        <div className="max-w-[45%]">
          <p className="font-display text-sm @sm:text-base text-charcoal">
            {first.year}
          </p>
          <p className="font-body text-xs @sm:text-sm text-charcoal/60 mt-1">
            {first.label}
          </p>
        </div>
        <div className="max-w-[45%] text-right">
          <p className="font-display text-sm @sm:text-base text-charcoal">
            {last.year}
          </p>
          <p className="font-body text-xs @sm:text-sm text-charcoal/60 mt-1">
            {last.label}
          </p>
        </div>
      </div>
    </div>
  );
}
