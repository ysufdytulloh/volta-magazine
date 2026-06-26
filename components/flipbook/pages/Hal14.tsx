import { forwardRef } from "react";
import PageShell from "../PageShell";
import BodyText from "../BodyText";
import GeothermalDiagram from "../GeothermalDiagram";
import NoteBox from "../NoteBox";

const Hal14 = forwardRef<HTMLDivElement>((_, ref) =>
  <PageShell ref={ref} pageNumber={14}>
    <div className="flex items-center gap-3 mb-2 @sm:mb-3">
      <span className="font-body text-xs tracking-widest text-amber uppercase">
        D.1 Sumber Energi Dapat Diperbaharui — 07
      </span>
    </div>
    <h2 className="font-display text-2xl @sm:text-4xl text-charcoal leading-tight mb-3 @sm:mb-4">
      Energi Geotermal
    </h2>

    <div className="grid grid-cols-1 @sm:grid-cols-2 gap-4 @sm:gap-6">
      <BodyText dropCap tone="amber">
        Energi geotermal merupakan energi yang berasal dari sumber panas bumi.
        Jika diibaratkan air dingin dimasukkan ke dalam poros atau lubang batuan
        di bawah permukaan bumi, akan keluar uap air pada poros atau lubang
        lainnya — uap inilah yang menggerakkan turbin dan menghasilkan listrik.
      </BodyText>
      <BodyText>
        Salah satu pembangkit listrik tenaga geotermal di Indonesia adalah PLTP
        Kamojang di Jawa Barat — bukti nyata bagaimana panas bumi negeri ini
        sudah dimanfaatkan sejak lama.
      </BodyText>
    </div>

    <div className="mt-4 @sm:mt-6">
      <GeothermalDiagram />
    </div>

    <div className="mt-4 @sm:mt-5">
      <NoteBox label="Koneksi Konsep" tone="amber">
        Perhatikan rangkaian perubahannya: panas bumi memanaskan air jadi uap
        bertekanan tinggi (energi kinetik), uap itu memutar turbin (energi
        mekanik), lalu generator mengubahnya jadi listrik. Ini persis siklus
        perubahan energi yang sudah kita bahas di Bagian B — cuma titik mulainya
        beda, dari panas bumi.
      </NoteBox>
    </div>
  </PageShell>
);
Hal14.displayName = "Hal14";

export default Hal14;
