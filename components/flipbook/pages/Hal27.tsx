import { forwardRef } from "react";
import PageShell from "../PageShell";
import TriviaSpotlight from "../TriviaSpotlight";

const Hal27 = forwardRef<HTMLDivElement>((_, ref) =>
  <PageShell ref={ref} pageNumber={27}>
    <TriviaSpotlight
      stat="1839"
      statLabel="Tahun Ditemukan"
      title="187 Tahun Menuju Mainstream"
    >
      Teknologi sel surya pertama kali dikenalkan oleh fisikawan Prancis
      Antoine-Cesar — hampir dua abad sebelum panel surya jadi pemandangan umum
      di atap rumah. Butuh waktu sangat panjang dari penemuan di laboratorium
      sampai jadi teknologi yang terjangkau dan tersebar luas seperti sekarang.
    </TriviaSpotlight>
  </PageShell>
);
Hal27.displayName = "Hal27";

export default Hal27;
