import { forwardRef } from "react";
import PageShell from "../PageShell";
import BodyText from "../BodyText";
import PageImage from "../PageImage";
import { Zap, Sailboat, Wind, Droplets, ArrowRight } from "lucide-react";

const manfaat = [
  {
    icon: Zap,
    label: "Sebagai pembangkit listrik lewat turbin yang menggerakkan generator"
  },
  { icon: Sailboat, label: "Untuk transportasi, wisata, dan irigasi pertanian" }
];

const Hal13 = forwardRef<HTMLDivElement>((_, ref) =>
  <PageShell ref={ref} pageNumber={13}>
    <p className="font-body text-xs tracking-widest text-amber/60 uppercase mb-3 @sm:mb-4">
      D.1 Sumber Energi Dapat Diperbaharui — 06
    </p>
    <h2 className="font-display text-xl @sm:text-2xl text-charcoal mb-3 @sm:mb-4">
      Manfaat Energi Air
    </h2>

    <BodyText>
      Energi yang bersumber dari tenaga air bukan barang baru — manusia sudah
      lama memanfaatkannya, jauh sebelum PLTA modern dibangun, karena sifatnya
      yang ramah lingkungan dan jumlahnya berlimpah.
    </BodyText>

    <div className="space-y-2 @sm:space-y-2.5 mt-3 @sm:mt-4">
      {manfaat.map(({ icon: Icon, label }, i) =>
        <div key={i} className="flex items-center gap-2.5">
          <Icon size={15} className="text-amber shrink-0" strokeWidth={1.75} />
          <span className="font-body text-xs @sm:text-sm text-charcoal/80">
            {label}
          </span>
        </div>
      )}
    </div>

    <div className="mt-4 @sm:mt-5 rounded-xl border border-charcoal/10 overflow-hidden">
      <p className="font-body text-[10px] tracking-widest text-charcoal/40 uppercase text-center pt-3">
        Kenapa PLTA Lebih Bertenaga dari Turbin Angin
      </p>
      <div className="flex items-center justify-center gap-4 @sm:gap-6 px-4 py-4 @sm:py-5">
        <div className="text-center">
          <div className="w-11 h-11 @sm:w-12 @sm:h-12 rounded-full bg-amber/15 flex items-center justify-center mx-auto mb-1.5">
            <Wind size={20} className="text-amber" strokeWidth={1.75} />
          </div>
          <p className="font-body text-[10px] @sm:text-xs text-charcoal/70">
            Massa udara<br />ringan
          </p>
        </div>
        <ArrowRight size={16} className="text-charcoal/30 shrink-0" />
        <div className="text-center">
          <div className="w-11 h-11 @sm:w-12 @sm:h-12 rounded-full bg-biru/15 flex items-center justify-center mx-auto mb-1.5">
            <Droplets size={20} className="text-biru" strokeWidth={1.75} />
          </div>
          <p className="font-body text-[10px] @sm:text-xs text-charcoal/70">
            Massa air<br />jauh lebih besar
          </p>
        </div>
      </div>
      <p className="font-body text-[10px] @sm:text-xs text-charcoal/50 text-center pb-3 px-4">
        Itu sebabnya PLTA bisa menghasilkan listrik dalam skala jauh lebih
        besar.
      </p>
    </div>

    <div className="mt-3 @sm:mt-4">
      <PageImage
        caption="Foto: bendungan / PLTA"
        src="/photos/hal13-plta.jpg"
      />
    </div>
  </PageShell>
);
Hal13.displayName = "Hal13";

export default Hal13;
