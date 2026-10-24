import { forwardRef } from "react";
import { QRCodeSVG } from "qrcode.react";
import PageShell from "../PageShell";
import NoteBox from "../NoteBox";

type HalSoalProps = {
  url?: string;
};

const HalSoal = forwardRef<HTMLDivElement, HalSoalProps>(
  ({ url = "https://forms.gle/MivwrMY2s2AL1hAg9" }, ref) => {
    const soalUrl = url.trim();
    const qrReady = /^https?:\/\/\S+$/i.test(soalUrl);

    return (
      <PageShell ref={ref} pageNumber={20}>
        <div className="flex h-full flex-col">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-2 @sm:mb-3">
            <span className="w-8 h-px bg-koral" />
            <span className="font-body text-xs tracking-widest text-koral uppercase">
              Aktivitas Interaktif
            </span>
          </div>

          {/* Main heading */}
          <div className="mb-4 @sm:mb-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="font-display text-2xl @sm:text-3xl text-charcoal leading-tight">
                  Latihan Soal
                </h2>
                <p className="font-body text-xs @sm:text-sm text-charcoal/60 mt-2 max-w-md">
                  Uji pemahamanmu tentang energi dan perubahannya melalui
                  latihan digital.
                </p>
              </div>

              <div className="shrink-0 rounded-xl bg-koral text-white px-3 py-2 text-center">
                <p className="font-body text-[9px] tracking-widest uppercase text-white/60">
                  VOLTA
                </p>
                <p className="font-display text-lg leading-tight">QUIZ</p>
              </div>
            </div>
          </div>

          {/* QR card */}
          <div className="flex-1 flex flex-col items-center justify-center rounded-2xl border border-charcoal/10 bg-[#f7f8fa] px-4 py-5 @sm:px-6 @sm:py-6">
            <p className="font-body text-[10px] @sm:text-xs tracking-[0.2em] uppercase text-koral/60 mb-4">
              Scan untuk memulai
            </p>

            <div className="w-full max-w-[240px] aspect-square flex items-center justify-center rounded-xl border border-charcoal/10 bg-white p-4 shadow-sm">
              {qrReady ? (
                <QRCodeSVG
                  value={soalUrl}
                  size={220}
                  level="H"
                  includeMargin
                  title="QR Code Latihan Soal"
                  bgColor="#ffffff"
                  fgColor="#14243a"
                  className="h-auto w-full"
                />
              ) : (
                <div className="text-center">
                  <div className="grid grid-cols-3 gap-1 w-16 h-16 mx-auto mb-3 opacity-30">
                    <span className="bg-navy rounded-sm" />
                    <span className="bg-navy rounded-sm" />
                    <span className="bg-navy rounded-sm" />
                    <span className="bg-navy rounded-sm" />
                    <span className="bg-navy rounded-sm" />
                    <span className="bg-navy rounded-sm" />
                    <span className="bg-navy rounded-sm" />
                    <span className="bg-navy rounded-sm" />
                    <span className="bg-navy rounded-sm" />
                  </div>
                  <p className="font-display text-sm text-charcoal">QR Code</p>
                  <p className="font-body text-[10px] text-charcoal/50 mt-1">
                    Tautan belum tersedia
                  </p>
                </div>
              )}
            </div>

            <div
              className={`mt-4 rounded-full px-3 py-1.5 font-body text-[9px] @sm:text-[10px] tracking-wider uppercase ${
                qrReady
                  ? "bg-emerald-100 text-emerald-800"
                  : "bg-amber/10 text-amber"
              }`}
            >
              {qrReady ? "● QR siap dipindai" : "● Menunggu tautan soal"}
            </div>

            {qrReady && (
              <a
                href={soalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center justify-center rounded-lg bg-navy px-4 py-2.5 font-body text-xs text-white transition hover:opacity-80"
              >
                Buka Soal →
              </a>
            )}

            <p className="font-body text-xs text-charcoal/60 text-center mt-4 max-w-xs leading-relaxed">
              Arahkan kamera ponsel ke kode QR untuk membuka halaman latihan
              soal.
            </p>
          </div>

          {/* Instructions */}
          <div className="grid grid-cols-3 gap-2 @sm:gap-3 mt-4 @sm:mt-5">
            {[
              { number: "01", title: "Buka kamera" },
              { number: "02", title: "Pindai QR" },
              { number: "03", title: "Jawab soal" },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-xl border border-charcoal/10 px-2 py-3 text-center"
              >
                <p className="font-display text-lg @sm:text-xl text-koral">
                  {item.number}
                </p>
                <p className="font-body text-[9px] @sm:text-xs text-charcoal/70 mt-1">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-4 @sm:mt-5">
            <NoteBox label="Petunjuk" tone="koral">
              Kerjakan latihan secara mandiri. Baca setiap pertanyaan dengan
              teliti dan pahami hubungan antara sumber energi, pemanfaatan,
              serta dampaknya bagi kehidupan.
            </NoteBox>
          </div>
        </div>
      </PageShell>
    );
  },
);

HalSoal.displayName = "HalSoal";

export default HalSoal;
