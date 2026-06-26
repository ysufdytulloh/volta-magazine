import { ReactNode } from "react";

const toneClasses = {
  koral: "first-letter:text-koral",
  amber: "first-letter:text-amber",
  navy: "first-letter:text-navy"
};

export default function BodyText({
  dropCap = false,
  tone = "koral",
  children
}: {
  dropCap?: boolean;
  tone?: "koral" | "amber" | "navy";
  children: ReactNode;
}) {
  return (
    <p
      className={`font-body text-charcoal/80 leading-relaxed text-justify ${dropCap
        ? `first-letter:font-display first-letter:text-3xl @sm:first-letter:text-4xl ${toneClasses[
            tone
          ]} first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:leading-[0.8]`
        : ""}`}
    >
      {children}
    </p>
  );
}
