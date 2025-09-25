import React, { useState, useCallback } from "react";

export function BasicCarousel({ slides = [], loop = true }) {
  const [index, setIndex] = useState(0);
  const n = slides.length;

  const go = useCallback((to) => {
    if (n === 0) return;
    if (loop) setIndex((prev) => (to + n) % n);
    else setIndex(Math.max(0, Math.min(n - 1, to)));
  }, [n, loop]);

  const prev = () => go(index - 1);
  const next = () => go(index + 1);

  return (
    <div style={{ width: "100%", overflow: "hidden" }} role="region" aria-roledescription="carousel" aria-label="Basic carousel">
      <div
        style={{
          display: "flex",
          width: `${n * 100}%`,
          transform: `translateX(-${index * (100 / n)}%)`,
          transition: "transform 400ms ease",
        }}
        tabIndex={0}
        onKeyDown={(e)=> {
          if(e.key === "ArrowLeft") prev();
          if(e.key === "ArrowRight") next();
        }}
      >
        {slides.map((s) => (
          <div key={s.id} style={{ flex: `0 0 ${100 / n}%`, maxWidth: `${100 / n}%` }}>
            <img src={s.src} alt={s.alt || ""} style={{ width: "100%", display: "block" }} />
            {s.caption && <div style={{ padding: 8 }}>{s.caption}</div>}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
        <button onClick={prev} aria-label="Previous slide">‹</button>
        <div aria-hidden="true">{index + 1}/{n}</div>
        <button onClick={next} aria-label="Next slide">›</button>
      </div>
      <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 8 }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index ? "true" : undefined}
            style={{ width: 10, height: 10, borderRadius: 5, background: i === index ? "#111" : "#ccc", border: "none" }}
          />
        ))}
      </div>
    </div>
  );
}
