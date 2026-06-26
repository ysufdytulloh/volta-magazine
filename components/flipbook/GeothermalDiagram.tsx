import { Droplets, Flame, Zap } from "lucide-react";

export default function GeothermalDiagram() {
  return (
    <div>
      <div className="relative w-full aspect-[680/220] rounded-xl overflow-hidden border border-charcoal/10">
        <svg viewBox="0 0 680 220" className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="heatZone" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                className="[stop-color:var(--color-charcoal)]"
                stopOpacity="0.04"
              />
              <stop
                offset="100%"
                className="[stop-color:var(--color-koral)]"
                stopOpacity="0.3"
              />
            </linearGradient>
          </defs>

          <rect x="0" y="0" width="680" height="95" className="fill-amber/10" />
          <rect x="0" y="95" width="680" height="125" fill="url(#heatZone)" />
          <line
            x1="0"
            y1="95"
            x2="680"
            y2="95"
            className="stroke-charcoal/30"
            strokeWidth="2"
          />

          <rect
            x="250"
            y="75"
            width="36"
            height="135"
            rx="6"
            className="fill-amber/10 stroke-amber/40"
            strokeWidth="1.5"
          />
          <rect
            x="394"
            y="35"
            width="36"
            height="175"
            rx="6"
            className="fill-amber/10 stroke-amber/40"
            strokeWidth="1.5"
          />

          <path
            d="M402,195 Q414,184 402,173 Q390,162 402,151"
            fill="none"
            className="stroke-koral"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.6"
          />
          <path
            d="M402,140 Q414,129 402,118 Q390,107 402,96"
            fill="none"
            className="stroke-koral"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.8"
          />
          <path
            d="M402,85 Q414,76 402,67 Q390,60 402,52"
            fill="none"
            className="stroke-koral"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          <circle cx="412" cy="34" r="17" className="fill-amber" />
          <g className="stroke-cream" strokeWidth="2.5" strokeLinecap="round">
            <line x1="412" y1="34" x2="412" y2="20" />
            <line x1="412" y1="34" x2="424" y2="42" />
            <line x1="412" y1="34" x2="400" y2="42" />
          </g>
        </svg>

        <div
          className="absolute flex flex-col items-center"
          style={{ left: "33%", top: "26%" }}
        >
          <div className="w-8 h-8 @sm:w-9 @sm:h-9 rounded-full bg-biru/20 border-2 border-cream flex items-center justify-center">
            <Droplets size={15} className="text-biru" strokeWidth={1.75} />
          </div>
        </div>
        <div
          className="absolute flex flex-col items-center"
          style={{ left: "47%", top: "70%" }}
        >
          <div className="w-8 h-8 @sm:w-9 @sm:h-9 rounded-full bg-koral/20 border-2 border-cream flex items-center justify-center">
            <Flame size={15} className="text-koral" strokeWidth={1.75} />
          </div>
        </div>
        <div
          className="absolute flex flex-col items-center"
          style={{ left: "65%", top: "8%" }}
        >
          <div className="w-8 h-8 @sm:w-9 @sm:h-9 rounded-full bg-amber/20 border-2 border-cream flex items-center justify-center">
            <Zap size={15} className="text-amber" strokeWidth={1.75} />
          </div>
        </div>

        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-3 @sm:gap-5 px-2">
          <p className="font-body text-[8px] @sm:text-[10px] text-charcoal/50 text-center">
            Air dingin masuk
          </p>
          <p className="font-body text-[8px] @sm:text-[10px] text-charcoal/50 text-center">
            Panas bumi
          </p>
          <p className="font-body text-[8px] @sm:text-[10px] text-charcoal/50 text-center">
            Jadi listrik
          </p>
        </div>
      </div>
      <p className="font-body text-[10px] @sm:text-xs text-charcoal/40 italic text-center mt-2">
        Ilustrasi — Proses kerja PLTP, dari air dingin sampai listrik
      </p>
    </div>
  );
}
