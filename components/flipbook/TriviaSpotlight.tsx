import { ReactNode } from "react";

const toneClasses = {
  koral: "text-koral",
  amber: "text-amber",
  navy: "text-navy"
};

export default function TriviaSpotlight({
  stat,
  statLabel,
  title,
  tone = "amber",
  children
}: {
  stat: string;
  statLabel: string;
  title: string;
  tone?: "koral" | "amber" | "navy";
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center text-center h-full justify-center px-2">
      <p className="font-body text-xs tracking-widest text-charcoal/40 uppercase mb-4 @sm:mb-6">
        ✦ Tahukah Kamu
      </p>
      <p
        className={`font-display text-6xl @sm:text-8xl leading-none ${toneClasses[
          tone
        ]}`}
      >
        {stat}
      </p>
      <p className="font-body text-xs @sm:text-sm text-charcoal/50 mt-2 mb-5 @sm:mb-7">
        {statLabel}
      </p>
      <h2 className="font-display text-xl @sm:text-2xl text-charcoal mb-3 @sm:mb-4 max-w-sm">
        {title}
      </h2>
      <p className="font-body text-xs @sm:text-sm text-charcoal/70 leading-relaxed max-w-sm">
        {children}
      </p>
    </div>
  );
}
