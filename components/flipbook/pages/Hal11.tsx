import { forwardRef } from "react";
import PageShell from "../PageShell";
import BodyText from "../BodyText";
import NoteBox from "../NoteBox";
import PageImage from "../PageImage";
import { Zap, Sailboat, Shirt } from "lucide-react";

const manfaat = [
  {
    icon: Zap,
    label: "Menggerakkan kincir & turbin angin, sehingga menghasilkan listrik"
  },
  { icon: Sailboat, label: "Mendorong perahu layar agar dapat berjalan" },
  { icon: Shirt, label: "Membantu proses pengeringan pakaian" }
];

const Hal11 = forwardRef<HTMLDivElement>((_, ref) =>
  <PageShell ref={ref} pageNumber={11}>
    <p className="font-body text-xs tracking-widest text-amber/60 uppercase mb-3 @sm:mb-4">
      D.1 Sumber Energi Dapat Diperbaharui — 04
    </p>
    <h2 className="font-display text-xl @sm:text-2xl text-charcoal mb-3 @sm:mb-4">
      Manfaat Energi Angin
    </h2>

    <BodyText>
      Manfaat energi angin sebenarnya jauh lebih tua dari sekadar listrik.
      Sebelum ada turbin modern, manusia sudah memakai hembusan angin sebagai
      &ldquo;mesin&rdquo; alami selama ribuan tahun — mendorong perahu
      menyeberangi lautan, menggerakkan kincir untuk berbagai keperluan, sampai
      membantu menjemur dan mengeringkan pakaian secara alami.
    </BodyText>

    <div className="space-y-2 @sm:space-y-2.5 mt-3 @sm:mt-4">
      {manfaat.map(({ icon: Icon, label }, i) =>
        <div key={i} className="flex items-center gap-2.5">
          <Icon size={15} className="text-amber shrink-0" strokeWidth={1.75} />
          <span className="font-body text-xs @sm:text-sm text-charcoal/80">
            {label}
          </span>
        </div>
      )}
    </div>

    <div className="mt-3 @sm:mt-4">
      <NoteBox label="Beda dari Energi Surya" tone="amber">
        Sama seperti energi surya, energi angin tidak pernah habis. Bedanya,
        angin bisa dimanfaatkan siang maupun malam — selama anginnya bertiup,
        turbin tetap berputar, tanpa perlu menunggu matahari terbit.
      </NoteBox>
    </div>

    <div className="mt-3 @sm:mt-4">
      <PageImage
        caption="Foto: ladang turbin angin"
        src="/photos/hal11-turbinangin.jpg"
      />
    </div>
  </PageShell>
);
Hal11.displayName = "Hal11";

export default Hal11;
