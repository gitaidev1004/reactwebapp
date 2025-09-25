function PriceTag({ amount }) {
  const formatted = new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  }).format(amount);
  return <strong>{formatted}</strong>;   // 데이터 → UI 바인딩
}