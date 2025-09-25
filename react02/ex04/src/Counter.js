import React, { useState } from 'react';
export default function Counter() {
  // 상태 정의: count가 상태
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>상태(State) 예제</h3>
      <p>카운트: {count}</p>
      {/* 버튼 클릭 시 상태 변경 */}
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(0)} style={{ marginLeft: 8 }}>Reset</button>
    </div>
  );
}