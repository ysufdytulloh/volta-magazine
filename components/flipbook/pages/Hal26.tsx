import { forwardRef } from "react";
import PageShell from "../PageShell";
import BodyText from "../BodyText";
import NoteBox from "../NoteBox";
import {
  Leaf,
  Briefcase,
  Zap,
  RefreshCw,
  Sun,
  Factory,
  Heart
} from "lucide-react";

const manfaat = [
  {
    icon: Leaf,
    label: "Pentingnya menjaga sumber daya alam untuk keberlanjutan"
  },
  {
    icon: Briefcase,
    label:
      "Energi terbarukan berdampak positif pada pekerjaan dan pertumbuhan ekonomi"
  }
];

const journey = [
  { Icon: Zap, label: "A. Energi" },
  { Icon: RefreshCw, label: "B. Perubahan" },
  { Icon: Sun, label: "C. Sumber" },
  { Icon: Leaf, label: "D.1 Terbarukan" },
  { Icon: Factory, label: "D.2 Tak Terbarukan" },
  { Icon: Heart, label: "E. Manfaat" }
];

const Hal26 = forwardRef<HTMLDivElement>((_, ref) =>
  <PageShell ref={ref} pageNumber={26}>
    <p className="font-body text-xs tracking-widest text-amber/60 uppercase mb-3 @sm:mb-4">
      E. Manfaat Energi Terbarukan — 02
    </p>
    <h2 className="font-display text-xl @sm:text-2xl text-charcoal mb-3 @sm:mb-4">
      Keberlanjutan & Ekonomi
    </h2>

    <BodyText>
      Selain soal emisi, energi terbarukan juga punya 2 manfaat lain yang sering
      kelewat dibahas.
    </BodyText>

    <div className="space-y-2 @sm:space-y-2.5 mt-3 @sm:mt-4">
      <p className="font-body text-[10px] tracking-widest text-charcoal/40 uppercase mb-1">
        Manfaat 2 &amp; 3
      </p>
      {manfaat.map(({ icon: Icon, label }, i) =>
        <div key={i} className="flex items-center gap-2.5">
          <Icon size={15} className="text-amber shrink-0" strokeWidth={1.75} />
          <span className="font-body text-xs @sm:text-sm text-charcoal/80">
            {label}
          </span>
        </div>
      )}
    </div>

    <div className="mt-3 @sm:mt-4 grid grid-cols-1 @sm:grid-cols-2 gap-3">
      <NoteBox label="Kenapa Keberlanjutan SDA Penting" tone="amber">
        Berbeda dari minyak bumi atau batubara yang akan habis suatu saat,
        surya, angin, air, dan geotermal terus tersedia — menjaganya berarti
        memastikan generasi berikutnya tetap punya akses energi.
      </NoteBox>
      <NoteBox label="Kenapa Berdampak ke Ekonomi" tone="amber">
        Membangun dan merawat instalasi seperti PLTS, PLTA, atau PLTP butuh
        tenaga kerja dalam jumlah besar — dari konstruksi sampai pemeliharaan
        jangka panjang.
      </NoteBox>
    </div>

    <div className="mt-4 @sm:mt-5 rounded-xl border border-charcoal/10 px-3 @sm:px-5 py-4 @sm:py-5">
      <p className="font-body text-[10px] tracking-widest text-charcoal/40 uppercase text-center mb-3">
        Perjalanan Kita Sejauh Ini
      </p>
      <div className="grid grid-cols-3 @sm:grid-cols-6 gap-2 @sm:gap-3">
        {journey.map(({ Icon, label }, i) =>
          <div key={i} className="text-center">
            <div className="w-9 h-9 @sm:w-10 @sm:h-10 rounded-full bg-charcoal/5 flex items-center justify-center mx-auto mb-1.5">
              <Icon size={16} className="text-charcoal/60" strokeWidth={1.75} />
            </div>
            <p className="font-body text-[8px] @sm:text-[10px] text-charcoal/50 leading-tight">
              {label}
            </p>
          </div>
        )}
      </div>
    </div>

    <div className="mt-4 @sm:mt-5">
      <NoteBox label="Menutup Bagian D & E" tone="amber">
        Dari empat sumber terbarukan, tiga sumber fosil, sampai manfaat-manfaat
        ini — satu kesimpulan yang sama terus muncul: transisi energi bukan
        pilihan, tapi kebutuhan.
      </NoteBox>
    </div>
  </PageShell>
);
Hal26.displayName = "Hal26";

export default Hal26;
