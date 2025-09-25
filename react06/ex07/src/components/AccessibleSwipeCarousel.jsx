import React, { useState, useRef, useEffect } from "react";

export function AccessibleSwipeCarousel({ slides = [], loop = true }) {
  const [index, setIndex] = useState(0);
  const n = slides.length;
  const containerRef = useRef(null);
  const startX = useRef(null);
  const threshold = 50;

  useEffect(()=>{
    const el = containerRef.current;
    if(!el) return;
    const onKey = (e) => {
      if (e.key === "ArrowLeft") setIndex(i => loop ? (i - 1 + n) % n : Math.max(0, i - 1));
      if (e.key === "ArrowRight") setIndex(i => loop ? (i + 1) % n : Math.min(n - 1, i + 1));
      if (e.key === "Home") setIndex(0);
      if (e.key === "End") setIndex(n - 1);
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [n, loop]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onPointerDown = (e) => { startX.current = e.clientX; el.setPointerCapture?.(e.pointerId); };
    const onPointerUp = (e) => {
      if (startX.current == null) return;
      const dx = e.clientX - startX.current;
      if (dx > threshold) setIndex(i => loop ? (i - 1 + n) % n : Math.max(0, i - 1));
      else if (dx < -threshold) setIndex(i => loop ? (i + 1) % n : Math.min(n - 1, i + 1));
      startX.current = null;
    };
    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointerup", onPointerUp);
    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointerup", onPointerUp);
    };
  }, [n, loop]);

  return (
    <div ref={containerRef} tabIndex={0} role="region" aria-roledescription="carousel" aria-label="Swipe carousel" style={{ outline: "none", position: "relative" }}>
      <div style={{ overflow: "hidden" }}>
        <div style={{ display: "flex", transition: "transform 300ms ease", transform: `translateX(-${index * 100}%)` }}>
          {slides.map(s => (
            <div key={s.id} style={{ flex: "0 0 100%", position: "relative" }}>
              <img src={s.src} alt={s.alt || ""} style={{ width: "100%", display: "block" }} />
            </div>
          ))}
        </div>
      </div>
      <div aria-live="polite" style={{ position: "absolute", left: -9999, width: 1, height: 1, overflow: "hidden" }}>
        Slide {index + 1} of {n}
      </div>
    </div>
  );
}
