import { forwardRef } from "react";
import PageShell from "../PageShell";
import BodyText from "../BodyText";
import PullQuote from "../PullQuote";
import NoteBox from "../NoteBox";
import { Zap, Flame, Lightbulb, Battery, Wind, Sun } from "lucide-react";

const transformations = [
  {
    from: Zap,
    to: Flame,
    label: "Listrik → Panas",
    example: "Setrika, rice cooker, kompor listrik"
  },
  { from: Zap, to: Lightbulb, label: "Listrik → Cahaya", example: "Lampu" },
  {
    from: Zap,
    to: Battery,
    label: "Listrik → Kimia",
    example: "Pengisian aki & baterai HP"
  },
  {
    from: Zap,
    to: Wind,
    label: "Listrik → Gerak",
    example: "Mesin cuci, kipas angin, turbin"
  },
  { from: Sun, to: Zap, label: "Cahaya → Listrik", example: "Sel surya" },
  { from: Wind, to: Zap, label: "Gerak → Listrik", example: "Dinamo, PLTA" },
  { from: Battery, to: Zap, label: "Kimia → Listrik", example: "Baterai, aki" }
];

const Hal05 = forwardRef<HTMLDivElement>((_, ref) =>
  <PageShell ref={ref} pageNumber={5}>
    <div className="flex items-center gap-3 mb-2 @sm:mb-3">
      <span className="w-8 h-px bg-koral" />
      <span className="font-body text-xs tracking-widest text-koral uppercase">
        B. Perubahan Energi
      </span>
    </div>
    <h2 className="font-display text-2xl @sm:text-4xl text-charcoal leading-tight mb-3 @sm:mb-4">
      7 Wajah Perubahan Energi
    </h2>
    <div className="h-px w-full mb-4 @sm:mb-6 bg-linear-to-r from-koral to-transparent shrink-0" />

    <BodyText>
      Perubahan energi bukan cuma teori di buku pelajaran — ia terjadi di
      sekitar kita hampir setiap saat, dari dapur sampai kamar tidur. Memahami
      fenomena ini sejalan dengan cara sains bekerja: mengamati kejadian
      sehari-hari, lalu memanfaatkannya untuk keperluan manusia. Berikut tujuh
      transformasi paling umum yang mungkin sudah sering kamu temui tanpa sadar.
    </BodyText>

    <div className="grid grid-cols-1 @sm:grid-cols-2 gap-2.5 @sm:gap-3 mt-4 @sm:mt-5">
      {transformations.map(({ from: From, to: To, label, example }, i) =>
        <div
          key={i}
          className="flex items-center gap-3 bg-charcoal/[0.03] border border-charcoal/10 rounded-lg px-3 py-2.5"
        >
          <div className="flex items-center gap-1.5 shrink-0">
            <From size={16} className="text-amber" strokeWidth={1.75} />
            <span className="text-charcoal/30 font-display text-sm">→</span>
            <To size={16} className="text-koral" strokeWidth={1.75} />
          </div>
          <div>
            <p className="font-body text-xs @sm:text-sm text-charcoal/80 font-medium">
              {label}
            </p>
            <p className="font-body text-[10px] @sm:text-xs text-charcoal/50">
              {example}
            </p>
          </div>
        </div>
      )}
    </div>

    <div className="mt-1.5 @sm:mt-2 space-y-3 @sm:space-y-4">
      <PullQuote>
        Apapun bentuk yang ditempuhnya, energi tidak pernah benar-benar hilang —
        ia cuma pindah rumah, dari satu wujud ke wujud lain.
      </PullQuote>
      <NoteBox label="Catatan">
        Ingat EM = EP + EK dari halaman sebelumnya? Prinsip yang sama berlaku di
        sini — berapa pun banyaknya energi berpindah wujud, jumlah totalnya
        tetap terjaga, sesuai hukum kekekalan energi.
      </NoteBox>
    </div>
  </PageShell>
);
Hal05.displayName = "Hal05";

export default Hal05;
