import React, { useEffect, useState } from 'react';

// 간단한 fetch + AbortController + 에러/로딩 처리
export default function FetchExample({ url }) {
  const [state, setState] = useState({ data: null, loading: false, error: null });

  useEffect(() => {
    if (!url) return;
    const controller = new AbortController();
    let mounted = true;

    async function load() {
      setState({ data: null, loading: true, error: null });
      try {
        const res = await fetch(url, {
          signal: controller.signal,
          headers: { Accept: 'application/json' },
        });
        if (!res.ok) {
          const text = await res.text().catch(() => '');
          throw new Error(`HTTP ${res.status} ${res.statusText} ${text}`);
        }
        const json = await res.json();
        if (mounted) setState({ data: json, loading: false, error: null });
      } catch (err) {
        if (err.name === 'AbortError') return; // 취소 시 무시
        if (mounted) setState({ data: null, loading: false, error: err });
      }
    }

    load();
    return () => {
      mounted = false;
      controller.abort();
    };
  }, [url]);

  if (state.loading) return <div>로딩...</div>;
  if (state.error) return <div role="alert">오류: {String(state.error.message)}</div>;
  return <pre>{JSON.stringify(state.data, null, 2)}</pre>;
}
