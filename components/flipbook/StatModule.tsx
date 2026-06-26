import { ReactNode } from "react";

export function StatModule({
  label,
  children
}: {
  label?: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-charcoal rounded-md px-4 py-4">
      {label &&
        <p className="font-body text-[10px] tracking-widest text-cream/50 uppercase text-center mb-3">
          {label}
        </p>}
      <div className="flex items-center justify-center gap-3 flex-wrap">
        {children}
      </div>
    </div>
  );
}

export function StatPill({
  tone = "biru",
  children
}: {
  tone?: "biru" | "amber" | "koral" | "navy";
  children: ReactNode;
}) {
  const toneClass = {
    biru: "bg-biru",
    amber: "bg-amber",
    koral: "bg-koral",
    navy: "bg-navy"
  }[tone];
  return (
    <span
      className={`${toneClass} text-cream font-body text-sm font-medium rounded-md px-3 py-1.5`}
    >
      {children}
    </span>
  );
}
