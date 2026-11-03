import { forwardRef } from "react";
import PageShell from "../PageShell";
import BodyText from "../BodyText";
import PullQuote from "../PullQuote";
import NoteBox from "../NoteBox";

const challenges = [
  {
    number: "01",
    title: "Ketergantungan pada Alam",
    desc: "Produksi listrik dari matahari dan angin dipengaruhi cuaca serta kondisi lingkungan.",
  },
  {
    number: "02",
    title: "Biaya Teknologi",
    desc: "Pembangunan pembangkit dan teknologi penyimpanan energi membutuhkan biaya.",
  },
  {
    number: "03",
    title: "Keterbatasan Tenaga Ahli",
    desc: "Diperlukan pelatihan untuk mengoperasikan dan memperbaiki teknologi energi terbarukan.",
  },
  {
    number: "04",
    title: "Dampak Lingkungan",
    desc: "Pembangunan pembangkit tertentu dapat mengganggu ekosistem di sekitarnya.",
  },
  {
    number: "05",
    title: "Penyimpanan Energi",
    desc: "Energi perlu disimpan agar tetap dapat digunakan ketika sumbernya tidak tersedia.",
  },
];

const Hal21 = forwardRef<HTMLDivElement>((_, ref) => (
  <PageShell ref={ref} pageNumber={21}>
    <p className="font-body text-xs tracking-widest text-koral/70 uppercase mb-3 @sm:mb-4">
      E. Energi Terbarukan — 02
    </p>

    <h2 className="font-display text-2xl @sm:text-4xl text-charcoal leading-tight mb-3">
      Tantangan Pengembangan Energi Terbarukan
    </h2>

    <div className="h-px w-full mb-4 @sm:mb-6 bg-gradient-to-r from-koral to-transparent" />

    <BodyText dropCap>
      Meskipun memiliki banyak manfaat, pengembangan energi terbarukan tidak
      terlepas dari berbagai tantangan. Faktor alam, biaya pembangunan,
      ketersediaan tenaga ahli, dan teknologi penyimpanan menjadi beberapa hal
      yang perlu diperhatikan.
    </BodyText>

    <div className="mt-4 @sm:mt-6 space-y-3">
      {challenges.map((item) => (
        <div
          key={item.number}
          className="flex gap-3 @sm:gap-4 border-b border-charcoal/10 pb-3 @sm:pb-4"
        >
          <span className="font-display text-2xl @sm:text-3xl text-koral/70">
            {item.number}
          </span>
          <div className="flex-1">
            <h3 className="font-display text-base @sm:text-lg text-charcoal">
              {item.title}
            </h3>
            <p className="font-body text-xs @sm:text-sm leading-relaxed text-charcoal/65 mt-1">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-4 @sm:mt-5">
      <PullQuote>
        Teknologi energi yang baik bukan hanya mampu menghasilkan listrik,
        tetapi juga harus dapat digunakan secara berkelanjutan.
      </PullQuote>
    </div>

    <div className="mt-4">
      <NoteBox label="Hal yang Perlu Diperhatikan" tone="navy">
        Pengembangan energi terbarukan membutuhkan perencanaan yang
        mempertimbangkan kondisi alam, kesiapan teknologi, biaya, dan kemampuan
        masyarakat.
      </NoteBox>
    </div>
  </PageShell>
));

Hal21.displayName = "Hal21";
export default Hal21;
