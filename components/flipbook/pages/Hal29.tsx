// import { forwardRef } from "react";
// import PageShell from "../PageShell";
// import BodyText from "../BodyText";
// import PullQuote from "../PullQuote";
// import NoteBox from "../NoteBox";

// const summaries = [
//   "Energi terbarukan berasal dari sumber daya alam yang dapat diperbarui melalui proses alam.",
//   "Energi surya memanfaatkan cahaya matahari untuk menghasilkan listrik.",
//   "Energi angin memanfaatkan gerakan udara untuk menggerakkan turbin.",
//   "Energi air memanfaatkan aliran atau jatuhan air untuk memutar turbin.",
//   "Biomassa berasal dari bahan organik yang dapat diolah menjadi sumber energi.",
//   "Energi panas bumi berasal dari panas di dalam Bumi.",
//   "Energi laut dapat berasal dari arus, gelombang, dan pasang surut.",
//   "Diversifikasi energi membantu mengurangi ketergantungan terhadap satu sumber energi.",
//   "Pendidikan berperan mengembangkan kemampuan berpikir ilmiah dan keterampilan teknologi.",
// ];

// const glossary = [
//   {
//     term: "Biomassa",
//     desc: "Bahan organik yang dapat dimanfaatkan sebagai sumber energi.",
//   },
//   {
//     term: "Biogas",
//     desc: "Gas hasil penguraian bahan organik oleh mikroorganisme tanpa oksigen.",
//   },
//   {
//     term: "Diversifikasi Energi",
//     desc: "Upaya menggunakan beberapa jenis sumber energi.",
//   },
//   {
//     term: "Efisiensi",
//     desc: "Perbandingan energi keluaran yang diinginkan dengan energi masukan.",
//   },
//   {
//     term: "Fotovoltaik",
//     desc: "Teknologi yang mengubah energi cahaya menjadi listrik.",
//   },
//   { term: "Geotermal", desc: "Energi panas yang berasal dari dalam Bumi." },
//   { term: "PLTA", desc: "Pembangkit Listrik Tenaga Air." },
//   { term: "PLTB", desc: "Pembangkit Listrik Tenaga Bayu atau Angin." },
//   {
//     term: "Mikrohidro",
//     desc: "Pembangkit listrik tenaga air dalam skala kecil.",
//   },
//   {
//     term: "Transfer Teknologi",
//     desc: "Proses penyampaian pengetahuan dan keterampilan teknologi.",
//   },
// ];

// const Hal29 = forwardRef<HTMLDivElement>((_, ref) => (
//   <PageShell ref={ref} pageNumber={29}>
//     <p className="font-body text-xs tracking-widest text-koral uppercase mb-3">
//       H. Penutup
//     </p>

//     <h2 className="font-display text-2xl @sm:text-4xl text-charcoal leading-tight mb-3">
//       Rangkuman Materi
//     </h2>

//     <div className="h-px w-full mb-4 @sm:mb-5 bg-gradient-to-r from-koral to-transparent" />

//     <BodyText dropCap>
//       Energi terbarukan menjadi salah satu alternatif penting dalam memenuhi
//       kebutuhan energi masa kini. Pemanfaatannya membutuhkan teknologi,
//       perencanaan, dan kesadaran untuk menjaga keseimbangan antara kebutuhan
//       manusia dan kelestarian lingkungan.
//     </BodyText>

//     <div className="mt-4 @sm:mt-5 space-y-2">
//       {summaries.map((item, index) => (
//         <div key={index} className="flex gap-3 items-start">
//           <span className="font-display text-base text-koral w-6 shrink-0">
//             {index + 1}.
//           </span>
//           <p className="font-body text-xs @sm:text-sm text-charcoal/70 leading-relaxed">
//             {item}
//           </p>
//         </div>
//       ))}
//     </div>

//     <div className="mt-5 @sm:mt-6">
//       <PullQuote>
//         Memahami energi hari ini adalah langkah untuk membangun masa depan yang
//         lebih berkelanjutan.
//       </PullQuote>
//     </div>

//     <h2 className="font-display text-xl @sm:text-2xl text-charcoal mt-5 @sm:mt-6 mb-3">
//       Glosarium
//     </h2>

//     <div className="h-px w-full mb-3 bg-gradient-to-r from-navy/50 to-transparent" />

//     <div className="grid grid-cols-2 gap-x-4 gap-y-3">
//       {glossary.map((item) => (
//         <div key={item.term}>
//           <h3 className="font-display text-xs @sm:text-sm text-navy">
//             {item.term}
//           </h3>
//           <p className="font-body text-[9px] @sm:text-[10px] leading-relaxed text-charcoal/60 mt-1">
//             {item.desc}
//           </p>
//         </div>
//       ))}
//     </div>

//     <div className="mt-5">
//       <NoteBox label="VOLTA — Energi Masa Kini" tone="navy">
//         Energi yang bijak digunakan hari ini merupakan bagian dari upaya menjaga
//         kehidupan di masa depan.
//       </NoteBox>
//     </div>
//   </PageShell>
// ));

// Hal29.displayName = "Hal29";
// export default Hal29;

import { forwardRef } from "react";
import PageShell from "../PageShell";
import BodyText from "../BodyText";
import PullQuote from "../PullQuote";
import NoteBox from "../NoteBox";

const summaries = [
  {
    title: "Energi Terbarukan",
    desc: "Energi terbarukan berasal dari sumber daya alam yang dapat diperbarui melalui proses alam, seperti matahari, angin, air, biomassa, dan panas bumi.",
  },
  {
    title: "Manfaat dan Tantangan",
    desc: "Pemanfaatan energi terbarukan dapat membantu mengurangi ketergantungan pada energi fosil. Namun, pengembangannya tetap menghadapi tantangan biaya, teknologi, kondisi alam, dan dampak lingkungan.",
  },
  {
    title: "Potensi Setiap Wilayah",
    desc: "Setiap wilayah memiliki potensi energi yang berbeda. Pengembangan sumber energi perlu disesuaikan dengan kondisi geografis dan sumber daya alam setempat.",
  },
  {
    title: "Diversifikasi Energi",
    desc: "Penggunaan beberapa jenis sumber energi dapat mengurangi ketergantungan terhadap satu sumber dan membantu menjaga ketersediaan energi.",
  },
  {
    title: "Penyimpanan Energi",
    desc: "Teknologi penyimpanan seperti baterai membantu menyimpan energi listrik untuk digunakan kembali ketika dibutuhkan.",
  },
  {
    title: "Pendidikan dan Inovasi",
    desc: "Pendidikan berperan meningkatkan pemahaman, keterampilan, dan kemampuan masyarakat dalam mengembangkan teknologi energi.",
  },
  {
    title: "Hukum Kekekalan Energi",
    desc: "Energi tidak dapat diciptakan atau dimusnahkan, tetapi dapat berubah dari satu bentuk ke bentuk lainnya.",
  },
];

const Hal28 = forwardRef<HTMLDivElement>((_, ref) => (
  <PageShell ref={ref} pageNumber={28}>
    <div className="flex items-center gap-3 mb-2 @sm:mb-3">
      <span className="w-8 h-px bg-koral" />
      <span className="font-body text-xs tracking-widest text-koral uppercase">
        Rangkuman
      </span>
    </div>

    <h2 className="font-display text-2xl @sm:text-4xl text-charcoal leading-tight mb-3">
      Memahami Energi Masa Kini
    </h2>

    <div className="h-px w-full mb-4 bg-gradient-to-r from-koral to-transparent" />

    <BodyText dropCap>
      Energi merupakan bagian penting dalam kehidupan manusia. Berbagai sumber
      energi dapat dimanfaatkan untuk memenuhi kebutuhan sehari-hari.
      Penggunaannya perlu dilakukan secara bijak dengan mempertimbangkan
      ketersediaan sumber daya dan kelestarian lingkungan.
    </BodyText>

    <div className="mt-5 space-y-3">
      {summaries.map(({ title, desc }, i) => (
        <div
          key={title}
          className="flex gap-3 border-b border-charcoal/10 pb-3"
        >
          <span className="font-display text-2xl @sm:text-3xl text-koral/80 w-8 shrink-0">
            {String(i + 1).padStart(2, "0")}
          </span>

          <div className="flex-1">
            <h3 className="font-display text-sm @sm:text-base text-charcoal">
              {title}
            </h3>
            <p className="font-body text-[10px] @sm:text-xs text-charcoal/65 leading-relaxed mt-1">
              {desc}
            </p>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-5">
      <PullQuote>
        Memahami energi hari ini adalah langkah untuk membangun masa depan yang
        lebih berkelanjutan.
      </PullQuote>
    </div>

    <div className="mt-4">
      <NoteBox label="VOLTA — Energi Masa Kini" tone="navy">
        Gunakan energi secara bijak dan dukung pemanfaatan sumber energi yang
        lebih berkelanjutan.
      </NoteBox>
    </div>
  </PageShell>
));

Hal28.displayName = "Hal28";
export default Hal28;
