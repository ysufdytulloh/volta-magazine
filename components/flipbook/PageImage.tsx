import Image from "next/image";

export default function PageImage({
  caption,
  src
}: {
  caption: string;
  src?: string;
}) {
  return (
    <div className="relative w-full h-32 @sm:h-56 rounded-lg overflow-hidden bg-charcoal/5 border border-charcoal/10 flex items-center justify-center">
      {src
        ? <Image
            src={src}
            alt={caption}
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover"
          />
        : <p className="font-body text-[10px] @sm:text-xs text-charcoal/40 text-center px-2">
            {caption}
          </p>}
    </div>
  );
}
