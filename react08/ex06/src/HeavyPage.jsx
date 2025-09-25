import React from 'react';

export default function HeavyPage() {
  return (
    <div>
      <h1>HeavyPage: 코드 분할 + Suspense</h1>
      <p>이 컴포넌트는 lazy 로딩됩니다.</p>
    </div>
  );
}
