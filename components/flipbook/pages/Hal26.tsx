import { forwardRef } from "react";
import PageShell from "../PageShell";
import BodyText from "../BodyText";
import PullQuote from "../PullQuote";
import NoteBox from "../NoteBox";
import PageImage from "../PageImage";

const Hal22 = forwardRef<HTMLDivElement>((_, ref) => (
  <PageShell ref={ref} pageNumber={22}>
    <p className="font-body text-xs tracking-widest text-koral uppercase mb-3">
      F. Strategi Pengembangan Energi — 02
    </p>

    <h2 className="font-display text-2xl @sm:text-4xl text-charcoal leading-tight mb-3">
      Diversifikasi dan Penyimpanan Energi
    </h2>

    <div className="h-px w-full mb-4 @sm:mb-6 bg-gradient-to-r from-koral to-transparent" />

    <BodyText dropCap>
      Diversifikasi energi merupakan upaya menggunakan beberapa jenis sumber
      energi agar kebutuhan tidak hanya bergantung pada satu sumber. Hal ini
      penting karena produksi energi surya, angin, dan air dapat berubah
      mengikuti kondisi alam.
    </BodyText>

    <PullQuote>
      Menggabungkan beberapa sumber energi dapat membantu memenuhi kebutuhan
      listrik secara lebih stabil.
    </PullQuote>

    <div className="mt-4 @sm:mt-5">
      <h3 className="font-display text-lg @sm:text-xl text-charcoal mb-3">
        Contoh Diversifikasi Energi
      </h3>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-amber/10 p-3 @sm:p-4 text-center">
          <span className="font-display text-3xl text-amber">01</span>
          <p className="font-display text-sm text-charcoal mt-2">Panel Surya</p>
          <p className="font-body text-[10px] text-charcoal/60 mt-1">
            Memanfaatkan cahaya matahari.
          </p>
        </div>
        <div className="rounded-xl bg-navy/[0.06] p-3 @sm:p-4 text-center">
          <span className="font-display text-3xl text-navy">02</span>
          <p className="font-display text-sm text-charcoal mt-2">Mikrohidro</p>
          <p className="font-body text-[10px] text-charcoal/60 mt-1">
            Memanfaatkan aliran sungai.
          </p>
        </div>
      </div>

      <p className="font-body text-xs text-charcoal/60 leading-relaxed mt-3">
        Desa yang memiliki sinar matahari tinggi dan aliran sungai deras dapat
        mengkaji penggunaan panel surya dan mikrohidro secara bersamaan.
      </p>
    </div>

    <div className="mt-5 @sm:mt-6">
      <h3 className="font-display text-lg @sm:text-xl text-charcoal mb-3">
        Teknologi Penyimpanan Energi
      </h3>

      <PageImage
        caption="Baterai sebagai teknologi penyimpanan energi listrik"
        src="/photos/hal26-penyimpanan-energi.jpg"
      />

      <BodyText>
        Baterai dapat menyimpan energi listrik ketika sumber energi tersedia,
        kemudian melepaskannya kembali saat dibutuhkan. Sebagian listrik dari
        panel surya pada siang hari dapat disimpan untuk digunakan pada malam
        hari.
      </BodyText>
    </div>

    <div className="mt-4">
      <NoteBox label="Alur Sederhana" tone="navy">
        Panel surya menghasilkan listrik → listrik digunakan atau disimpan dalam
        baterai → energi tersimpan digunakan saat matahari tidak tersedia.
      </NoteBox>
    </div>
  </PageShell>
));

Hal22.displayName = "Hal22";
export default Hal22;
