useEffect(() => {
  const ctrl = new AbortController();
  setState({ loading: true, data: null, error: null });
  fetch(url, { signal: ctrl.signal })
    .then(r => r.json())
    .then(data => setState({ loading: false, data, error: null }))
    .catch(err => { if (err.name !== 'AbortError') setState({ loading: false, data: null, error: err }); });
  return () => ctrl.abort();
}, [url]);