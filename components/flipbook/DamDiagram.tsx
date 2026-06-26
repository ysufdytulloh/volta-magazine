import { Droplets, RotateCw, Zap } from "lucide-react";

export default function DamDiagram() {
  return (
    <div>
      <div className="relative w-full aspect-[680/220] rounded-xl overflow-hidden border border-charcoal/10">
        <svg viewBox="0 0 680 220" className="absolute inset-0 w-full h-full">
          <rect x="0" y="0" width="680" height="75" className="fill-amber/10" />
          <rect
            x="0"
            y="75"
            width="680"
            height="145"
            className="fill-charcoal/[0.04]"
          />
          <line
            x1="0"
            y1="75"
            x2="680"
            y2="75"
            className="stroke-charcoal/30"
            strokeWidth="2"
          />

          <rect
            x="240"
            y="20"
            width="34"
            height="175"
            rx="6"
            className="fill-amber/10 stroke-amber/40"
            strokeWidth="1.5"
          />
          <rect
            x="400"
            y="55"
            width="44"
            height="140"
            rx="6"
            className="fill-charcoal/5 stroke-charcoal/20"
            strokeWidth="1.5"
          />

          <circle cx="257" cy="35" r="3" className="fill-biru" opacity="0.6" />
          <circle cx="257" cy="60" r="3" className="fill-biru" opacity="0.7" />
          <circle cx="257" cy="90" r="3" className="fill-biru" opacity="0.8" />
          <circle cx="257" cy="120" r="3" className="fill-biru" opacity="0.9" />

          <circle
            cx="422"
            cy="125"
            r="18"
            className="fill-amber/15 stroke-amber"
            strokeWidth="2"
          />
          <g className="stroke-amber" strokeWidth="2" strokeLinecap="round">
            <line x1="422" y1="111" x2="422" y2="116" />
            <line x1="422" y1="134" x2="422" y2="139" />
            <line x1="408" y1="125" x2="413" y2="125" />
            <line x1="431" y1="125" x2="436" y2="125" />
          </g>
        </svg>

        <div
          className="absolute flex flex-col items-center"
          style={{ left: "30%", top: "10%" }}
        >
          <div className="w-8 h-8 @sm:w-9 @sm:h-9 rounded-full bg-biru/20 border-2 border-cream flex items-center justify-center">
            <Droplets size={15} className="text-biru" strokeWidth={1.75} />
          </div>
        </div>
        <div
          className="absolute flex flex-col items-center"
          style={{ left: "57%", top: "48%" }}
        >
          <div className="w-8 h-8 @sm:w-9 @sm:h-9 rounded-full bg-amber/20 border-2 border-cream flex items-center justify-center">
            <RotateCw size={15} className="text-amber" strokeWidth={1.75} />
          </div>
        </div>
        <div
          className="absolute flex flex-col items-center"
          style={{ left: "78%", top: "20%" }}
        >
          <div className="w-8 h-8 @sm:w-9 @sm:h-9 rounded-full bg-koral/20 border-2 border-cream flex items-center justify-center">
            <Zap size={15} className="text-koral" strokeWidth={1.75} />
          </div>
        </div>

        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-4 @sm:gap-6 px-2">
          <p className="font-body text-[8px] @sm:text-[10px] text-charcoal/50 text-center">
            Air dari bendungan
          </p>
          <p className="font-body text-[8px] @sm:text-[10px] text-charcoal/50 text-center">
            Memutar turbin
          </p>
          <p className="font-body text-[8px] @sm:text-[10px] text-charcoal/50 text-center">
            Jadi listrik
          </p>
        </div>
      </div>
      <p className="font-body text-[10px] @sm:text-xs text-charcoal/40 italic text-center mt-2">
        Ilustrasi — Proses kerja PLTA, dari air mengalir sampai listrik
      </p>
    </div>
  );
}
