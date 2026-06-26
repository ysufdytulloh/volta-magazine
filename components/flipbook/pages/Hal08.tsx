import { forwardRef } from "react";
import PageShell from "../PageShell";
import BodyText from "../BodyText";
import NoteBox from "../NoteBox";
import PageImage from "../PageImage";

const Hal08 = forwardRef<HTMLDivElement>((_, ref) =>
  <PageShell ref={ref} pageNumber={8}>
    <PageImage caption="Foto: panel surya" src="/photos/hal08-suryapanel.jpg" />

    <div className="flex items-center gap-3 mt-4 @sm:mt-5 mb-2 @sm:mb-3">
      <span className="w-8 h-px bg-amber" />
      <span className="font-body text-xs tracking-widest text-amber uppercase">
        D.1 Sumber Energi Dapat Diperbaharui
      </span>
    </div>

    <NoteBox label="Tentang Sumber Terbarukan" tone="amber">
      Sumber energi terbarukan tidak akan habis meski terus digunakan — mulai
      dari panas bumi, angin, bioenergi, sinar matahari, sampai aliran air dan
      perbedaan suhu lapisan laut. Sifat inilah yang membuatnya disebut juga
      energi alternatif: pengganti bahan bakar konvensional tanpa efek samping
      yang merugikan. Empat yang paling umum dimanfaatkan akan kita bahas satu
      per satu, dimulai dari energi surya.
    </NoteBox>

    <h2 className="font-display text-2xl @sm:text-4xl text-charcoal leading-tight mt-4 @sm:mt-5 mb-3 @sm:mb-4">
      Energi Surya
    </h2>

    <div className="grid grid-cols-1 @sm:grid-cols-2 gap-4 @sm:gap-6">
      <BodyText dropCap tone="amber">
        Energi surya merupakan sumber energi utama di muka bumi — mulai dari
        tumbuhan yang berfotosintesis memakai sinar matahari, sampai
        penggunaannya sebagai sumber listrik. Teknologi pengubahnya disebut sel
        surya atau fotovoltaik, komponen dengan dua terminal yang mengubah
        cahaya jadi listrik.
      </BodyText>
      <BodyText>
        Selain fotovoltaik, sinar matahari juga dimanfaatkan lewat kompor
        bertenaga surya untuk memasak, seperti yang sudah dipakai di India.
        Menurut WMO, ada dua cara utama konversi energi matahari: sel surya
        (efek fotovoltaik), dan tenaga surya terkonsentrasi (CSP) yang memakai
        cermin untuk memanaskan fluida bersuhu tinggi.
      </BodyText>
    </div>

    <div className="mt-3 @sm:mt-4">
      <NoteBox label="Sejarah Singkat" tone="amber">
        Teknologi sel surya pertama kali dikenalkan oleh fisikawan Prancis
        Antoine-Cesar pada tahun 1839.
      </NoteBox>
    </div>
  </PageShell>
);
Hal08.displayName = "Hal08";

export default Hal08;
