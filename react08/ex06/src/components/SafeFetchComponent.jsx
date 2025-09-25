import React, { useEffect, useState } from 'react';

export default function SafeFetchComponent({ url }) {
  const [state, setState] = useState({ data: null, loading: false, error: null });

  useEffect(() => {
    if (!url) return;
    const controller = new AbortController();
    let mounted = true;

    const fetchData = async () => {
      setState({ data: null, loading: true, error: null });
      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (mounted) setState({ data: json, loading: false, error: null });
      } catch (err) {
        if (err.name === 'AbortError') return;
        if (mounted) setState({ data: null, loading: false, error: err });
      }
    };

    fetchData();
    return () => { mounted = false; controller.abort(); };
  }, [url]);

  if (state.loading) return <div>로딩 중…</div>;
  if (state.error) return <div role="alert">에러: {String(state.error.message)}</div>;
  return <pre>{JSON.stringify(state.data, null, 2)}</pre>;
}
