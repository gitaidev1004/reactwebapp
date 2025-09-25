import React from 'react';
import './App.css';
import ImageDemo from './components/ImageDemo.jsx';
import MemoDemo from './components/MemoDemo.jsx';

export default function App() {
  return (
    <div className="container">
      <h2>1️⃣ 이미지 최적화 (srcset + lazy)</h2>
      <ImageDemo />

      <h2>2️⃣ 렌더링 최적화 (React.memo + useCallback)</h2>
      <MemoDemo />
    </div>
  );
}
