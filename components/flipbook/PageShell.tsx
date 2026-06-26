import { forwardRef, ReactNode } from "react";

type Props = {
  pageNumber: number;
  children: ReactNode;
};

const PageShell = forwardRef<
  HTMLDivElement,
  Props
>(({ pageNumber, children }, ref) =>
  <div
    ref={ref}
    className="@container relative w-full h-full bg-cream px-5 @sm:px-8 @lg:px-10 pt-5 @sm:pt-10 pb-9 @sm:pb-14 overflow-hidden"
  >
    <div className="h-full overflow-y-auto flex flex-col text-[13px] @sm:text-sm">
      {children}
    </div>
    <div className="absolute bottom-4 right-8 @sm:right-10">
      <span className="font-body text-xs text-charcoal/40">
        {String(pageNumber).padStart(2, "0")}
      </span>
    </div>
  </div>
);
PageShell.displayName = "PageShell";

export default PageShell;
