import { forwardRef } from "react";
import PageShell from "../PageShell";
import BodyText from "../BodyText";
import NoteBox from "../NoteBox";
import { CloudOff, Factory, Sun } from "lucide-react";

const manfaat = [
  {
    icon: CloudOff,
    label: "Energi terbarukan membantu mengurangi emisi gas rumah kaca"
  }
];

const Hal25 = forwardRef<HTMLDivElement>((_, ref) =>
  <PageShell ref={ref} pageNumber={25}>
    <div className="flex items-center gap-3 mb-2 @sm:mb-3">
      <span className="w-8 h-px bg-amber" />
      <span className="font-body text-xs tracking-widest text-amber uppercase">
        E. Manfaat Energi Terbarukan
      </span>
    </div>
    <h2 className="font-display text-2xl @sm:text-4xl text-charcoal leading-tight mb-3 @sm:mb-4">
      Mengapa Ini Penting
    </h2>

    <div className="grid grid-cols-1 @sm:grid-cols-2 gap-4 @sm:gap-6">
      <BodyText dropCap tone="amber">
        Setelah menjelajahi sumber energi terbarukan dan tak terbarukan, satu
        pertanyaan wajar muncul: kenapa transisi ke energi terbarukan ini terus
        didorong di banyak negara, termasuk Indonesia?
      </BodyText>
      <BodyText>
        Ingat proses pembentukan minyak bumi, gas bumi, dan batubara yang sudah
        kita bahas — ketiganya dibakar untuk menghasilkan energi, dan pembakaran
        itulah yang melepaskan emisi gas rumah kaca ke atmosfer.
      </BodyText>
    </div>

    <div className="mt-4 @sm:mt-5">
      <p className="font-body text-[10px] tracking-widest text-charcoal/40 uppercase mb-2">
        Manfaat 1
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

    <div className="mt-4 @sm:mt-5 rounded-xl border border-charcoal/10 px-4 @sm:px-6 py-4 @sm:py-5">
      <div className="grid grid-cols-2 gap-4 @sm:gap-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-1.5 mb-2">
            <Factory size={18} className="text-koral" strokeWidth={1.75} />
          </div>
          <p className="font-body text-xs @sm:text-sm text-charcoal/80 font-medium">
            Energi Fosil
          </p>
          <p className="font-body text-[10px] @sm:text-xs text-charcoal/50 mt-1">
            Menghasilkan emisi
          </p>
        </div>
        <div className="text-center border-l border-charcoal/10">
          <div className="flex items-center justify-center mb-2">
            <Sun size={18} className="text-amber" strokeWidth={1.75} />
          </div>
          <p className="font-body text-xs @sm:text-sm text-charcoal/80 font-medium">
            Energi Terbarukan
          </p>
          <p className="font-body text-[10px] @sm:text-xs text-charcoal/50 mt-1">
            Hampir tanpa emisi
          </p>
        </div>
      </div>
    </div>

    <div className="mt-4 @sm:mt-5">
      <NoteBox label="Bagaimana Mekanismenya" tone="amber">
        Gas rumah kaca yang terlepas ke atmosfer berfungsi seperti selimut — ia
        memerangkap panas matahari yang seharusnya kembali ke luar angkasa,
        sehingga suhu bumi naik secara bertahap. Makin sedikit pembakaran bahan
        bakar fosil, makin sedikit pula gas ini yang terlepas.
      </NoteBox>
    </div>
  </PageShell>
);
Hal25.displayName = "Hal25";

export default Hal25;
