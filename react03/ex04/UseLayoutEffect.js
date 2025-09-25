useLayoutEffect(() => {
  if (!ref.current) return;
  const rect = ref.current.getBoundingClientRect();
  setHeight(rect.height);
}, [/* deps */]);