import React, { useState, useEffect } from "react";

export function PerformanceCarousel({ slides = [] }) {
  const [index, setIndex] = useState(0);
  const n = slides.length;

  useEffect(() => {
    const toPreload = [];
    const next = (index + 1) % n;
    const prev = (index - 1 + n) % n;
    toPreload.push(slides[next], slides[prev]);
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        toPreload.forEach(s => { if(s) new Image().src = s.src; });
      });
    } else {
      setTimeout(() => toPreload.forEach(s => { if(s) new Image().src = s.src; }), 200);
    }
  }, [index, slides, n]);

  return (
    <div>
      <div style={{ overflow: "hidden" }}>
        <div style={{ display: "flex", transform: `translateX(-${index * 100}%)`, transition: "transform 300ms ease" }}>
          {slides.map((s, i) => (
            <div key={s.id} style={{ flex: "0 0 100%" }}>
              <img src={s.src} alt={s.alt || ""} loading="lazy" style={{ width: "100%", display: "block" }} />
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 8 }}>
        <button onClick={() => setIndex((i) => Math.max(0, i - 1))}>Prev</button>
        <button onClick={() => setIndex((i) => Math.min(n - 1, i + 1))}>Next</button>
      </div>
    </div>
  );
}
