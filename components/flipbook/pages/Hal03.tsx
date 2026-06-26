import { forwardRef } from "react";
import PageShell from "../PageShell";
import FormulaBox from "../FormulaBox";
import BodyText from "../BodyText";
import PageImage from "../PageImage";

const Hal03 = forwardRef<HTMLDivElement>((_, ref) =>
  <PageShell ref={ref} pageNumber={3}>
    <p className="font-body text-xs tracking-widest text-koral/60 uppercase mb-3 @sm:mb-4">
      A. Energi — 02
    </p>

    <div className="grid grid-cols-2 gap-3 @sm:gap-4 mb-4 @sm:mb-6">
      <FormulaBox label="Energi Potensial">EP = m · g · h</FormulaBox>
      <FormulaBox label="Energi Kinetik">EK = ½ · m · v²</FormulaBox>
    </div>

    <div className="space-y-3 @sm:space-y-5">
      <BodyText>
        Energi potensial adalah energi yang tersimpan dalam suatu benda akibat
        kedudukan atau posisinya. Ia terbagi menjadi dua: energi potensial
        gravitasi, yang besarnya bergantung pada ketinggian benda dari permukaan
        tanah, dan energi potensial elastis, yang muncul akibat regangan atau
        tekanan pada suatu material. Karena itu, energi potensial sering disebut
        juga energi diam — sebuah apel yang menggantung di pohon, atau karet
        gelang yang sedang ditarik, keduanya menyimpan energi meski tidak sedang
        bergerak sama sekali.
      </BodyText>

      <PageImage
        caption="Foto: sepeda dikayuh / benda di ketinggian"
        src="/photos/hal03-sepeda.jpg"
      />

      <BodyText>
        Energi kinetik sebaliknya, hanya dimiliki benda yang sedang bergerak.
        Besarnya berbanding lurus dengan massa benda dan kuadrat kecepatannya —
        artinya, benda yang lebih berat atau lebih cepat akan membawa energi
        kinetik yang jauh lebih besar. Sepeda yang dikayuh, pesawat yang
        terbang, bahkan hewan yang berlari, semuanya membawa energi kinetik
        dalam gerakannya. Begitu benda berhenti bergerak, energi kinetiknya pun
        ikut menghilang — atau lebih tepatnya, berubah bentuk menjadi energi
        lain.
      </BodyText>
    </div>
  </PageShell>
);
Hal03.displayName = "Hal03";

export default Hal03;
