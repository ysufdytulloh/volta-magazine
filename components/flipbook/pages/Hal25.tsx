import { forwardRef } from "react";
import PageShell from "../PageShell";
import BodyText from "../BodyText";
import PageImage from "../PageImage";
import NoteBox from "../NoteBox";

const regions = [
  { place: "Sinar matahari melimpah", energy: "Energi Surya", code: "01" },
  { place: "Angin kuat dan stabil", energy: "Energi Angin", code: "02" },
  { place: "Aliran sungai deras", energy: "Energi Air", code: "03" },
  { place: "Banyak peternakan", energy: "Biogas", code: "04" },
  { place: "Potensi panas bumi", energy: "Geotermal", code: "05" },
  { place: "Arus laut kuat", energy: "Energi Laut", code: "06" },
];

const Hal21 = forwardRef<HTMLDivElement>((_, ref) => (
  <PageShell ref={ref} pageNumber={21}>
    <div className="flex items-center gap-3 mb-2 @sm:mb-3">
      <span className="w-8 h-px bg-koral" />
      <span className="font-body text-xs tracking-widest text-koral uppercase">
        F. Strategi Pengembangan Energi — 01
      </span>
    </div>

    <h2 className="font-display text-2xl @sm:text-4xl text-charcoal leading-tight mb-2">
      Energi Sesuai Potensi Wilayah
    </h2>

    <div className="h-px w-full mb-3 @sm:mb-4 bg-gradient-to-r from-koral to-transparent" />

    <BodyText dropCap>
      Setiap wilayah memiliki kondisi alam yang berbeda. Karena itu,
      pengembangan energi terbarukan perlu disesuaikan dengan potensi geografis
      dan sumber daya alam yang tersedia. Pemilihan sumber energi yang tepat
      dapat membantu pemanfaatan energi menjadi lebih efektif.
    </BodyText>

    <PageImage
      caption="Potensi alam dapat dimanfaatkan menjadi sumber energi"
      src="/photos/hal25-potensi-wilayah.jpg"
    />

    <h3 className="font-display text-base @sm:text-xl text-charcoal mt-3 @sm:mt-4 mb-2">
      Mengenali Potensi Setiap Wilayah
    </h3>

    <div className="grid grid-cols-2 gap-2 @sm:gap-3">
      {regions.map((item) => (
        <div
          key={item.code}
          className="flex items-start gap-2 rounded-lg border border-charcoal/10 p-2 @sm:p-3"
        >
          <span className="font-display text-sm @sm:text-lg text-koral">
            {item.code}
          </span>

          <div className="min-w-0">
            <p className="font-body text-[10px] @sm:text-xs text-charcoal/60 leading-snug">
              {item.place}
            </p>
            <p className="font-display text-xs @sm:text-sm text-navy mt-1">
              {item.energy}
            </p>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-3">
      <NoteBox label="Contoh Penerapan" tone="navy">
        Pulau kecil dengan sinar matahari tinggi dan akses bahan bakar yang
        terbatas dapat mengembangkan pembangkit listrik tenaga surya yang
        dilengkapi baterai penyimpanan.
      </NoteBox>
    </div>
  </PageShell>
));

Hal21.displayName = "Hal21";
export default Hal21;
