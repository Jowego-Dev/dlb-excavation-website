"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
};

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = "Before",
  afterLabel = "After",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(50);
  const dragging = useRef(false);
  const sliderId = useId();

  const clamp = useCallback((n: number) => Math.min(100, Math.max(0, n)), []);

  const setFromClientX = useCallback(
    (clientX: number) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = clientX - rect.left;
      setPct(clamp((x / rect.width) * 100));
    },
    [clamp],
  );

  useEffect(() => {
    const stop = () => {
      dragging.current = false;
    };
    window.addEventListener("pointerup", stop);
    window.addEventListener("pointercancel", stop);
    return () => {
      window.removeEventListener("pointerup", stop);
      window.removeEventListener("pointercancel", stop);
    };
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      setFromClientX(e.clientX);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [setFromClientX]);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-900 shadow-xl ring-1 ring-white/10 sm:aspect-video sm:rounded-2xl"
      onPointerDown={(e) => {
        dragging.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        setFromClientX(e.clientX);
      }}
    >
      <Image
        src={afterSrc}
        alt=""
        fill
        className="pointer-events-none object-cover"
        sizes="(max-width:1024px) 100vw, 50vw"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
        aria-hidden
      >
        <Image src={beforeSrc} alt="" fill className="pointer-events-none object-cover object-left" sizes="(max-width:1024px) 100vw, 50vw" />
      </div>
      <span className="pointer-events-none absolute left-3 top-3 rounded bg-black/55 px-2 py-1 text-xs font-medium uppercase tracking-wide text-white">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded bg-black/55 px-2 py-1 text-xs font-medium uppercase tracking-wide text-white">
        {afterLabel}
      </span>
      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.35)]"
        style={{ left: `${pct}%`, transform: "translateX(-50%)" }}
        aria-hidden
      />
      <button
        type="button"
        id={sliderId}
        role="slider"
        aria-orientation="horizontal"
        className="absolute top-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border-2 border-white bg-lime-400 text-neutral-900 shadow-lg touch-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-200"
        style={{ left: `${pct}%` }}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pct)}
        aria-valuetext={`${Math.round(pct)} percent ${beforeLabel} visible`}
        aria-label={`${beforeLabel} and ${afterLabel} comparison. Drag or use arrow keys to adjust.`}
        onPointerDown={(e) => {
          e.stopPropagation();
          dragging.current = true;
          e.currentTarget.setPointerCapture(e.pointerId);
        }}
        onKeyDown={(e) => {
          const step = e.shiftKey ? 10 : 3;
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            setPct((p) => clamp(p - step));
          }
          if (e.key === "ArrowRight") {
            e.preventDefault();
            setPct((p) => clamp(p + step));
          }
          if (e.key === "Home") {
            e.preventDefault();
            setPct(0);
          }
          if (e.key === "End") {
            e.preventDefault();
            setPct(100);
          }
        }}
      >
        <span className="sr-only">Comparison slider</span>
        <span className="flex gap-0.5" aria-hidden>
          <span className="h-4 w-0.5 rounded-full bg-neutral-900/70" />
          <span className="h-4 w-0.5 rounded-full bg-neutral-900/70" />
        </span>
      </button>
    </div>
  );
}
