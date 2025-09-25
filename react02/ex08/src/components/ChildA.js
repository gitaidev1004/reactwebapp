import React from 'react';
export default function ChildA({ value, onChange }) {
  return (
    <div>
      <h3>Child A (Props 전달)</h3>
      <input value={value} onChange={e => onChange(e.target.value)} placeholder="값 입력" />
    </div>
  );
}