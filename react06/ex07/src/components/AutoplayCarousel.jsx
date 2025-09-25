import React, { useState, useRef, useEffect, useCallback } from "react";

export function AutoplayCarousel({ slides = [], interval = 3000, pauseOnHover = true, loop = true }) {
  const [index, setIndex] = useState(0);
  const n = slides.length;
  const timerRef = useRef(null);
  const pausedRef = useRef(false);

  const goNext = useCallback(() => setIndex((i) => (loop ? (i + 1) % n : Math.min(n - 1, i + 1))), [n, loop]);

  useEffect(() => {
    if (n <= 1) return;
    if (timerRef.current) clearInterval(timerRef.current);
    if (!pausedRef.current) timerRef.current = setInterval(goNext, interval);
    return () => clearInterval(timerRef.current);
  }, [index, interval, goNext, n]);

  const pause = () => { pausedRef.current = true; if (timerRef.current) clearInterval(timerRef.current); };
  const resume = () => { pausedRef.current = false; if (!timerRef.current) timerRef.current = setInterval(goNext, interval); };

  useEffect(() => {
    const onVis = () => { if (document.visibilityState === "hidden") pause(); else resume(); };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  return (
    <div onMouseEnter={pauseOnHover ? pause : undefined} onMouseLeave={pauseOnHover ? resume : undefined} onFocus={pause} onBlur={resume}>
      <div style={{ overflow: "hidden" }}>
        <div style={{ display: "flex", width: `${n * 100}%`, transform: `translateX(-${index * (100 / n)}%)`, transition: "transform 400ms ease" }}>
          {slides.map(s => (
            <div key={s.id} style={{ flex: `0 0 ${100 / n}%` }}>
              <img src={s.src} alt={s.alt || ""} style={{ width: "100%", display: "block" }} />
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 8, display: "flex", justifyContent: "space-between" }}>
        <button onClick={() => setIndex(i => Math.max(0, i - 1))} aria-label="Previous">Prev</button>
        <div>{index + 1}/{n}</div>
        <button onClick={() => setIndex(i => (loop ? (i + 1) % n : Math.min(n - 1, i + 1)))} aria-label="Next">Next</button>
      </div>
    </div>
  );
}
