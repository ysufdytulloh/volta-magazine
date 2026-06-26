"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import FlipReader from "./FlipReader";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ReaderModal({ open, onClose }: Props) {
  useEffect(
    () => {
      document.body.style.overflow = open ? "hidden" : "";
      return () => {
        document.body.style.overflow = "";
      };
    },
    [open]
  );

  if (!open) return null;

  return <div className="fixed inset-0 z-50 bg-charcoal/70 backdrop-blur-sm flex items-center justify-center p-4">
      <button onClick={onClose} aria-label="Tutup" className="absolute top-5 right-5 w-9 h-9 rounded-full bg-cream/10 hover:bg-cream/20 text-cream flex items-center justify-center transition">
        <X size={18} />
      </button>

      <div className="w-full flex justify-center">
        <FlipReader />
      </div>
    </div>;
}
