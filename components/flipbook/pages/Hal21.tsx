import { forwardRef } from "react";
import PageShell from "../PageShell";
import BodyText from "../BodyText";
import NoteBox from "../NoteBox";
import PageImage from "../PageImage";
import { StatModule, StatPill } from "../StatModule";
import { Ship, GitBranch } from "lucide-react";
import ProgressMetric from "../ProgressMetric";

const Hal21 = forwardRef<HTMLDivElement>((_, ref) =>
  <PageShell ref={ref} pageNumber={21}>
    <p className="font-body text-xs tracking-widest text-navy/60 uppercase mb-3 @sm:mb-4">
      D.2 Sumber Energi Tidak Dapat Diperbaharui — 06
    </p>
    <h2 className="font-display text-xl @sm:text-2xl text-charcoal mb-3 @sm:mb-4">
      LNG & Gas Pipa
    </h2>

    <BodyText>
      Gas bumi yang diekspor disalurkan lewat dua bentuk: LNG (gas alam cair)
      dan gas pipa, dengan total 1,2 juta MMSCF pada 2018 — sebagian kecil dari
      total produksi yang sebagian besar justru ditahan untuk kebutuhan
      domestik.
    </BodyText>

    <div className="flex justify-center gap-6 @sm:gap-8 mt-3 @sm:mt-4">
      <div className="flex items-center gap-2">
        <Ship size={16} className="text-navy" strokeWidth={1.75} />
        <span className="font-body text-xs @sm:text-sm text-charcoal/70">
          LNG (kapal tanker)
        </span>
      </div>
      <div className="flex items-center gap-2">
        <GitBranch size={16} className="text-amber" strokeWidth={1.75} />
        <span className="font-body text-xs @sm:text-sm text-charcoal/70">
          Gas Pipa
        </span>
      </div>
    </div>

    <div className="mt-3 @sm:mt-4">
      <ProgressMetric
        label="Ekspor Gas Bumi 2018"
        value="1,2 Juta MMSCF"
        percentage={41}
        caption="≈ 41% dari total produksi nasional 2,9 juta MMSCF, lewat LNG & gas pipa"
        barColor="bg-amber"
      />
    </div>

    <div className="mt-3 @sm:mt-4">
      <PageImage
        caption="Foto: instalasi gas / LNG terminal"
        src="/photos/hal21-lngterminal.jpg"
      />
    </div>

    <div className="mt-3 @sm:mt-4">
      <NoteBox label="Satu Benang Merah" tone="navy">
        Sama seperti minyak bumi, gas bumi pun menghadapi pergeseran arah —
        kebutuhan domestik yang terus tumbuh membuat porsi ekspornya makin
        menyusut dari tahun ke tahun.
      </NoteBox>
    </div>
  </PageShell>
);
Hal21.displayName = "Hal21";

export default Hal21;
