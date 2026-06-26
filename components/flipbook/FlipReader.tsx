"use client";

import dynamic from "next/dynamic";
import { forwardRef, useEffect, useRef, useState } from "react";
import CoverFace from "./CoverFace";
import BackCoverFace from "./BackCoverFace";
import { playFlipSound } from "./flipSound";
import Hal02 from "./pages/Hal02";
import Hal03 from "./pages/Hal03";
import Hal04 from "./pages/Hal04";
import Hal05 from "./pages/Hal05";
import Hal06 from "./pages/Hal06";
import Hal07 from "./pages/Hal07";
import Hal08 from "./pages/Hal08";
import Hal09 from "./pages/Hal09";
import Hal10 from "./pages/Hal10";
import Hal11 from "./pages/Hal11";
import Hal12 from "./pages/Hal12";
import Hal13 from "./pages/Hal13";
import Hal14 from "./pages/Hal14";
import Hal15 from "./pages/Hal15";
import Hal16 from "./pages/Hal16";
import Hal17 from "./pages/Hal17";
import Hal18 from "./pages/Hal18";
import Hal19 from "./pages/Hal19";
import Hal20 from "./pages/Hal20";
import Hal21 from "./pages/Hal21";
import Hal22 from "./pages/Hal22";
import Hal23 from "./pages/Hal23";
import Hal24 from "./pages/Hal24";
import Hal25 from "./pages/Hal25";
import Hal26 from "./pages/Hal26";
import Hal27 from "./pages/Hal27";
import Hal28 from "./pages/Hal28";
import Hal29 from "./pages/Hal29";

const HTMLFlipBook = (dynamic(() => import("react-pageflip"), {
  ssr: false,
}) as unknown) as React.ComponentType<Record<string, unknown>>;

const TOTAL_PAGES = 30;
const STORAGE_KEY = "volta-last-page";

const CoverPage = forwardRef<HTMLDivElement>((_, ref) => (
  <div ref={ref} className="w-full h-full">
    <CoverFace />
  </div>
));
CoverPage.displayName = "CoverPage";

const BackCoverPage = forwardRef<HTMLDivElement>((_, ref) => (
  <div ref={ref} className="w-full h-full">
    <BackCoverFace />
  </div>
));
BackCoverPage.displayName = "BackCoverPage";

export default function FlipReader() {
  const [initialPage] = useState(() => {
    if (typeof window === "undefined") return 0;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const parsed = saved ? parseInt(saved, 10) : 0;
    return Number.isFinite(parsed) && parsed >= 0 && parsed < TOTAL_PAGES ? parsed : 0;
  });
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [orientation, setOrientation] = useState<"portrait" | "landscape">("landscape");

  const currentPageRef = useRef(currentPage);
  useEffect(() => {
    currentPageRef.current = currentPage;
  }, [currentPage]);

  useEffect(() => {
    return () => {
      if (currentPageRef.current === TOTAL_PAGES - 1) {
        window.localStorage.setItem(STORAGE_KEY, "0");
      }
    };
  }, []);

  const isSolo = currentPage === 0 || currentPage === TOTAL_PAGES - 1;
  const counterText =
    orientation === "portrait" || isSolo
      ? `${currentPage + 1} / ${TOTAL_PAGES}`
      : `${currentPage + 1}–${currentPage + 2} / ${TOTAL_PAGES}`;

  const handleFlip = (e: { data: number }) => {
    setCurrentPage(e.data);
    window.localStorage.setItem(STORAGE_KEY, String(e.data));
    playFlipSound();
  };

  return (
    <>
      <div className="fixed top-4 left-4 z-50">
        <p className="font-body text-xs @sm:text-sm text-cream/80 tabular-nums">{counterText}</p>
      </div>

      <div className="w-full max-w-6xl mx-auto">
        <HTMLFlipBook
          width={600}
          height={849}
          size="stretch"
          minWidth={340}
          maxWidth={1200}
          minHeight={480}
          maxHeight={1700}
          showCover={true}
          usePortrait={true}
          mobileScrollSupport={true}
          startPage={initialPage}
          maxShadowOpacity={0.35}
          flippingTime={600}
          className="mx-auto"
          onFlip={handleFlip}
          onChangeOrientation={(e: { data: "portrait" | "landscape" }) =>
            setOrientation(e.data)
          }
        >
          <CoverPage />
          <Hal02 />
          <Hal03 />
          <Hal04 />
          <Hal05 />
          <Hal06 />
          <Hal07 />
          <Hal08 />
          <Hal09 />
          <Hal10 />
          <Hal11 />
          <Hal12 />
          <Hal13 />
          <Hal14 />
          <Hal15 />
          <Hal16 />
          <Hal17 />
          <Hal18 />
          <Hal19 />
          <Hal20 />
          <Hal21 />
          <Hal22 />
          <Hal23 />
          <Hal24 />
          <Hal25 />
          <Hal26 />
          <Hal27 />
          <Hal28 />
          <Hal29 />
          <BackCoverPage />
        </HTMLFlipBook>
      </div>
    </>
  );
}