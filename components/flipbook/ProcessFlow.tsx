import { LucideIcon } from "lucide-react";

type Step = {
  Icon: LucideIcon;
  badgeBg: string;
  label: string;
  sub: string;
};

export default function ProcessFlow({
  steps,
  caption
}: {
  steps: Step[];
  caption: string;
}) {
  return (
    <div>
      <div className="relative">
        <div className="absolute left-6 @sm:left-7 top-6 bottom-6 w-px bg-charcoal/15" />
        <div className="space-y-4 @sm:space-y-5">
          {steps.map(({ Icon, badgeBg, label, sub }, i) =>
            <div key={i} className="relative flex items-center gap-3 @sm:gap-4">
              <div
                className={`relative z-10 w-12 h-12 @sm:w-14 @sm:h-14 rounded-full ${badgeBg} border-2 border-cream flex items-center justify-center shrink-0`}
              >
                <Icon size={20} className="text-cream" strokeWidth={1.75} />
              </div>
              <div>
                <p className="font-display text-sm @sm:text-base text-charcoal">
                  {label}
                </p>
                <p className="font-body text-[10px] @sm:text-xs text-charcoal/50">
                  {sub}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <p className="font-body text-[10px] @sm:text-xs text-charcoal/40 italic mt-3">
        {caption}
      </p>
    </div>
  );
}
