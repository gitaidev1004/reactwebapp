function heavyCompute(items) {
  // 의도적으로 복잡한 연산
  let s = 0;
  for (let i=0;i<5000000;i++) s += i % (items.length + 1);
  return s + items.length;
}
function Parent({ items }) {
  const memoValue = useMemo(() => heavyCompute(items), [items]);
  return <div>{memoValue}</div>;
}