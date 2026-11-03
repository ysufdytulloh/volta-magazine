import { forwardRef } from "react";
import PageShell from "../PageShell";
import BodyText from "../BodyText";
import PageImage from "../PageImage";
import PullQuote from "../PullQuote";
import NoteBox from "../NoteBox";

const Hal27 = forwardRef<HTMLDivElement>((_, ref) => (
  <PageShell ref={ref} pageNumber={27}>
    <p className="font-body text-xs tracking-widest text-koral uppercase mb-3">
      F. Strategi Pengembangan Energi — 03
    </p>

    <h2 className="font-display text-2xl @sm:text-4xl text-charcoal leading-tight mb-3">
      Pendidikan sebagai Penggerak Inovasi
    </h2>

    <div className="h-px w-full mb-4 @sm:mb-6 bg-gradient-to-r from-koral to-transparent" />

    <PullQuote>
      Memahami energi adalah langkah awal untuk menciptakan teknologi yang lebih
      baik.
    </PullQuote>

    <div className="mt-4 @sm:mt-5">
      <BodyText dropCap>
        Pendidikan membantu meningkatkan pemahaman dan keterampilan masyarakat
        mengenai energi terbarukan. Siswa tidak hanya mempelajari teori, tetapi
        juga dapat melakukan percobaan dan membuat teknologi sederhana untuk
        memahami cara kerja berbagai sumber energi.
      </BodyText>
    </div>

    {/* <PageImage
      caption="Kegiatan pembelajaran dan eksperimen energi terbarukan"
      src="/photos/hal27-penyimpanan-energi.jpg"
    /> */}

    <h3 className="font-display text-lg @sm:text-xl text-charcoal mt-4 mb-3">
      Belajar Melalui Proyek Sederhana
    </h3>

    <div className="rounded-xl border border-charcoal/10 p-3 @sm:p-4">
      <p className="font-body text-xs tracking-widest text-koral uppercase">
        Contoh Kegiatan
      </p>

      <h3 className="font-display text-lg @sm:text-xl text-charcoal mt-2">
        Membuat Prototipe Kincir Angin
      </h3>

      <p className="font-body text-xs @sm:text-sm leading-relaxed text-charcoal/65 mt-2">
        Siswa dapat membuat kincir angin dari barang bekas, kemudian mengamati
        cara kerja kincir dan mengukur kecepatan angin serta tegangan atau daya
        listrik.
      </p>

      <div className="mt-4 space-y-2">
        {[
          "Mengamati cara kerja kincir.",
          "Mengukur kecepatan angin.",
          "Mengukur tegangan atau daya listrik.",
          "Membandingkan hasil pengukuran.",
          "Memperbaiki bentuk baling-baling.",
        ].map((step, index) => (
          <div key={index} className="flex items-center gap-3">
            <span className="flex items-center justify-center rounded-full bg-koral/10 text-koral w-6 h-6 font-body text-xs">
              {index + 1}
            </span>
            <p className="font-body text-xs text-charcoal/70">{step}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-4">
      <NoteBox label="Hasil Pembelajaran" tone="navy">
        Kegiatan tersebut melatih kemampuan berpikir ilmiah, menganalisis data,
        memecahkan masalah, dan mengembangkan keterampilan teknologi.
      </NoteBox>
    </div>
  </PageShell>
));

Hal27.displayName = "Hal27";
export default Hal27;
