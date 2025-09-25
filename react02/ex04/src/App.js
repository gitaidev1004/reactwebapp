import React from 'react';
import Counter from './Counter';
import Display from './Display';
export default function App() {
  return (
    <div style={{ padding: 16 }}>
      <h2>ex04 — 상태(State) & 속성(Props) 예제</h2>
      <Counter />
      <div style={{ marginTop: 24 }}>
        <Display message="안녕하세요! 부모에서 전달한 메시지입니다." />
      </div>
    </div>
  );
}