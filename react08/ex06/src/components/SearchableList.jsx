import React, { useState, useTransition } from 'react';

export default function SearchableList({ onQuery }) {
  const [text, setText] = useState('');
  const [isPending, startTransition] = useTransition();

  const onChange = (e) => {
    const v = e.target.value;
    setText(v);
    startTransition(() => {
      onQuery(v); // 낮은 우선순위로 데이터 갱신 트리거
    });
  };

  return (
    <div>
      <input value={text} onChange={onChange} placeholder="검색…" />
      {isPending && <div>업데이트 중…</div>}
    </div>
  );
}
