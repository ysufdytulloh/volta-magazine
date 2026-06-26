import { forwardRef } from "react";
import PageShell from "../PageShell";
import BodyText from "../BodyText";
import NoteBox from "../NoteBox";
import TrendStat from "../TrendStat";

const Hal16 = forwardRef<HTMLDivElement>((_, ref) =>
  <PageShell ref={ref} pageNumber={16}>
    <div className="flex items-center gap-3 mb-2 @sm:mb-3">
      <span className="w-8 h-px bg-navy" />
      <span className="font-body text-xs tracking-widest uppercase  text-navy">
        D.2 Sumber Energi Tidak Dapat Diperbaharui
      </span>
    </div>

    <NoteBox label="Tentang Sumber Tak Terbarukan" tone="navy">
      Sumber energi tak terbarukan adalah sumber yang tidak bisa diisi atau
      dibuat kembali oleh alam dalam waktu singkat — bukan proses berkelanjutan,
      sehingga jumlahnya sangat terbatas dan bisa habis kapan pun. Sumber ini
      berasal dari perut bumi dalam bentuk cair, gas, dan padat — contohnya
      minyak bumi, gas alam, propane, batu bara, dan uranium.
    </NoteBox>

    <h2 className="font-display text-2xl @sm:text-4xl text-charcoal leading-tight mt-4 @sm:mt-5 mb-3 @sm:mb-4">
      Minyak Bumi
    </h2>

    <div className="grid grid-cols-1 @sm:grid-cols-2 gap-4 @sm:gap-6">
      <BodyText dropCap tone="navy">
        Minyak bumi merupakan sumber energi fosil yang selama ini jadi tulang
        punggung kebutuhan energi Indonesia. Tapi produksinya tidak datang tanpa
        batas — selama 10 tahun terakhir, produksi minyak bumi nasional
        menunjukkan kecenderungan menurun.
      </BodyText>
      <BodyText>
        Penyebabnya: sumur-sumur produksi utama umumnya sudah tua, sementara
        produksi sumur baru relatif masih terbatas — sebuah tren yang terus
        berlanjut dari tahun ke tahun.
      </BodyText>
    </div>

    <div className="mt-4 @sm:mt-5">
      <TrendStat
        direction="down"
        percentage="−18%"
        label="Penurunan produksi minyak bumi nasional, 2009 → 2018"
        from="346 juta barel"
        to="283 juta barel"
      />
    </div>

    <div className="mt-3 @sm:mt-4 flex items-center justify-center gap-2 flex-wrap">
      <span className="font-body text-[10px] @sm:text-xs text-charcoal/50">
        Setara per hari:
      </span>
      <span className="font-display text-sm text-navy">949 ribu bph</span>
      <span className="text-charcoal/30 font-display text-xs">→</span>
      <span className="font-display text-sm text-navy">778 ribu bph</span>
    </div>
  </PageShell>
);
Hal16.displayName = "Hal16";

export default Hal16;
