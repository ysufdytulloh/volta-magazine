import { forwardRef } from "react";
import PageShell from "../PageShell";
import BodyText from "../BodyText";
import NoteBox from "../NoteBox";
import PageImage from "../PageImage";
import { Thermometer, Wind, Lightbulb, Shirt, Sparkles } from "lucide-react";

const manfaat = [
  { icon: Thermometer, label: "Menghangatkan bumi dan makhluk hidup" },
  { icon: Wind, label: "Membuat udara dan air bersirkulasi" },
  { icon: Lightbulb, label: "Penerangan siang hari, menghemat listrik" },
  { icon: Shirt, label: "Mengeringkan pakaian dan cucian" },
  { icon: Sparkles, label: "Sumber vitamin D dari berjemur teratur" }
];

const Hal09 = forwardRef<HTMLDivElement>((_, ref) =>
  <PageShell ref={ref} pageNumber={9}>
    <p className="font-body text-xs tracking-widest text-amber/60 uppercase mb-3 @sm:mb-4">
      D.1 Sumber Energi Dapat Diperbaharui — 02
    </p>
    <h2 className="font-display text-xl @sm:text-2xl text-charcoal mb-3 @sm:mb-4">
      Manfaat Energi Surya
    </h2>

    <BodyText>
      Energi matahari bisa dikonversi jadi panas maupun listrik lewat Pembangkit
      Listrik Tenaga Surya (PLTS). Tapi manfaatnya jauh lebih luas dari sekadar
      listrik — menyentuh hampir semua sisi kehidupan sehari-hari.
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

    <div className="mt-3 @sm:mt-4 grid grid-cols-1 @sm:grid-cols-2 gap-3 @sm:gap-4">
      <NoteBox label="Sel Surya (Fotovoltaik)" tone="amber">
        Menangkap cahaya matahari dan mengubahnya jadi listrik arus searah (DC)
        lewat efek fotovoltaik, lalu inverter mengonversinya jadi arus
        bolak-balik (AC) yang siap dipakai di rumah.
      </NoteBox>
      <NoteBox label="Tenaga Surya Terkonsentrasi (CSP)" tone="amber">
        Memakai cermin untuk memusatkan sinar matahari, lalu memanaskan fluida
        bersuhu tinggi lewat sistem konsentrator — makin besar konsentrasinya,
        makin tinggi suhu cairan yang dihasilkan.
      </NoteBox>
    </div>

    <div className="mt-3 @sm:mt-4">
      <PageImage
        caption="Foto: panel surya close-up"
        src="/photos/hal09-suryadetail.jpg"
      />
    </div>
  </PageShell>
);
Hal09.displayName = "Hal09";

export default Hal09;
