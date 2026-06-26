"use client";

import { useState } from "react";
import CoverPreview from "@/components/landing/CoverPreview";
import ReaderModal from "@/components/flipbook/ReaderModal";

export default function Home() {
  const [readerOpen, setReaderOpen] = useState(false);

  return (
    <main className="bg-cream lg:h-screen lg:overflow-hidden flex items-center">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-12 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-biru" />
            <span className="font-body text-xs tracking-widest text-biru uppercase">
              E-Magazine
            </span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-charcoal leading-[1.05]">
            Energi &amp; Perubahan<span className="text-biru">nya</span>
          </h1>
          <div className="w-14 h-px bg-charcoal/20 my-5" />
          <p className="font-body text-charcoal/70 text-base sm:text-lg leading-relaxed max-w-md">
            Dari energi kinetik sampai panel surya — perjalanan visual memahami
            bagaimana energi bekerja, berubah, dan menopang kehidupan modern.
          </p>
          <div className="flex gap-8 mt-8">
            <div>
              <p className="font-body text-[10px] tracking-wide text-charcoal/50 uppercase">
                Penulis
              </p>
              <p className="font-display text-sm text-charcoal mt-1">
                Salsabila Laily Amalina
              </p>
            </div>
            <div>
              <p className="font-body text-[10px] tracking-wide text-charcoal/50 uppercase">
                Program Studi
              </p>
              <p className="font-display text-sm text-charcoal  mt-1">
                — Universitas —
              </p>
            </div>
            <div>
              <p className="font-body text-[10px] tracking-wide text-charcoal/50 uppercase">
                Halaman
              </p>
              <p className="font-display text-sm text-charcoal  mt-1">
                30 Halaman
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 bg-charcoal /20 rounded-full blur-3xl -z-10" />
          <CoverPreview onOpen={() => setReaderOpen(true)} />
        </div>
      </div>

      <ReaderModal open={readerOpen} onClose={() => setReaderOpen(false)} />
    </main>
  );
}
