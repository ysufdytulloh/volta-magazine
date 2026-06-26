export default function RankBadge({
  title,
  detail
}: {
  title: string;
  detail: string;
}) {
  return (
    <div className="rounded-xl border border-charcoal/10 px-5 @sm:px-8 py-6 @sm:py-8 text-center">
      <p className="font-body text-[10px] @sm:text-xs tracking-widest text-charcoal/40 uppercase mb-3">
        {title}
      </p>
      <div className="flex items-center justify-center gap-4 @sm:gap-6">
        <p className="font-display text-2xl @sm:text-3xl text-charcoal">
          Indonesia
        </p>
        <span className="font-display text-lg @sm:text-xl text-amber">
          &amp;
        </span>
        <p className="font-display text-2xl @sm:text-3xl text-charcoal/40">
          Australia
        </p>
      </div>
      <p className="font-body text-xs @sm:text-sm text-charcoal/60 mt-3">
        {detail}
      </p>
    </div>
  );
}
