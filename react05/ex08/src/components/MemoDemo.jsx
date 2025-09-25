import React, { useState, useMemo, useCallback, memo } from 'react';
import { useExpensiveCalc } from '../hooks/useExpensiveCalc.js';

/**
 * Child 컴포넌트 - React.memo 로 props 변화 없으면 리렌더링 방지
 */
const Child = memo(({ onClick }) => {
  console.log('👶 Child 렌더링');
  return <button onClick={onClick}>카운트 증가</button>;
});

export default function MemoDemo() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(10);

  // ✅ useCallback: 이벤트 핸들러 캐싱
  const increment = useCallback(() => setCount(c => c + 1), []);

  // ✅ useMemo: 무거운 계산 캐싱
  const expensive = useMemo(() => useExpensiveCalc(value), [value]);

  return (
    <div>
      <p>Parent count: {count}</p>
      <Child onClick={increment} />

      <div style={{ marginTop: '10px' }}>
        <label>
          계산 값 변경:
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
          />
        </label>
        <p>무거운 계산 결과: {expensive}</p>
      </div>
    </div>
  );
}
