import React from 'react';
import BasicFetchOnMount from './components/BasicFetchOnMount';
import CleanupExample from './components/CleanupExample';
import FetchWithReducer from './components/FetchWithReducer';

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>8.2 useEffect를 활용한 비동기 처리</h1>
      <h2>1) 마운트 시 API 호출</h2>
      <BasicFetchOnMount url="https://dummyjson.com/products/1" />

      <h2>2) Cleanup으로 메모리 누수 방지</h2>
      <CleanupExample />

      <h2>3) useReducer 기반 커스텀 훅</h2>
      <FetchWithReducer url="https://dummyjson.com/products/2" />
    </div>
  );
}
