import { forwardRef } from "react";
import PageShell from "../PageShell";
import PullQuote from "../PullQuote";
import BodyText from "../BodyText";
import PageImage from "../PageImage";
import NoteBox from "../NoteBox";

const Hal20 = forwardRef<HTMLDivElement>((_, ref) => (
  <PageShell ref={ref} pageNumber={20}>
    <div className="flex items-center gap-3 mb-2 @sm:mb-3">
      <span className="w-8 h-px bg-koral" />
      <span className="font-body text-xs tracking-widest text-koral uppercase">
        E. Energi Terbarukan
      </span>
    </div>

    <h2 className="font-display text-2xl @sm:text-4xl text-charcoal leading-tight mb-3 @sm:mb-4">
      Mengapa Energi Terbarukan Penting?
    </h2>

    <div className="h-px w-full mb-4 @sm:mb-6 bg-gradient-to-r from-koral to-transparent" />

    <div className="space-y-3 @sm:space-y-5">
      <PullQuote>
        Masa depan energi tidak hanya ditentukan oleh seberapa banyak energi
        yang kita gunakan, tetapi juga dari mana energi itu berasal.
      </PullQuote>

      <BodyText dropCap>
        Sebagian besar kebutuhan energi manusia masih bergantung pada bahan
        bakar fosil. Penggunaan bahan bakar fosil secara berlebihan dapat
        menghasilkan emisi gas rumah kaca yang berkontribusi terhadap pemanasan
        global. Oleh karena itu, energi terbarukan dikembangkan sebagai salah
        satu alternatif untuk mengurangi ketergantungan terhadap sumber energi
        tersebut.
      </BodyText>

      <BodyText>
        Energi terbarukan memanfaatkan sumber daya alam yang dapat diperbarui
        melalui proses alam, seperti sinar matahari, angin, air, dan panas bumi.
        Pemanfaatannya menjadi salah satu langkah penting dalam membangun sistem
        energi yang lebih berkelanjutan.
      </BodyText>

      <PageImage
        caption="Panel surya sebagai salah satu pemanfaatan energi terbarukan"
        src="/photos/hal20-energiterbarukan.jpg"
      />

      <NoteBox label="Mengapa Penting?" tone="navy">
        Energi terbarukan dapat membantu mengurangi pencemaran udara, menekan
        emisi gas rumah kaca, memanfaatkan sumber daya lokal, membuka lapangan
        pekerjaan, dan mendukung ketahanan energi.
      </NoteBox>
    </div>
  </PageShell>
));

Hal20.displayName = "Hal20";
export default Hal20;
