import { forwardRef } from "react";
import PageShell from "../PageShell";
import BodyText from "../BodyText";
import StackedBar from "../StackedBar";
import GrowthIndicator from "../GrowthIndicator";
import { Zap, Factory } from "lucide-react";

const Hal22 = forwardRef<HTMLDivElement>((_, ref) =>
  <PageShell ref={ref} pageNumber={22}>
    <div className="flex items-center gap-3 mb-2 @sm:mb-3">
      <span className="w-8 h-px bg-navy" />
      <span className="font-body text-xs tracking-widest text-navy uppercase">
        D.2 Sumber Energi Tidak Dapat Diperbaharui — 07
      </span>
    </div>
    <h2 className="font-display text-2xl @sm:text-4xl text-charcoal leading-tight mb-3 @sm:mb-4">
      Batubara
    </h2>

    <div className="grid grid-cols-1 @sm:grid-cols-2 gap-4 @sm:gap-6">
      <BodyText dropCap tone="navy">
        Produksi batubara Indonesia diperkirakan akan terus meningkat, terutama
        untuk memenuhi kebutuhan dalam negeri (pembangkit listrik dan industri)
        sekaligus permintaan luar negeri lewat ekspor.
      </BodyText>
      <BodyText>
        Perkembangan produksi periode 2009-2018 mengalami peningkatan cukup
        besar, dengan capaian produksi pada 2018 sebesar 557 juta ton.
      </BodyText>
    </div>

    <div className="flex justify-center gap-6 @sm:gap-8 mt-3 @sm:mt-4">
      <div className="flex items-center gap-2">
        <Zap size={16} className="text-navy" strokeWidth={1.75} />
        <span className="font-body text-xs @sm:text-sm text-charcoal/70">
          Pembangkit Listrik
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Factory size={16} className="text-navy" strokeWidth={1.75} />
        <span className="font-body text-xs @sm:text-sm text-charcoal/70">
          Industri
        </span>
      </div>
    </div>

    <div className="grid grid-cols-1 @sm:grid-cols-2 gap-3 @sm:gap-4 mt-4 @sm:mt-6">
      <GrowthIndicator caption="Tren produksi batubara nasional, 2009 → 2018" />
      <div className="rounded-xl border border-charcoal/10 px-4 @sm:px-6 py-4 @sm:py-5">
        <StackedBar
          total="557 Juta Ton"
          totalLabel="Total Produksi 2018"
          segments={[
            { label: "Ekspor", percentage: 63, bg: "bg-amber" },
            { label: "Domestik", percentage: 37, bg: "bg-navy" }
          ]}
        />
      </div>
    </div>
  </PageShell>
);
Hal22.displayName = "Hal22";

export default Hal22;
