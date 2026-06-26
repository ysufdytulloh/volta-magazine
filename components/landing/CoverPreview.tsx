"use client";

import CoverFace from "../flipbook/CoverFace";

type Props = { onOpen: () => void };

export default function CoverPreview({ onOpen }: Props) {
  return (
    <div className="max-w-sm mx-auto w-full bg-white rounded-2xl border border-charcoal/10 shadow-sm p-3">
      <div className="relative rounded-xl overflow-hidden aspect-[210/297]">
        <CoverFace />
      </div>
      <button
        onClick={onOpen}
        className="w-full mt-3 bg-charcoal text-cream font-body text-sm py-3.5 rounded-xl cursor-pointer hover:bg-charcoal/90 transition"
      >
        Lihat Selengkapnya →
      </button>
    </div>
  );
}
