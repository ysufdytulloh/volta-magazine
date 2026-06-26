import { forwardRef } from "react";
import PageShell from "../PageShell";
import BodyText from "../BodyText";
import Timeline from "../Timeline";
import WindTurbineDiagram from "../WindTurbineDiagram";
import NoteBox from "../NoteBox";

const Hal10 = forwardRef<HTMLDivElement>((_, ref) =>
  <PageShell ref={ref} pageNumber={10}>
    <div className="flex items-center gap-3 mb-2 @sm:mb-3">
      <span className="font-body text-xs tracking-widest text-amber uppercase">
        D.1 Sumber Energi Dapat Diperbaharui — 03
      </span>
    </div>
    <h2 className="font-display text-2xl @sm:text-4xl text-charcoal leading-tight mb-3 @sm:mb-4">
      Energi Angin
    </h2>

    <div className="grid grid-cols-1 @sm:grid-cols-2 gap-4 @sm:gap-6">
      <BodyText dropCap tone="amber">
        Energi angin adalah energi yang dihasilkan udara yang berhembus di
        permukaan bumi. Energi ini bisa diubah jadi energi mekanik untuk
        menghasilkan usaha — tujuannya selalu berkaitan dengan kelangsungan
        kehidupan manusia di muka bumi.
      </BodyText>
      <BodyText>
        Pemanfaatannya kini banyak dilakukan negara di seluruh dunia, karena
        sumbernya tidak terbatas jumlahnya. Caranya biasa lewat kincir angin
        yang dihubungkan ke generator atau turbin, mengubah hembusan angin jadi
        tenaga listrik.
      </BodyText>
    </div>

    <div className="mt-4 @sm:mt-6">
      <Timeline
        tone="amber"
        span="± 2.700 tahun"
        items={[
          {
            year: "Abad ke-7 SM",
            label:
              "Persia, kincir untuk menggiling padi, memotong kayu, & energi mekanik lain"
          },
          {
            year: "Masa Kini",
            label: "Turbin + generator modern untuk tenaga listrik"
          }
        ]}
      />
    </div>

    <div className="mt-4 @sm:mt-6">
      <WindTurbineDiagram />
    </div>

    <div className="mt-4 @sm:mt-6">
      <NoteBox label="Koneksi Konsep" tone="amber">
        Angin yang berhembus sebenarnya membawa energi kinetik dalam wujud
        paling murni — udara yang bergerak. Begitu turbin menangkapnya, energi
        itu berubah lagi jadi listrik, persis siklus perubahan energi yang kita
        bahas di halaman sebelumnya.
      </NoteBox>
    </div>
  </PageShell>
);
Hal10.displayName = "Hal10";

export default Hal10;
