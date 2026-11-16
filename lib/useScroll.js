'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
// 0 before a, 1 after b, eased in between
export const ramp = (a, b, v) => {
  const t = clamp((v - a) / (b - a));
  return t * t * (3 - 2 * t);
};

// Smooth scrolling for the whole page, plus one callback per frame with
// p = 0..1 through the element in `target` (0 when its top reaches the top of the window,
// 1 when its bottom reaches the bottom).
export function useScroll(target, onFrame) {
  const cb = useRef(onFrame);
  cb.current = onFrame;
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const lenis = reduced ? null : new Lenis({ lerp: 0.09, wheelMultiplier: 0.9, anchors: true });
    let raf = 0;
    const loop = (time) => {
      if (lenis) lenis.raf(time);
      const el = target.current;
      if (el) {
        const r = el.getBoundingClientRect();
        cb.current(clamp(-r.top / Math.max(1, r.height - window.innerHeight)), { reduced });
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      if (lenis) lenis.destroy();
    };
  }, [target]);
}
