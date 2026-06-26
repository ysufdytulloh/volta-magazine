import { forwardRef } from "react";
import PageShell from "../PageShell";
import TrendChart from "../TrendChart";
import NoteBox from "../NoteBox";

const data = [
  { label: "2009", value: 50 },
  { label: "2010", value: 52 },
  { label: "2011", value: 50 },
  { label: "2012", value: 43 },
  { label: "2013", value: 44 },
  { label: "2014", value: 42 },
  { label: "2015", value: 43 },
  { label: "2016", value: 44 },
  { label: "2017", value: 43 },
  { label: "2018", value: 40 }
];

const Hal20 = forwardRef<HTMLDivElement>((_, ref) =>
  <PageShell ref={ref} pageNumber={20}>
    <p className="font-body text-xs tracking-widest text-navy/60 uppercase mb-3 @sm:mb-4">
      D.2 Sumber Energi Tidak Dapat Diperbaharui — 05
    </p>
    <h2 className="font-display text-xl @sm:text-2xl text-charcoal mb-1">
      Rasio Ekspor Gas Bumi terhadap Produksi
    </h2>
    <p className="font-body text-xs @sm:text-sm text-charcoal/50 mb-4 @sm:mb-6">
      2009–2018
    </p>

    <TrendChart
      data={data}
      color="amber"
      source="Data produksi dan ekspor gas bumi nasional, Bahan Ajar Energi dan Perubahannya"
    />

    <div className="flex justify-center gap-6 @sm:gap-10 mt-4 @sm:mt-5">
      <div className="text-center">
        <p className="font-display text-2xl @sm:text-3xl text-amber">52%</p>
        <p className="font-body text-[10px] @sm:text-xs text-charcoal/50">
          Tertinggi (2010)
        </p>
      </div>
      <div className="text-center">
        <p className="font-display text-2xl @sm:text-3xl text-navy">40%</p>
        <p className="font-body text-[10px] @sm:text-xs text-charcoal/50">
          Terendah (2018)
        </p>
      </div>
    </div>

    <div className="mt-4 @sm:mt-5 rounded-xl border border-charcoal/10 px-4 @sm:px-5 py-3 @sm:py-4 grid grid-cols-2 gap-3">
      <div className="text-center border-r border-charcoal/10">
        <p className="font-body text-[9px] @sm:text-[10px] tracking-widest text-charcoal/40 uppercase mb-1">
          Minyak Bumi
        </p>
        <p className="font-display text-base @sm:text-lg text-amber">~35%</p>
        <p className="font-body text-[9px] @sm:text-[10px] text-charcoal/50">
          Relatif stabil
        </p>
      </div>
      <div className="text-center">
        <p className="font-body text-[9px] @sm:text-[10px] tracking-widest text-charcoal/40 uppercase mb-1">
          Gas Bumi
        </p>
        <p className="font-display text-base @sm:text-lg text-amber">50%→40%</p>
        <p className="font-body text-[9px] @sm:text-[10px] text-charcoal/50">
          Terus menurun
        </p>
      </div>
    </div>

    <div className="mt-4 @sm:mt-5">
      <NoteBox label="Membaca Tren" tone="navy">
        Berbeda dari minyak bumi yang ketergantungan impornya relatif stabil,
        rasio ekspor gas bumi justru terus mengecil. Tandanya, semakin banyak
        gas bumi yang ditahan untuk kebutuhan dalam negeri.
      </NoteBox>
    </div>
  </PageShell>
);
Hal20.displayName = "Hal20";

export default Hal20;
