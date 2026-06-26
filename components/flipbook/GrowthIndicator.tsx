export default function GrowthIndicator({ caption }: { caption: string }) {
  return (
    <div className="rounded-xl border border-charcoal/10 px-4 @sm:px-6 py-4 @sm:py-5">
      <div className="flex items-end justify-center gap-2.5 @sm:gap-3 h-16 @sm:h-20 mb-3">
        <div
          className="w-7 @sm:w-9 rounded-t bg-navy/25"
          style={{ height: "32%" }}
        />
        <div
          className="w-7 @sm:w-9 rounded-t bg-navy/45"
          style={{ height: "52%" }}
        />
        <div
          className="w-7 @sm:w-9 rounded-t bg-navy/70"
          style={{ height: "74%" }}
        />
        <div
          className="w-7 @sm:w-9 rounded-t bg-navy"
          style={{ height: "100%" }}
        />
      </div>
      <div className="flex justify-between px-1">
        <span className="font-body text-[10px] @sm:text-xs text-charcoal/50">
          2009
        </span>
        <span className="font-body text-[10px] @sm:text-xs text-charcoal/50">
          2018
        </span>
      </div>
      <p className="font-body text-[10px] @sm:text-xs text-charcoal/40 italic text-center mt-3">
        {caption}
      </p>
    </div>
  );
}
