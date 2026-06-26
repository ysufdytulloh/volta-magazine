export default function BallDropDiagram() {
  return (
    <div>
      <div className="relative w-full aspect-[680/100] rounded-xl overflow-hidden border border-charcoal/10 bg-charcoal/[0.02]">
        <svg viewBox="0 0 680 150" className="absolute inset-0 w-full h-full">
          <path
            d="M120,115 Q340,15 560,115"
            fill="none"
            className="stroke-koral/40"
            strokeWidth="2"
            strokeDasharray="6 5"
          />
          <circle cx="120" cy="115" r="8" className="fill-koral" />
          <circle cx="340" cy="15" r="8" className="fill-koral" />
          <circle cx="560" cy="115" r="8" className="fill-koral" />
        </svg>

        <div
          className="absolute flex flex-col items-center text-center"
          style={{ left: "50%", top: "2%", transform: "translateX(-50%)" }}
        >
          <p className="font-display text-xs @sm:text-sm text-charcoal">
            EP Maksimal
          </p>
          <p className="font-body text-[9px] @sm:text-[10px] text-charcoal/50">
            EK = 0
          </p>
        </div>
        <div
          className="absolute flex flex-col items-center text-center"
          style={{ left: "17%", bottom: "2%" }}
        >
          <p className="font-body text-[9px] @sm:text-[10px] text-charcoal/50">
            EP = 0
          </p>
          <p className="font-display text-xs @sm:text-sm text-charcoal">
            EK Maksimal
          </p>
        </div>
        <div
          className="absolute flex flex-col items-center text-center"
          style={{ right: "10%", bottom: "2%" }}
        >
          <p className="font-body text-[9px] @sm:text-[10px] text-charcoal/50">
            EP = 0
          </p>
          <p className="font-display text-xs @sm:text-sm text-charcoal">
            EK Maksimal
          </p>
        </div>
      </div>
      <p className="font-body text-[10px] @sm:text-xs text-charcoal/40 italic text-center mt-2">
        Ilustrasi — EM (energi mekanik) tetap konstan di sepanjang lintasan bola
      </p>
    </div>
  );
}
