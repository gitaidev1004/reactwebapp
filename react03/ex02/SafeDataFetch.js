import { useEffect, useState } from 'react';
export function useFetch(url) {
  const [state, setState] = useState({ loading: true, data: null, error: null });
  useEffect(() => {
    const ctrl = new AbortController();
    setState({ loading: true, data: null, error: null });
    fetch(url, { signal: ctrl.signal })
      .then(r => r.json())
      .then(data => setState({ loading: false, data, error: null }))
      .catch(err => {
        if (err.name !== 'AbortError')
          setState({ loading: false, data: null, error: err });
      });
    return () => ctrl.abort(); // 언마운트/URL 변경 시 요청 중단
  }, [url]);
  return state;
}