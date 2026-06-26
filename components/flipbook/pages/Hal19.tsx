import { forwardRef } from "react";
import PageShell from "../PageShell";
import BodyText from "../BodyText";
import DonutChart from "../DonutChart";
import NoteBox from "../NoteBox";
import { Factory, Zap, Home, Layers } from "lucide-react";

const segments = [
  {
    label: "Domestik (industri, listrik, gas kota, gas lift)",
    value: 1.7,
    stroke: "stroke-navy",
    bg: "bg-navy"
  },
  {
    label: "Ekspor (LNG & gas pipa)",
    value: 1.2,
    stroke: "stroke-amber",
    bg: "bg-amber"
  }
];

const uses = [
  { Icon: Factory, label: "Industri" },
  { Icon: Zap, label: "Listrik" },
  { Icon: Home, label: "Gas Kota" },
  { Icon: Layers, label: "Gas Lift" }
];

const Hal19 = forwardRef<HTMLDivElement>((_, ref) =>
  <PageShell ref={ref} pageNumber={19}>
    <div className="flex items-center gap-3 mb-2 @sm:mb-3">
      <span className="w-8 h-px bg-navy" />
      <span className="font-body text-xs tracking-widest text-navy uppercase">
        D.2 Sumber Energi Tidak Dapat Diperbaharui — 04
      </span>
    </div>
    <h2 className="font-display text-2xl @sm:text-4xl text-charcoal leading-tight mb-3 @sm:mb-4">
      Gas Bumi
    </h2>

    <div className="grid grid-cols-1 @sm:grid-cols-2 gap-4 @sm:gap-6">
      <BodyText dropCap tone="navy">
        Pada tahun 2018, produksi gas bumi nasional mencapai 2,9 juta MMSCF.
        Sebagian besar digunakan untuk memenuhi konsumsi dalam negeri — mulai
        dari industri, pembangkit listrik, gas kota untuk rumah tangga dan
        komersial, sampai gas lift.
      </BodyText>
      <BodyText>
        Selain dipakai domestik, gas bumi juga jadi komoditas ekspor dalam
        bentuk LNG dan gas pipa. Tapi porsi ekspornya cenderung mengecil
        dibanding kebutuhan dalam negeri yang terus tumbuh.
      </BodyText>
    </div>

    <div className="mt-4 @sm:mt-6 rounded-xl border border-charcoal/10 px-4 @sm:px-6 py-4 @sm:py-5">
      <DonutChart segments={segments} centerLabel="Total 2018" />
      <div className="flex justify-center gap-3 @sm:gap-4 flex-wrap mt-4 @sm:mt-5">
        {uses.map(({ Icon, label }, i) =>
          <div key={i} className="flex items-center gap-1.5">
            <Icon size={13} className="text-navy/70" strokeWidth={1.75} />
            <span className="font-body text-[10px] @sm:text-xs text-charcoal/60">
              {label}
            </span>
          </div>
        )}
      </div>
    </div>

    <div className="mt-4 @sm:mt-5">
      <NoteBox label="Koneksi Konsep" tone="navy">
        Sama seperti minyak bumi, gas bumi juga harus dibagi antara kebutuhan
        domestik yang terus tumbuh dan peluang ekspor — keseimbangan yang makin
        condong ke dalam negeri dari tahun ke tahun.
      </NoteBox>
    </div>
  </PageShell>
);
Hal19.displayName = "Hal19";

export default Hal19;
