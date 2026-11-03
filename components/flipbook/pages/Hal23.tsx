import { forwardRef } from "react";
import PageShell from "../PageShell";
import BodyText from "../BodyText";
import NoteBox from "../NoteBox";

const impacts = [
  {
    title: "Energi Angin",
    desc: "Kebisingan dan potensi gangguan terhadap burung.",
    code: "01",
  },
  {
    title: "Energi Air",
    desc: "Perubahan aliran sungai dan habitat organisme air.",
    code: "02",
  },
  {
    title: "Biomassa",
    desc: "Emisi yang dihasilkan dari proses pembakaran.",
    code: "03",
  },
  {
    title: "Energi Surya",
    desc: "Penggunaan lahan dan pengelolaan limbah panel setelah masa pakainya berakhir.",
    code: "04",
  },
  {
    title: "Panas Bumi",
    desc: "Pengelolaan fluida dan gas yang berasal dari dalam Bumi.",
    code: "05",
  },
  {
    title: "Energi Laut",
    desc: "Potensi gangguan terhadap ekosistem dan habitat organisme laut.",
    code: "06",
  },
];

const Hal19 = forwardRef<HTMLDivElement>((_, ref) => (
  <PageShell ref={ref} pageNumber={19}>
    <p className="font-body text-xs tracking-widest text-koral uppercase mb-3">
      E. Energi Terbarukan — 04
    </p>

    <h2 className="font-display text-2xl @sm:text-4xl text-charcoal leading-tight mb-3">
      Dampak yang Perlu Diperhatikan
    </h2>

    <div className="h-px w-full mb-4 @sm:mb-6 bg-gradient-to-r from-koral to-transparent" />

    <BodyText dropCap>
      Walaupun energi terbarukan memiliki banyak manfaat, setiap teknologi tetap
      mempunyai dampak yang perlu diperhatikan. Oleh karena itu, pemanfaatannya
      harus disertai pengelolaan yang tepat agar keseimbangan lingkungan tetap
      terjaga.
    </BodyText>

    <div className="grid grid-cols-2 gap-3 @sm:gap-4 mt-4 @sm:mt-6">
      {impacts.map((item) => (
        <div
          key={item.code}
          className="rounded-xl bg-navy/[0.04] border border-navy/10 p-3 @sm:p-4"
        >
          <p className="font-display text-xl @sm:text-2xl text-koral">
            {item.code}
          </p>
          <h3 className="font-display text-sm @sm:text-base text-charcoal mt-2">
            {item.title}
          </h3>
          <p className="font-body text-[10px] @sm:text-xs leading-relaxed text-charcoal/60 mt-2">
            {item.desc}
          </p>
        </div>
      ))}
    </div>

    <div className="mt-4 @sm:mt-6">
      <NoteBox label="Kesimpulan" tone="navy">
        Pengembangan energi terbarukan perlu mempertimbangkan keseimbangan
        antara kebutuhan energi, kelestarian lingkungan, dan kesejahteraan
        masyarakat.
      </NoteBox>
    </div>
  </PageShell>
));

Hal19.displayName = "Hal19";
export default Hal19;
