import { useEffect, useRef, useState } from 'react';

export default function SafeFetchWithRaceGuard({ keyword }) {
  const [data, setData] = useState(null);
  const [state, setState] = useState({ loading: false, error: null });
  const requestIdRef = useRef(0); // 증가하는 요청 번호

  useEffect(() => {
    if (!keyword) { setData(null); return; }

    const controller = new AbortController();
    const myId = ++requestIdRef.current; // 이번 요청 id 부여

    const run = async () => {
      setState({ loading: true, error: null });
      try {
        // 실제 API 대신 placeholder 검색 엔드포인트
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${encodeURIComponent(keyword)}`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        // ★ 경합 가드: 내 요청이 최신인지 확인
        if (myId === requestIdRef.current && !controller.signal.aborted) {
          setData(json);
          setState({ loading: false, error: null });
        }
      } catch (e) {
        if (e.name === 'AbortError') return;
        if (myId === requestIdRef.current) {
          setState({ loading: false, error: e });
        }
      }
    };

    run();
    return () => controller.abort(); // StrictMode 이중 마운트에도 안전
  }, [keyword]);

  return (
    <section>
      {state.loading && <p aria-live="polite">검색 중…</p>}
      {state.error && <p role="alert">에러: {String(state.error.message || state.error)}</p>}
      {!state.loading && !state.error && data && (
        <ul>{data.products?.map(it => <li key={it.id}>{it.title}</li>)}</ul>
      )}
    </section>
  );
}
