import { forwardRef } from "react";
import PageShell from "../PageShell";
import TrendChart from "../TrendChart";
import NoteBox from "../NoteBox";

const data = [
  { label: "2009", value: 36 },
  { label: "2010", value: 32 },
  { label: "2011", value: 33 },
  { label: "2012", value: 32 },
  { label: "2013", value: 38 },
  { label: "2014", value: 39 },
  { label: "2015", value: 44 },
  { label: "2016", value: 45 },
  { label: "2017", value: 43 },
  { label: "2018", value: 35 }
];

const Hal17 = forwardRef<HTMLDivElement>((_, ref) =>
  <PageShell ref={ref} pageNumber={17}>
    <p className="font-body text-xs tracking-widest text-navy/60 uppercase mb-3 @sm:mb-4">
      D.2 Sumber Energi Tidak Dapat Diperbaharui — 02
    </p>
    <h2 className="font-display text-xl @sm:text-2xl text-charcoal mb-1">
      Rasio Ketergantungan Impor Minyak Bumi
    </h2>
    <p className="font-body text-xs @sm:text-sm text-charcoal/50 mb-4 @sm:mb-6">
      2009–2018
    </p>

    <TrendChart
      data={data}
      color="amber"
      source="Data produksi dan impor minyak bumi nasional, Bahan Ajar Energi dan Perubahannya"
    />

    <div className="flex justify-center gap-6 @sm:gap-10 mt-4 @sm:mt-5">
      <div className="text-center">
        <p className="font-display text-2xl @sm:text-3xl text-amber">45%</p>
        <p className="font-body text-[10px] @sm:text-xs text-charcoal/50">
          Tertinggi (2016)
        </p>
      </div>
      <div className="text-center">
        <p className="font-display text-2xl @sm:text-3xl text-navy">32%</p>
        <p className="font-body text-[10px] @sm:text-xs text-charcoal/50">
          Terendah (2010 & 2012)
        </p>
      </div>
    </div>

    <div className="mt-4 @sm:mt-5">
      <NoteBox label="Membaca Tren" tone="navy">
        Rasio ketergantungan impor sempat memuncak di 45% pada 2016, sebelum
        turun lagi ke 35% di 2018. Tapi sepanjang dekade ini, angkanya konsisten
        bertahan di kisaran sepertiga dari total kebutuhan nasional.
      </NoteBox>
    </div>
  </PageShell>
);
Hal17.displayName = "Hal17";

export default Hal17;
