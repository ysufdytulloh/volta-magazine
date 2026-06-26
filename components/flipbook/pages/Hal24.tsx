import { forwardRef } from "react";
import PageShell from "../PageShell";
import NoteBox from "../NoteBox";
import PageImage from "../PageImage";
import FossilFormationDiagram from "../FossilFormationDiagram";

const summary = [
  { name: "Minyak Bumi", stat: "~35%", desc: "Ketergantungan impor" },
  { name: "Gas Bumi", stat: "50%→40%", desc: "Rasio ekspor menurun" },
  { name: "Batubara", stat: "63%", desc: "Porsi ekspor dari produksi" }
];

const Hal24 = forwardRef<HTMLDivElement>((_, ref) =>
  <PageShell ref={ref} pageNumber={24}>
    <p className="font-body text-xs tracking-widest text-navy/60 uppercase mb-3 @sm:mb-4">
      D.2 Sumber Energi Tidak Dapat Diperbaharui — 09
    </p>
    <h2 className="font-display text-xl @sm:text-2xl text-charcoal mb-3 @sm:mb-4">
      Menutup Bagian D.2
    </h2>

    <PageImage
      caption="Foto: tambang batubara"
      src="/photos/hal24-tambangbatubara.jpg"
    />

    <div className="grid grid-cols-3 gap-2.5 @sm:gap-3 mt-4 @sm:mt-5">
      {summary.map((s, i) =>
        <div
          key={i}
          className="rounded-xl border border-charcoal/10 px-2 @sm:px-3 py-3 @sm:py-4 text-center"
        >
          <p className="font-body text-[9px] @sm:text-[10px] text-charcoal/50 uppercase tracking-wide mb-1">
            {s.name}
          </p>
          <p className="font-display text-base @sm:text-lg text-navy">
            {s.stat}
          </p>
          <p className="font-body text-[9px] @sm:text-[10px] text-charcoal/50 mt-0.5">
            {s.desc}
          </p>
        </div>
      )}
    </div>

    <div className="mt-4 @sm:mt-5">
      <FossilFormationDiagram />
    </div>

    <div className="mt-4 @sm:mt-5">
      <NoteBox label="Satu Pola yang Sama" tone="navy">
        Minyak bumi, gas bumi, dan batubara — ketiganya berbagi satu pola yang
        sama: terbentuk lewat proses alam yang memakan waktu jutaan tahun,
        sehingga jumlahnya tidak bisa diperbarui secepat manusia menggunakannya.
      </NoteBox>
    </div>
  </PageShell>
);
Hal24.displayName = "Hal24";

export default Hal24;
