import Image from "next/image";
import { Zap, Sun, Flame } from "lucide-react";

const categories = [
  { icon: Zap, label: "Energi" },
  { icon: Sun, label: "Terbarukan" },
  { icon: Flame, label: "Tak Terbarukan" }
];

export default function CoverFace() {
  return (
    <div className="relative w-full h-full min-h-[200px] overflow-hidden bg-charcoal @container">
      <Image
        src="/covers/cover-bg.jpg"
        alt="Cover Volta — Energi & Perubahannya"
        fill
        sizes="(max-width: 768px) 100vw, 600px"
        className="object-cover object-[75%_center]"
        priority
      />
      <div className="absolute inset-0 bg-linear-to-b from-charcoal/55 via-charcoal/35 to-charcoal/95" />

      <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
        <div>
          <p className="font-display text-2xl @sm:text-3xl text-cream tracking-tight">
            VOLTA
          </p>
          <p className="font-body text-[10px] @sm:text-xs text-cream/60 italic mt-0.5">
            Energi Masa Kini
          </p>
        </div>
        <p className="font-body text-[10px] @sm:text-xs text-cream/70 text-right">
          E-Magazine <br />2026
        </p>
      </div>

      <div className="absolute bottom-6 left-5 right-5">
        <h1 className="font-display text-3xl @sm:text-5xl @md:text-6xl text-cream leading-[1.05]">
          Energi &amp;
          <br />
          Perubahannya
        </h1>
        <p className="font-body text-[10px] @sm:text-xs text-cream/60 mt-2">
          Salsabila Laily Amalina
        </p>

        <div className="flex items-center gap-2 mt-3">
          {categories.map(({ icon: Icon, label }, i) =>
            <div key={label} className="flex items-center gap-1.5">
              {i > 0 && <span className="text-cream/30 mr-0.5">·</span>}
              <Icon size={13} className="text-cream/80" strokeWidth={1.75} />
              <span className="font-body text-[10px] @sm:text-xs text-cream/80">
                {label}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
