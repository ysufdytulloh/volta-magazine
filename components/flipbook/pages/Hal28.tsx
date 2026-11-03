import { forwardRef } from "react";
import PageShell from "../PageShell";
import BodyText from "../BodyText";
import FormulaBox from "../FormulaBox";
import PullQuote from "../PullQuote";
import NoteBox from "../NoteBox";

const transformations = [
  {
    title: "Panel Surya",
    process: "Energi cahaya → energi listrik",
  },
  {
    title: "Turbin Angin",
    process: "Energi kinetik angin → energi mekanik → energi listrik",
  },
  {
    title: "PLTA",
    process:
      "Energi potensial → energi kinetik → energi mekanik → energi listrik",
  },
  {
    title: "Biogas",
    process: "Energi kimia → energi panas",
  },
  {
    title: "Geotermal",
    process: "Energi panas → energi mekanik → energi listrik",
  },
];

const Hal28 = forwardRef<HTMLDivElement>((_, ref) => (
  <PageShell ref={ref} pageNumber={28}>
    <p className="font-body text-xs tracking-widest text-koral uppercase mb-3">
      G. Hukum Kekekalan Energi
    </p>

    <h2 className="font-display text-2xl @sm:text-4xl text-charcoal leading-tight mb-3">
      Energi Tidak Pernah Hilang
    </h2>

    <div className="h-px w-full mb-4 @sm:mb-6 bg-gradient-to-r from-koral to-transparent" />

    <PullQuote>
      Energi tidak dapat diciptakan maupun dimusnahkan, tetapi hanya dapat
      berubah dari satu bentuk ke bentuk lainnya.
    </PullQuote>

    <div className="mt-4 @sm:mt-5">
      <BodyText dropCap>
        Prinsip tersebut dikenal sebagai hukum kekekalan energi. Dalam berbagai
        teknologi energi terbarukan, energi mengalami perubahan bentuk sebelum
        menghasilkan energi yang dapat dimanfaatkan manusia.
      </BodyText>
    </div>

    <FormulaBox label="Hukum Kekekalan Energi">E awal = E akhir</FormulaBox>

    <h3 className="font-display text-lg @sm:text-xl text-charcoal mt-5 mb-3">
      Perubahan Energi dalam Teknologi
    </h3>

    <div className="space-y-3">
      {transformations.map((item, index) => (
        <div
          key={item.title}
          className="flex gap-3 border-b border-charcoal/10 pb-3"
        >
          <span className="font-display text-2xl text-amber">0{index + 1}</span>
          <div className="flex-1">
            <h4 className="font-display text-sm @sm:text-base text-charcoal">
              {item.title}
            </h4>
            <p className="font-body text-xs @sm:text-sm leading-relaxed text-charcoal/60 mt-1">
              {item.process}
            </p>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-4 @sm:mt-5">
      <NoteBox label="Catatan Penting" tone="navy">
        Dalam proses nyata, tidak seluruh energi masukan berubah menjadi energi
        keluaran yang diinginkan. Sebagian energi dapat terlepas sebagai panas,
        bunyi, atau bentuk energi lainnya.
      </NoteBox>
    </div>
  </PageShell>
));

Hal28.displayName = "Hal28";
export default Hal28;
