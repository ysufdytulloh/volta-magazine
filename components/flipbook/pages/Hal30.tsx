import { forwardRef } from "react";
import PageShell from "../PageShell";

const terms = [
  {
    term: "Biomassa",
    def: "Bahan organik dari makhluk hidup atau sisa aktivitas makhluk hidup yang dapat dimanfaatkan sebagai sumber energi.",
  },
  {
    term: "Biogas",
    def: "Gas hasil penguraian bahan organik oleh mikroorganisme dalam kondisi tanpa oksigen.",
  },
  {
    term: "Diversifikasi energi",
    def: "Upaya menggunakan beberapa jenis sumber energi.",
  },
  {
    term: "Efisiensi",
    def: "Perbandingan energi keluaran yang diinginkan dengan energi masukan.",
  },
  {
    term: "Fotovoltaik",
    def: "Teknologi yang mengubah energi cahaya menjadi energi listrik.",
  },
  {
    term: "Geotermal",
    def: "Energi panas yang berasal dari dalam Bumi.",
  },
  {
    term: "Mikrohidro",
    def: "Pembangkit listrik tenaga air dalam skala kecil.",
  },
  {
    term: "PLTA",
    def: "Pembangkit listrik tenaga air.",
  },
  {
    term: "PLTB",
    def: "Pembangkit listrik tenaga bayu atau angin.",
  },
  {
    term: "Transfer teknologi",
    def: "Proses penyampaian pengetahuan dan keterampilan teknologi kepada pihak lain.",
  },
];

const Hal29 = forwardRef<HTMLDivElement>((_, ref) => (
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

    <p className="font-body text-xs @sm:text-sm text-charcoal/60 mb-5 @sm:mb-7">
      Sepuluh istilah penting dalam materi energi terbarukan.
    </p>

    <div className="grid grid-cols-1 @sm:grid-cols-2 gap-x-7 gap-y-4 @sm:gap-y-5">
      {terms.map(({ term, def }, index) => (
        <div key={term} className="flex gap-3 border-b border-charcoal/10 pb-3">
          <span className="font-display text-sm text-koral/70">
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="flex-1">
            <p className="font-display text-sm @sm:text-base text-charcoal">
              {term}
            </p>
            <p className="font-body text-[10px] @sm:text-xs text-charcoal/65 leading-relaxed mt-1">
              {def}
            </p>
          </div>
        </div>
      ))}
    </div>
  </PageShell>
));

Hal29.displayName = "Hal29";
export default Hal29;
