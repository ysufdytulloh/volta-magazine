import { forwardRef } from "react";
import PageShell from "../PageShell";
import BodyText from "../BodyText";
import PageImage from "../PageImage";
import PullQuote from "../PullQuote";
import NoteBox from "../NoteBox";

const Hal22 = forwardRef<HTMLDivElement>((_, ref) => (
  <PageShell ref={ref} pageNumber={22}>
    <p className="font-body text-xs tracking-widest text-koral uppercase mb-3">
      E. Energi Terbarukan — 05
    </p>

    <h2 className="font-display text-2xl @sm:text-4xl text-charcoal leading-tight mb-3">
      Ketika Ekonomi Berhadapan dengan Lingkungan
    </h2>

    <div className="h-px w-full mb-4 @sm:mb-6 bg-gradient-to-r from-koral to-transparent" />

    <PullQuote>
      Tidak semua pilihan yang menguntungkan secara ekonomi selalu memberikan
      dampak baik bagi lingkungan.
    </PullQuote>

    <div className="mt-4 @sm:mt-5">
      <BodyText dropCap>
        Salah satu contoh konflik antara kepentingan ekonomi dan lingkungan
        dapat ditemukan pada pemanfaatan kelapa sawit sebagai bahan baku
        biodiesel. Biodiesel merupakan bahan bakar yang dapat dibuat dari minyak
        nabati, salah satunya minyak kelapa sawit.
      </BodyText>
    </div>

    <PageImage
      caption="Perkebunan kelapa sawit sebagai sumber bahan baku biodiesel"
      src="/photos/hal24-kelapa-sawit.jpg"
    />

    <div className="grid grid-cols-2 gap-3 @sm:gap-4 mt-4 @sm:mt-5">
      <div className="rounded-xl border border-emerald-700/20 p-3 @sm:p-4">
        <p className="font-body text-[10px] tracking-widest uppercase text-emerald-700">
          Kepentingan Ekonomi
        </p>
        <h3 className="font-display text-base @sm:text-lg text-charcoal mt-2">
          Peluang
        </h3>
        <ul className="font-body text-xs leading-relaxed text-charcoal/65 mt-2 space-y-2">
          <li>• Meningkatkan pendapatan petani.</li>
          <li>• Membuka lapangan pekerjaan.</li>
        </ul>
      </div>

      <div className="rounded-xl border border-koral/30 p-3 @sm:p-4">
        <p className="font-body text-[10px] tracking-widest uppercase text-koral">
          Kepentingan Lingkungan
        </p>
        <h3 className="font-display text-base @sm:text-lg text-charcoal mt-2">
          Risiko
        </h3>
        <ul className="font-body text-xs leading-relaxed text-charcoal/65 mt-2 space-y-2">
          <li>• Hilangnya habitat satwa.</li>
          <li>• Menurunnya keanekaragaman hayati.</li>
          <li>• Berkurangnya kemampuan hutan menyerap karbon.</li>
        </ul>
      </div>
    </div>

    <div className="mt-4">
      <NoteBox label="Pelajaran dari Kasus" tone="navy">
        Pengembangan energi perlu memperhatikan dampak ekonomi sekaligus menjaga
        kelestarian ekosistem.
      </NoteBox>
    </div>
  </PageShell>
));

Hal22.displayName = "Hal22";
export default Hal22;
