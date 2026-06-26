import { forwardRef } from "react";
import PageShell from "../PageShell";
import FormulaBox from "../FormulaBox";
import PullQuote from "../PullQuote";
import BodyText from "../BodyText";
import PageImage from "../PageImage";
import BallDropDiagram from "../BallDropDiagram";

const Hal04 = forwardRef<HTMLDivElement>((_, ref) =>
  <PageShell ref={ref} pageNumber={4}>
    <p className="font-body text-xs tracking-widest text-koral/60 uppercase mb-3 @sm:mb-4">
      A. Energi — 03
    </p>

    <FormulaBox label="Energi Mekanik">EM = EP + EK</FormulaBox>

    <div className="space-y-3 @sm:space-y-5 mt-3 @sm:mt-5">
      <BodyText>
        Energi mekanik adalah jumlah dari energi potensial dan energi kinetik
        yang dimiliki suatu benda — bisa disebut juga energi total. Konsep ini
        penting karena memberi kita cara melihat energi bukan sebagai bagian
        terpisah, tapi satu kesatuan yang terus berubah bentuk.
      </BodyText>
      <PullQuote>
        Besarnya energi mekanik suatu benda selalu tetap, walau energi kinetik
        dan energi potensialnya bisa berubah-ubah.
      </PullQuote>
      <BodyText>
        Bayangkan bola yang dilempar ke atas: di titik tertinggi, energi
        kinetiknya nol tapi energi potensialnya maksimal. Begitu bola jatuh,
        energi potensial berubah jadi kinetik. Jumlah keduanya — energi mekanik
        — tidak pernah berubah dari awal sampai akhir.
      </BodyText>
      <PageImage
        caption="Foto: pendulum / benda jatuh bebas"
        src="/photos/hal04-pendulum.jpg"
      />
    </div>

    <div className="mt-3 @sm:mt-4">
      <BallDropDiagram />
    </div>
  </PageShell>
);
Hal04.displayName = "Hal04";

export default Hal04;
