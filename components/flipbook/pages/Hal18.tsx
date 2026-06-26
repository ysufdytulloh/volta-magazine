import { forwardRef } from "react";
import PageShell from "../PageShell";
import BodyText from "../BodyText";
import RadialStat from "../RadialStat";
import NoteBox from "../NoteBox";
import PageImage from "../PageImage";

const Hal18 = forwardRef<HTMLDivElement>((_, ref) =>
  <PageShell ref={ref} pageNumber={18}>
    <p className="font-body text-xs tracking-widest text-navy/60 uppercase mb-3 @sm:mb-4">
      D.2 Sumber Energi Tidak Dapat Diperbaharui — 03
    </p>
    <h2 className="font-display text-xl @sm:text-2xl text-charcoal mb-3 @sm:mb-4">
      Bergantung pada Impor
    </h2>

    <BodyText>
      Untuk memenuhi kebutuhan kilang, Indonesia mengimpor minyak bumi terutama
      dari Timur Tengah — ketergantungan terhadap impor ini mencapai sekitar
      35%.
    </BodyText>

    <div className="mt-4 @sm:mt-5 rounded-xl border border-charcoal/10 px-4 @sm:px-6 py-4 @sm:py-5 flex justify-center">
      <RadialStat
        percentage={35}
        label="dari kebutuhan kilang nasional dipenuhi lewat impor, terutama dari Timur Tengah"
        color="amber"
      />
    </div>

    <div className="mt-3 @sm:mt-4">
      <PageImage
        caption="Foto: kilang minyak lepas pantai"
        src="/photos/hal18-kilangminyak.jpg"
      />
    </div>

    <div className="mt-3 @sm:mt-4">
      <NoteBox label="Satu Benang Merah" tone="navy">
        Produksi yang menurun, ditambah ketergantungan impor yang signifikan —
        dua hal ini jadi alasan kuat mengapa pencarian sumber energi alternatif,
        seperti yang sudah kita bahas di Bagian D.1, menjadi semakin mendesak
        bagi Indonesia.
      </NoteBox>
    </div>
  </PageShell>
);
Hal18.displayName = "Hal18";

export default Hal18;
