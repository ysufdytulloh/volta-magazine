import { Leaf, Layers, Droplet, Cloud, Square } from "lucide-react";

export default function FossilFormationDiagram() {
  return (
    <div>
      <div className="relative w-full aspect-[680/220] rounded-xl overflow-hidden border border-charcoal/10">
        <svg viewBox="0 0 680 220" className="absolute inset-0 w-full h-full">
          <rect x="0" y="0" width="680" height="50" className="fill-biru/10" />
          <rect
            x="0"
            y="50"
            width="680"
            height="170"
            className="fill-charcoal/[0.03]"
          />
          <line
            x1="0"
            y1="50"
            x2="680"
            y2="50"
            className="stroke-charcoal/30"
            strokeWidth="2"
          />
          {[80, 110, 140, 170].map((y, i) =>
            <line
              key={i}
              x1="0"
              y1={y}
              x2="680"
              y2={y}
              className="stroke-navy/15"
              strokeWidth="1.5"
              strokeDasharray="6 4"
            />
          )}
        </svg>

        <div
          className="absolute flex flex-col items-center"
          style={{ left: "10%", top: "18%" }}
        >
          <div className="w-8 h-8 @sm:w-9 @sm:h-9 rounded-full bg-koral/20 border-2 border-cream flex items-center justify-center">
            <Leaf size={15} className="text-koral" strokeWidth={1.75} />
          </div>
        </div>
        <div
          className="absolute flex flex-col items-center"
          style={{ left: "37%", top: "55%" }}
        >
          <div className="w-8 h-8 @sm:w-9 @sm:h-9 rounded-full bg-navy/20 border-2 border-cream flex items-center justify-center">
            <Layers size={15} className="text-navy" strokeWidth={1.75} />
          </div>
        </div>
        <div
          className="absolute flex flex-col items-center"
          style={{ left: "62%", top: "78%" }}
        >
          <div className="w-8 h-8 @sm:w-9 @sm:h-9 rounded-full bg-amber/20 border-2 border-cream flex items-center justify-center">
            <Droplet size={15} className="text-amber" strokeWidth={1.75} />
          </div>
        </div>
        <div
          className="absolute flex flex-col items-center"
          style={{ left: "76%", top: "62%" }}
        >
          <div className="w-8 h-8 @sm:w-9 @sm:h-9 rounded-full bg-biru/20 border-2 border-cream flex items-center justify-center">
            <Cloud size={15} className="text-biru" strokeWidth={1.75} />
          </div>
        </div>
        <div
          className="absolute flex flex-col items-center"
          style={{ left: "90%", top: "78%" }}
        >
          <div className="w-8 h-8 @sm:w-9 @sm:h-9 rounded-full bg-charcoal/15 border-2 border-cream flex items-center justify-center">
            <Square size={15} className="text-charcoal" strokeWidth={1.75} />
          </div>
        </div>

        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-3 @sm:gap-5 px-2">
          <p className="font-body text-[8px] @sm:text-[10px] text-charcoal/50 text-center">
            Organisme purba
          </p>
          <p className="font-body text-[8px] @sm:text-[10px] text-charcoal/50 text-center">
            Tertimbun & tertekan
          </p>
          <p className="font-body text-[8px] @sm:text-[10px] text-charcoal/50 text-center">
            Minyak, gas, batubara
          </p>
        </div>
      </div>
      <p className="font-body text-[10px] @sm:text-xs text-charcoal/40 italic text-center mt-2">
        Ilustrasi — Proses pembentukan bahan bakar fosil selama jutaan tahun
      </p>
    </div>
  );
}
