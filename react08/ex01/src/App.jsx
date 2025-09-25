import React, { useState } from 'react';
import BasicFetchDemo from './components/BasicFetchDemo';
import SafeFetchWithRaceGuard from './components/SafeFetchWithRaceGuard';

export default function App() {
  const [keyword, setKeyword] = useState('');

  return (
    <div style={{ padding: 20 }}>
      <h1>8.1 인터페이스의 개념과 정의</h1>

      <section style={{ marginBottom: 40 }}>
        <h2>① 기본 데이터 패칭 (Abort 포함)</h2>
        <BasicFetchDemo />
      </section>

      <section>
        <h2>② 경합 방지 + Abort 예제</h2>
        <input
          type="text"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
          placeholder="검색 키워드 입력"
          style={{ padding: '6px 10px', width: 240 }}
        />
        <SafeFetchWithRaceGuard keyword={keyword} />
      </section>
    </div>
  );
}
