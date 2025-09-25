// 무거운 계산을 흉내내는 함수 (렌더링 최적화 테스트용)
export function useExpensiveCalc(value) {
  console.log('🔄 무거운 계산 실행');
  let total = 0;
  for (let i = 0; i < 5000000; i++) {
    total += i % (value + 1);
  }
  return total;
}
