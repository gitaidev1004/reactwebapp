import React, { useState } from 'react';
import ItemList from './ItemList';
export default function App() {
  const [showMessage, setShowMessage] = useState(true);
  const [items, setItems] = useState([
    { id: 1, text: '첫 번째 항목' },
    { id: 2, text: '두 번째 항목' },
    { id: 3, text: '세 번째 항목' },
  ]);
  return (
    <div style={{ padding: 20 }}>
      <h2>ex06 — 조건부 & 반복 렌더링 예제</h2>
      {/* 조건부 토글 버튼 */}
      <button onClick={() => setShowMessage(prev => !prev)}>
        조건부 메시지 토글
      </button>
      <ItemList items={items} showMessage={showMessage} />
    </div>
  );
}