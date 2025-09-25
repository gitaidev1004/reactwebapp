import { useEffect, useReducer, useRef } from 'react';

function fetchReducer(state, action) {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, data: action.payload, error: null };
    case 'FETCH_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'RESET':
      return { data: null, loading: false, error: null };
    default:
      throw new Error('Unhandled action');
  }
}

/**
 * useReducer 기반 공통 Fetch 훅
 */
export function useFetch(url, options = {}) {
  const [state, dispatch] = useReducer(fetchReducer, {
    data: null,
    loading: false,
    error: null
  });
  const reqId = useRef(0);

  useEffect(() => {
    if (!url) return;
    const controller = new AbortController();
    const id = ++reqId.current;
    dispatch({ type: 'FETCH_INIT' });

    (async () => {
      try {
        const res = await fetch(url, { signal: controller.signal, ...options });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (id === reqId.current && !controller.signal.aborted) {
          dispatch({ type: 'FETCH_SUCCESS', payload: json });
        }
      } catch (err) {
        if (err.name === 'AbortError') return;
        if (id === reqId.current) dispatch({ type: 'FETCH_FAILURE', payload: err });
      }
    })();

    return () => {
      controller.abort();
    };
  }, [url]);

  return [state, dispatch];
}
