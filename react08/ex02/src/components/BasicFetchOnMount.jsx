import React, { useEffect, useRef, useState } from 'react';

/**
 * 컴포넌트가 마운트될 때 API를 호출하고,
 * 언마운트/의존성 변경 시 요청을 취소(AbortController)하여
 * 오래된 응답이 최신 UI를 덮지 않도록 방지
 */
export default function BasicFetchOnMount({ url }) {
  const [data, setData] = useState(null);
  const [meta, setMeta] = useState({ loading: false, error: null });
  const reqIdRef = useRef(0);

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();
    const myId = ++reqIdRef.current;
    setMeta({ loading: true, error: null });

    (async () => {
      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (myId === reqIdRef.current && !controller.signal.aborted) {
          setData(json);
          setMeta({ loading: false, error: null });
        }
      } catch (err) {
        if (err.name === 'AbortError') return;
        if (myId === reqIdRef.current) {
          setMeta({ loading: false, error: err });
        }
      }
    })();

    return () => {
      controller.abort();
    };
  }, [url]);

  if (meta.loading) return <div>로딩 중…</div>;
  if (meta.error) return <div role="alert">에러: {String(meta.error.message)}</div>;
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
