import { forwardRef } from "react";
import PageShell from "../PageShell";
import BodyText from "../BodyText";
import NoteBox from "../NoteBox";
import RankBadge from "../RankBadge";

const Hal23 = forwardRef<HTMLDivElement>((_, ref) =>
  <PageShell ref={ref} pageNumber={23}>
    <p className="font-body text-xs tracking-widest text-navy/60 uppercase mb-3 @sm:mb-4">
      D.2 Sumber Energi Tidak Dapat Diperbaharui — 08
    </p>
    <h2 className="font-display text-xl @sm:text-2xl text-charcoal mb-3 @sm:mb-4">
      Ke Mana Batubara Indonesia Pergi?
    </h2>

    <BodyText>
      Dari 357 juta ton batubara yang diekspor pada 2018, sebagian besar
      digunakan untuk memenuhi permintaan dua negara: China dan India — dua
      pasar terbesar batubara Indonesia di kancah global.
    </BodyText>

    <div className="flex justify-center gap-3 mt-3 @sm:mt-4">
      <span className="font-display text-sm @sm:text-base text-charcoal bg-charcoal/5 border border-charcoal/10 rounded-full px-4 py-1.5">
        🇨🇳 China
      </span>
      <span className="font-display text-sm @sm:text-base text-charcoal bg-charcoal/5 border border-charcoal/10 rounded-full px-4 py-1.5">
        🇮🇳 India
      </span>
    </div>

    <div className="mt-4 @sm:mt-5">
      <RankBadge
        title="Salah Satu Eksportir Batubara Terbesar Dunia"
        detail="Bersama Australia, Indonesia jadi pemasok utama kebutuhan batubara global"
      />
    </div>

    <div className="mt-4 @sm:mt-5">
      <NoteBox label="Koneksi Konsep" tone="navy">
        Berbeda dari gas bumi yang porsi ekspornya terus menyusut, batubara
        justru jadi komoditas ekspor utama — porsinya (63%) jauh lebih besar
        dari yang ditahan untuk kebutuhan dalam negeri.
      </NoteBox>
    </div>
  </PageShell>
);
Hal23.displayName = "Hal23";

export default Hal23;
