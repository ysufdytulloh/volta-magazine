import { forwardRef } from "react";
import PageShell from "../PageShell";
import PullQuote from "../PullQuote";
import BodyText from "../BodyText";
import PageImage from "../PageImage";

const Hal06 = forwardRef<HTMLDivElement>((_, ref) =>
  <PageShell ref={ref} pageNumber={6}>
    <div className="flex items-center gap-3 mb-2 @sm:mb-3">
      <span className="w-8 h-px bg-koral" />
      <span className="font-body text-xs tracking-widest text-koral uppercase">
        C. Sumber Energi
      </span>
    </div>
    <h2 className="font-display text-2xl @sm:text-4xl text-charcoal leading-tight mb-3 @sm:mb-4">
      Mengenal Sumber Energi
    </h2>
    <div className="h-px w-full mb-4 @sm:mb-6 bg-gradient-to-r from-koral to-transparent" />

    <div className="space-y-3 @sm:space-y-5">
      <PullQuote>
        Tanpa matahari, kehidupan di bumi tidak akan pernah ada — ia bukan cuma
        sumber cahaya, tapi juga pusat dari tata surya itu sendiri.
      </PullQuote>
      <div className="grid grid-cols-1 @sm:grid-cols-2 gap-4 @sm:gap-6">
        <BodyText dropCap>
          Sumber energi adalah segala sesuatu yang bisa menghasilkan energi,
          baik secara langsung maupun lewat proses konversi. Ia ada di sekitar
          kita dalam berbagai skala, kecil maupun besar — contohnya matahari,
          air, dan minyak bumi.
        </BodyText>
        <BodyText>
          Berdasarkan ketersediaannya, sumber energi terbagi dua: terbarukan
          (matahari, ombak, angin, air) yang tidak akan habis, dan tak
          terbarukan (minyak bumi, gas alam, batu bara, nuklir). Matahari
          sendiri merupakan sumber terbesar di bumi, sekaligus pusat tata surya
          yang dikelilingi delapan planet, termasuk bumi tempat kita berdiri.
        </BodyText>
      </div>
      <PageImage
        caption="Foto: matahari / horizon"
        src="/photos/hal06-matahari.jpg"
      />
    </div>
  </PageShell>
);
Hal06.displayName = "Hal06";

export default Hal06;
