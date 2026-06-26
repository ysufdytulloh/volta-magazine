import { Wind, RotateCw, Zap } from "lucide-react";

export default function WindTurbineDiagram() {
  return (
    <div>
      <div className="relative w-full aspect-[680/220] rounded-xl overflow-hidden border border-charcoal/10">
        <svg viewBox="0 0 680 220" className="absolute inset-0 w-full h-full">
          <rect
            x="0"
            y="0"
            width="680"
            height="150"
            className="fill-amber/10"
          />
          <rect
            x="0"
            y="150"
            width="680"
            height="70"
            className="fill-charcoal/[0.04]"
          />
          <line
            x1="0"
            y1="150"
            x2="680"
            y2="150"
            className="stroke-charcoal/30"
            strokeWidth="2"
          />

          <path
            d="M60,80 Q90,72 120,80 Q145,87 170,80"
            fill="none"
            className="stroke-charcoal/40"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M60,100 Q85,93 110,100 Q130,105 150,100"
            fill="none"
            className="stroke-charcoal/30"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          <rect
            x="332"
            y="95"
            width="14"
            height="100"
            rx="3"
            className="fill-charcoal/10 stroke-charcoal/20"
            strokeWidth="1"
          />
          <g transform="translate(339,90)">
            <path
              d="M0,0 C3,-5 4,-15 0,-22 C-4,-15 -3,-5 0,0 Z"
              className="fill-amber"
            />
            <path
              d="M0,0 C3,-5 4,-15 0,-22 C-4,-15 -3,-5 0,0 Z"
              className="fill-amber"
              opacity="0.8"
              transform="rotate(120)"
            />
            <path
              d="M0,0 C3,-5 4,-15 0,-22 C-4,-15 -3,-5 0,0 Z"
              className="fill-amber"
              opacity="0.65"
              transform="rotate(240)"
            />
            <circle r="3.5" className="fill-charcoal/60" />
          </g>

          <path
            d="M346,150 L420,178 L480,170"
            fill="none"
            className="stroke-koral/50"
            strokeWidth="2"
            strokeDasharray="4 3"
          />
        </svg>

        <div
          className="absolute flex flex-col items-center"
          style={{ left: "12%", top: "32%" }}
        >
          <div className="w-8 h-8 @sm:w-9 @sm:h-9 rounded-full bg-charcoal/15 border-2 border-cream flex items-center justify-center">
            <Wind size={15} className="text-charcoal/70" strokeWidth={1.75} />
          </div>
        </div>
        <div
          className="absolute flex flex-col items-center"
          style={{ left: "47%", top: "20%" }}
        >
          <div className="w-8 h-8 @sm:w-9 @sm:h-9 rounded-full bg-amber/20 border-2 border-cream flex items-center justify-center">
            <RotateCw size={15} className="text-amber" strokeWidth={1.75} />
          </div>
        </div>
        <div
          className="absolute flex flex-col items-center"
          style={{ left: "73%", top: "62%" }}
        >
          <div className="w-8 h-8 @sm:w-9 @sm:h-9 rounded-full bg-koral/20 border-2 border-cream flex items-center justify-center">
            <Zap size={15} className="text-koral" strokeWidth={1.75} />
          </div>
        </div>

        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-4 @sm:gap-6 px-2">
          <p className="font-body text-[8px] @sm:text-[10px] text-charcoal/50 text-center">
            Angin bertiup
          </p>
          <p className="font-body text-[8px] @sm:text-[10px] text-charcoal/50 text-center">
            Bilah berputar
          </p>
          <p className="font-body text-[8px] @sm:text-[10px] text-charcoal/50 text-center">
            Jadi listrik
          </p>
        </div>
      </div>
      <p className="font-body text-[10px] @sm:text-xs text-charcoal/40 italic text-center mt-2">
        Ilustrasi — Proses kerja turbin angin, dari angin sampai listrik
      </p>
    </div>
  );
}
