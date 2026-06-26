import { forwardRef } from "react";
import PageShell from "../PageShell";
import BodyText from "../BodyText";
import NoteBox from "../NoteBox";
import PageImage from "../PageImage";
import { Sun, Wind, Droplets, Flame } from "lucide-react";

const recap = [
  { Icon: Sun, label: "Surya" },
  { Icon: Wind, label: "Angin" },
  { Icon: Droplets, label: "Air" },
  { Icon: Flame, label: "Geotermal" }
];

const Hal15 = forwardRef<HTMLDivElement>((_, ref) =>
  <PageShell ref={ref} pageNumber={15}>
    <p className="font-body text-xs tracking-widest text-amber/60 uppercase mb-3 @sm:mb-4">
      D.1 Sumber Energi Dapat Diperbaharui — 08
    </p>
    <h2 className="font-display text-xl @sm:text-2xl text-charcoal mb-3 @sm:mb-4">
      Dari 1 Unit Jadi 7
    </h2>

    <BodyText>
      Cerita PLTP Kamojang dimulai sederhana: tahun 1982, instalasi ini cuma
      punya 1 unit pembangkit. Tapi selama lebih dari empat dekade, ia terus
      dikembangkan — sampai hari ini mengoperasikan 7 unit pembangkit sekaligus,
      dengan total daya listrik 375 MW. Pertumbuhan ini jadi bukti nyata bahwa
      energi geotermal di Indonesia bukan sekadar teori, tapi sudah berjalan dan
      terus berkembang sejak lama.
    </BodyText>

    <div className="mt-3 @sm:mt-4">
      <PageImage
        caption="Foto: instalasi geotermal"
        src="/photos/hal15-geotermal.jpg"
      />
    </div>

    <div className="mt-4 @sm:mt-5 rounded-xl border border-charcoal/10 px-4 py-4 @sm:py-5">
      <p className="font-body text-[10px] tracking-widest text-charcoal/40 uppercase text-center mb-3">
        Empat Sumber yang Sudah Kita Pelajari
      </p>
      <div className="flex items-center justify-center gap-4 @sm:gap-6">
        {recap.map(({ Icon, label }, i) =>
          <div key={i} className="text-center">
            <div className="w-10 h-10 @sm:w-11 @sm:h-11 rounded-full bg-amber/15 flex items-center justify-center mx-auto mb-1.5">
              <Icon size={18} className="text-amber" strokeWidth={1.75} />
            </div>
            <p className="font-body text-[9px] @sm:text-[10px] text-charcoal/60">
              {label}
            </p>
          </div>
        )}
      </div>
    </div>

    <div className="mt-4 @sm:mt-5">
      <NoteBox label="Menutup Bagian D.1" tone="amber">
        Keempatnya sama-sama tidak akan habis — tapi seberapa besar potensinya
        tetap bergantung pada kondisi geografis tiap wilayah. Selanjutnya, kita
        akan beralih ke sisi sebaliknya: sumber energi yang justru terbatas
        jumlahnya.
      </NoteBox>
    </div>
  </PageShell>
);
Hal15.displayName = "Hal15";

export default Hal15;
