import { ReactNode } from "react";

export default function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="border-l-2 border-koral pl-4 italic font-display text-base @sm:text-lg text-charcoal/80">
      {children}
    </blockquote>
  );
}
