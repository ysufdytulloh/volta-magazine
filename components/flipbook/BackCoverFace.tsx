import Image from "next/image";

export default function BackCoverFace() {
  return (
    <div className="relative w-full h-full min-h-[200px] overflow-hidden bg-charcoal">
      <Image
        src="/covers/cover-bg.jpg"
        alt="Cover belakang Volta"
        fill
        sizes="(max-width: 768px) 100vw, 600px"
        className="object-cover object-[25%_center]"
      />
      <div className="absolute inset-0 bg-linear-to-b from-charcoal/55 via-charcoal/65 to-charcoal/95" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
        <p className="font-display text-2xl @sm:text-3xl text-cream tracking-tight mb-3">
          VOLTA
        </p>
        <div className="w-8 h-px bg-biru mb-4" />
        <p className="font-display italic text-sm @sm:text-base text-cream/85 leading-relaxed max-w-xs">
          Energi tidak pernah benar-benar hilang — ia cuma pindah rumah, dari
          satu wujud ke wujud lain.
        </p>
      </div>

      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-6">
        <p className="font-body text-[10px] tracking-widest text-cream/50 uppercase">
          Salsabila Laily Amalina
        </p>
        <p className="font-body text-[10px] tracking-widest text-cream/50 uppercase">
          Volta — E-Magazine / 2026
        </p>
      </div>
    </div>
  );
}
