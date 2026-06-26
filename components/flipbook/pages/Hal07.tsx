import { forwardRef } from "react";
import PageShell from "../PageShell";
import NoteBox from "../NoteBox";
import { Sun, Wind, Droplets, Flame, Mountain, Atom } from "lucide-react";

const renewable = [
  { icon: Sun, label: "Matahari" },
  { icon: Wind, label: "Angin" },
  { icon: Droplets, label: "Air & ombak" }
];

const nonRenewable = [
  { icon: Flame, label: "Minyak bumi & gas alam" },
  { icon: Mountain, label: "Batu bara" },
  { icon: Atom, label: "Nuklir" }
];

const Hal07 = forwardRef<HTMLDivElement>((_, ref) =>
  <PageShell ref={ref} pageNumber={7}>
    <p className="font-body text-xs tracking-widest text-koral/60 uppercase mb-3 @sm:mb-4 ">
      C. Sumber Energi — 02
    </p>
    <h2 className="font-display text-xl @sm:text-3xl text-charcoal text-center mb-2 @sm:mb-3">
      Terbarukan vs Tak Terbarukan
    </h2>
    <p className="font-body text-xs @sm:text-sm text-charcoal/60 text-center max-w-md mx-auto mb-4 @sm:mb-6">
      Dua kelompok besar sumber energi yang dibedakan dari satu hal mendasar:
      seberapa cepat alam bisa menggantikannya.
    </p>

    <div className="relative grid grid-cols-2 rounded-xl overflow-hidden border border-charcoal/10 shrink-0">
      <div className="bg-amber/15 px-4 @sm:px-6 py-5 @sm:py-7">
        <p className="font-display text-base @sm:text-lg text-charcoal mb-1">
          Terbarukan
        </p>
        <p className="font-body text-[10px] @sm:text-xs text-charcoal/50 mb-3 @sm:mb-4">
          Terus tersedia, tidak akan habis
        </p>
        <div className="space-y-2.5 @sm:space-y-3">
          {renewable.map(({ icon: Icon, label }, i) =>
            <div key={i} className="flex items-center gap-2">
              <Icon
                size={14}
                className="text-amber shrink-0"
                strokeWidth={1.75}
              />
              <span className="font-body text-xs @sm:text-sm text-charcoal/80">
                {label}
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="bg-charcoal px-4 @sm:px-6 py-5 @sm:py-7">
        <p className="font-display text-base @sm:text-lg text-cream mb-1">
          Tak Terbarukan
        </p>
        <p className="font-body text-[10px] @sm:text-xs text-cream/50 mb-3 @sm:mb-4">
          Terbentuk jutaan tahun, jumlahnya terbatas
        </p>
        <div className="space-y-2.5 @sm:space-y-3">
          {nonRenewable.map(({ icon: Icon, label }, i) =>
            <div key={i} className="flex items-center gap-2">
              <Icon
                size={14}
                className="text-koral shrink-0"
                strokeWidth={1.75}
              />
              <span className="font-body text-xs @sm:text-sm text-cream/80">
                {label}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 @sm:w-12 @sm:h-12 rounded-full bg-cream border border-charcoal/15 flex items-center justify-center shadow-sm">
        <span className="font-display text-xs @sm:text-sm text-charcoal/60">
          vs
        </span>
      </div>
    </div>

    <div className="mt-4 @sm:mt-6 space-y-3 @sm:space-y-4">
      <NoteBox label="Tahukah Kamu">
        Matahari adalah sumber energi terbesar di bumi — sekaligus pusat tata
        surya yang dikelilingi delapan planet, termasuk bumi tempat kita
        berdiri.
      </NoteBox>
      <NoteBox label="Kenapa Ini Penting">
        Karena sumber tak terbarukan punya batas, banyak negara di dunia kini
        mulai bergeser ke sumber terbarukan sebagai bagian dari strategi energi
        jangka panjang.
      </NoteBox>
    </div>
  </PageShell>
);
Hal07.displayName = "Hal07";

export default Hal07;
