import { useState } from 'react';

export default function ButtonGroup() {
  const [active, setActive] = useState(null);
  const labels = ['Bold', 'Italic', 'Underline'];

  return (
    <div role="toolbar" aria-label="Text style">
      {labels.map((label, idx) => (
        <button
          key={label}
          aria-pressed={active === idx}
          onClick={() => setActive(idx)}
          style={{
            marginRight: 6,
            padding: '8px 16px',
            borderRadius: 4,
            border: active === idx ? '2px solid #007bff' : '1px solid #ccc',
            background: active === idx ? '#e7f1ff' : '#fff',
            cursor: 'pointer'
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
