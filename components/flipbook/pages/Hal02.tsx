import { forwardRef } from "react";
import PageShell from "../PageShell";
import PullQuote from "../PullQuote";
import BodyText from "../BodyText";
import PageImage from "../PageImage";

const Hal02 = forwardRef<HTMLDivElement>((_, ref) =>
  <PageShell ref={ref} pageNumber={2}>
    <div className="flex items-center gap-3 mb-2 @sm:mb-3">
      <span className="w-8 h-px bg-koral" />
      <span className="font-body text-xs tracking-widest text-koral uppercase">
        A.Energi
      </span>
    </div>
    <h2 className="font-display text-2xl @sm:text-4xl text-charcoal leading-tight mb-3 @sm:mb-4">
      Energi: Definisi & Jenis
    </h2>
    <div className="h-px w-full mb-4 @sm:mb-6 bg-gradient-to-r from-koral to-transparent" />

    <div className="space-y-3 @sm:space-y-5">
      <PullQuote>
        Tangan kita bisa berbohong soal suhu, tapi tidak soal usaha — di situlah
        energi bersembunyi.
      </PullQuote>
      <BodyText dropCap>
        Setiap kali kamu berlari, menyalakan lampu, atau sekadar mengangkat buku
        dari atas meja, ada satu hal yang sedang bekerja diam-diam: energi.
        Dalam fisika, energi didefinisikan sebagai kemampuan untuk melakukan
        usaha. Yang menarik, energi punya sifat istimewa — ia tidak pernah
        benar-benar diciptakan, juga tidak pernah dimusnahkan. Energi hanya
        berpindah bentuk, dari satu wujud ke wujud lain, mengikuti aktivitas
        yang sedang berlangsung di sekitarnya. Bahkan saat kamu sedang duduk
        diam membaca ini, tubuhmu tetap menyimpan dan mengolah energi tanpa
        henti.
      </BodyText>
      <BodyText>
        Kalau ditinjau dari cara kerjanya, energi terbagi jadi tiga wajah utama:
        energi potensial (tersimpan, menunggu untuk dilepas), energi kinetik
        (energi gerak, dimiliki segala yang bergerak), dan energi mekanik
        (gabungan keduanya, totalnya selalu konstan).
      </BodyText>
      <PageImage
        caption="Foto: orang berlari / objek bergerak"
        src="/photos/hal02-berlari.jpg"
      />
    </div>
  </PageShell>
);
Hal02.displayName = "Hal02";

export default Hal02;
