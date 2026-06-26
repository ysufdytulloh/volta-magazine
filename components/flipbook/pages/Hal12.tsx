import { forwardRef } from "react";
import PageShell from "../PageShell";
import BodyText from "../BodyText";
import DamDiagram from "../DamDiagram";
import NoteBox from "../NoteBox";

const Hal12 = forwardRef<HTMLDivElement>((_, ref) =>
  <PageShell ref={ref} pageNumber={12}>
    <div className="flex items-center gap-3 mb-2 @sm:mb-3">
      <span className="font-body text-xs tracking-widest text-amber uppercase">
        D.1 Sumber Energi Dapat Diperbaharui — 05
      </span>
    </div>
    <h2 className="font-display text-2xl @sm:text-4xl text-charcoal leading-tight mb-3 @sm:mb-4">
      Energi Air
    </h2>

    <div className="grid grid-cols-1 @sm:grid-cols-2 gap-4 @sm:gap-6">
      <BodyText dropCap tone="amber">
        Energi air adalah energi yang menghasilkan tenaga air (hydropower)
        dengan memanfaatkan gerakan air dari bendungan atau aliran air yang
        mengalir. Pemanfaatannya paling terlihat lewat Pembangkit Listrik Tenaga
        Air (PLTA), dan sudah lama dipakai manusia karena lebih ramah lingkungan
        dan jumlahnya berlimpah.
      </BodyText>
      <BodyText>
        Pada bagian bawah bendungan terdapat turbin di lubang-lubang saluran
        air. Tugasnya mengubah energi kinetik dari gerakan air jadi energi
        mekanik untuk menggerakkan generator listrik. Energi listrik yang
        dihasilkan dari air ini disebut hidroelektrik.
      </BodyText>
    </div>

    <div className="mt-4 @sm:mt-6">
      <DamDiagram />
    </div>

    <div className="mt-4 @sm:mt-5">
      <NoteBox label="Koneksi Konsep" tone="amber">
        Air yang mengalir membawa energi kinetik. Begitu memutar turbin, energi
        itu berubah jadi energi mekanik, lalu generator mengonversinya jadi
        listrik — rangkaian perubahan energi inilah yang dinamai hidroelektrik.
      </NoteBox>
    </div>
  </PageShell>
);
Hal12.displayName = "Hal12";

export default Hal12;
