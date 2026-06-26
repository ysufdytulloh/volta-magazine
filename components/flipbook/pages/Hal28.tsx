import { forwardRef } from "react";
import PageShell from "../PageShell";
import TriviaSpotlight from "../TriviaSpotlight";

const Hal28 = forwardRef<HTMLDivElement>((_, ref) =>
  <PageShell ref={ref} pageNumber={28}>
    <TriviaSpotlight
      stat="40%"
      statLabel="Potensi Geotermal Dunia"
      title="Kekayaan di Bawah Ring of Fire"
    >
      Indonesia berada di titik pertemuan tiga lempeng tektonik besar,
      menjadikannya bagian dari Ring of Fire yang dipenuhi gunung berapi. Posisi
      geografis inilah yang membuat negeri ini menyimpan sekitar 40% dari total
      potensi panas bumi dunia — kekayaan yang jauh lebih besar dari yang baru
      kita manfaatkan lewat PLTP Kamojang.
    </TriviaSpotlight>
  </PageShell>
);
Hal28.displayName = "Hal28";

export default Hal28;
