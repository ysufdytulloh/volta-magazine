import { ReactNode } from "react";

const toneClasses = {
  koral: { bg: "bg-koral/10", border: "border-koral" },
  amber: { bg: "bg-amber/10", border: "border-amber" },
  navy: { bg: "bg-navy/10", border: "border-navy" }
};

export default function NoteBox({
  label,
  tone = "koral",
  children
}: {
  label: string;
  tone?: "koral" | "amber" | "navy";
  children: ReactNode;
}) {
  const { bg, border } = toneClasses[tone];
  return (
    <div className={`${bg} border-l-2 ${border} rounded-md px-4 py-3`}>
      <p className="font-body text-[10px] tracking-widest text-charcoal/50 uppercase mb-1">
        {label}
      </p>
      <p className="font-body text-xs @sm:text-sm text-charcoal/80 leading-relaxed">
        {children}
      </p>
    </div>
  );
}
