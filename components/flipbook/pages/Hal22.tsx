import { forwardRef } from "react";
import PageShell from "../PageShell";
import BodyText from "../BodyText";
import PageImage from "../PageImage";
import PullQuote from "../PullQuote";

const benefits = [
  {
    number: "01",
    title: "Lingkungan Lebih Bersih",
    desc: "Membantu mengurangi pencemaran udara dan ketergantungan pada bahan bakar fosil.",
  },
  {
    number: "02",
    title: "Emisi Lebih Rendah",
    desc: "Membantu menekan emisi gas rumah kaca dari penggunaan energi.",
  },
  {
    number: "03",
    title: "Potensi Lokal",
    desc: "Memanfaatkan sumber daya alam yang tersedia di setiap wilayah.",
  },
  {
    number: "04",
    title: "Peluang Ekonomi",
    desc: "Membuka lapangan pekerjaan dan meningkatkan pendapatan masyarakat.",
  },
];

const Hal20 = forwardRef<HTMLDivElement>((_, ref) => (
  <PageShell ref={ref} pageNumber={20}>
    <p className="font-body text-xs tracking-widest text-koral uppercase mb-3">
      E. Energi Terbarukan — 03
    </p>

    <h2 className="font-display text-2xl @sm:text-4xl text-charcoal leading-tight mb-3">
      Dampak Positif bagi Lingkungan dan Masyarakat
    </h2>

    <div className="h-px w-full mb-4 @sm:mb-6 bg-gradient-to-r from-koral to-transparent" />

    {/* <PageImage
      caption="Pemanfaatan energi surya untuk mendukung kebutuhan listrik"
      src="/photos/hal22-energi-matahari-angin.jpg"
    /> */}

    <div className="mt-4 @sm:mt-5">
      <BodyText dropCap>
        Penggunaan energi terbarukan dapat memberikan manfaat yang dirasakan
        oleh lingkungan maupun masyarakat. Selain membantu mengurangi
        ketergantungan terhadap bahan bakar fosil, pengembangan energi ini juga
        dapat mendorong pertumbuhan ekonomi dan pemanfaatan sumber daya lokal.
      </BodyText>
    </div>

    <div className="grid grid-cols-2 gap-3 @sm:gap-4 mt-4 @sm:mt-6">
      {benefits.map((item) => (
        <div
          key={item.number}
          className="rounded-xl border border-charcoal/10 p-3 @sm:p-4"
        >
          <span className="font-display text-2xl text-koral">
            {item.number}
          </span>
          <h3 className="font-display text-sm @sm:text-base text-charcoal mt-2">
            {item.title}
          </h3>
          <p className="font-body text-[10px] @sm:text-xs leading-relaxed text-charcoal/60 mt-2">
            {item.desc}
          </p>
        </div>
      ))}
    </div>

    <div className="mt-4 @sm:mt-5">
      <PullQuote>
        Energi terbarukan bukan hanya tentang menghasilkan listrik, tetapi juga
        tentang menciptakan manfaat bagi kehidupan.
      </PullQuote>
    </div>
  </PageShell>
));

Hal20.displayName = "Hal20";
export default Hal20;
