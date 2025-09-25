import { useState } from 'react';

export default function Accordion({ items, allowMultiple = false }) {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggle = (idx) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
      );
    } else {
      setOpenIndexes((prev) => (prev[0] === idx ? [] : [idx]));
    }
  };

  return (
    <div>
      {items.map((item, idx) => (
        <div key={idx} style={{ marginBottom: '8px' }}>
          <button
            onClick={() => toggle(idx)}
            aria-expanded={openIndexes.includes(idx)}
          >
            {item.label}
          </button>
          {openIndexes.includes(idx) && (
            <div style={{ padding: '8px', background: '#fff', borderRadius: 4 }}>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
