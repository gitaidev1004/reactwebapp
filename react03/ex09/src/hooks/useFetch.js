import { useCallback, useEffect, useRef, useState } from 'react';
export function useFetch(initialUrl = null) {
  const [url, setUrl] = useState(initialUrl);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const abortRef = useRef();
  const refetch = useCallback((nextUrl) => {
    setUrl(nextUrl);
  }, []);
  useEffect(() => {
    if (!url) return;
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;
    setLoading(true);
    setError(null);
    fetch(url, { signal: controller.signal })
      .then(r => {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then(json => setData(json))
      .catch(err => {
        if (err.name !== 'AbortError') setError(err);
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, [url]);
  return { data, loading, error, refetch };
}