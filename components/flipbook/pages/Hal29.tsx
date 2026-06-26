import { forwardRef } from "react";
import PageShell from "../PageShell";

const terms = [
  {
    term: "CSP",
    def:
      "Teknologi tenaga surya yang memakai cermin untuk memusatkan sinar matahari dan memanaskan fluida."
  },
  {
    term: "Energi",
    def:
      "Kemampuan untuk melakukan usaha; tidak bisa diciptakan atau dimusnahkan, hanya berubah bentuk."
  },
  {
    term: "Energi Fosil",
    def:
      "Sumber energi tak terbarukan dari proses alam jutaan tahun — minyak bumi, gas bumi, batubara."
  },
  {
    term: "Energi Kinetik",
    def: "Energi yang dimiliki benda karena sedang bergerak."
  },
  {
    term: "Energi Mekanik",
    def:
      "Jumlah energi potensial dan kinetik suatu benda; totalnya selalu konstan."
  },
  {
    term: "Energi Potensial",
    def: "Energi yang tersimpan dalam benda akibat kedudukan atau posisinya."
  },
  {
    term: "Energi Terbarukan",
    def: "Sumber energi yang tidak akan habis — surya, angin, air, geotermal."
  },
  {
    term: "Fotovoltaik",
    def:
      "Teknologi yang mengubah cahaya matahari langsung jadi listrik lewat sel surya."
  },
  {
    term: "Hidroelektrik",
    def:
      "Listrik yang dihasilkan dari tenaga air lewat turbin yang digerakkan aliran air."
  },
  {
    term: "LNG",
    def:
      "Liquefied Natural Gas — gas alam yang dicairkan agar lebih mudah diangkut & diekspor."
  },
  {
    term: "MMSCF",
    def: "Satuan volume yang umum dipakai untuk mengukur produksi gas bumi."
  },
  {
    term: "Ring of Fire",
    def:
      "Jalur pertemuan lempeng tektonik dengan banyak gunung berapi, tempat Indonesia berada."
  }
];

const Hal29 = forwardRef<HTMLDivElement>((_, ref) =>
  <PageShell ref={ref} pageNumber={29}>
    <div className="flex items-center gap-3 mb-2 @sm:mb-3">
      <span className="w-8 h-px bg-koral" />
      <span className="font-body text-xs tracking-widest text-koral uppercase">
        Glosarium
      </span>
    </div>
    <h2 className="font-display text-2xl @sm:text-4xl text-charcoal leading-tight mb-3 @sm:mb-4">
      Istilah Penting
    </h2>
    <p className="font-body text-xs @sm:text-sm text-charcoal/60 mb-4 @sm:mb-6">
      Kumpulan istilah yang muncul sepanjang Volta, disusun alfabetis.
    </p>

    <div className="grid grid-cols-1 @sm:grid-cols-2 gap-x-6 gap-y-3 @sm:gap-y-4">
      {terms.map(({ term, def }, i) =>
        <div key={i} className="flex gap-2.5">
          <span className="w-1 h-1 rounded-full bg-koral shrink-0 mt-2" />
          <div>
            <p className="font-display text-sm @sm:text-base text-charcoal">
              {term}
            </p>
            <p className="font-body text-[10px] @sm:text-xs text-charcoal/60 leading-relaxed">
              {def}
            </p>
          </div>
        </div>
      )}
    </div>
  </PageShell>
);
Hal29.displayName = "Hal29";

export default Hal29;
