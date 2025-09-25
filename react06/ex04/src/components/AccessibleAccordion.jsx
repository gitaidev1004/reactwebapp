import { useState } from 'react';

export default function AccessibleAccordion({ items }) {
  const [open, setOpen] = useState(null);

  const handleKey = (e, idx) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setOpen(open === idx ? null : idx);
    }
  };

  return (
    <div>
      {items.map((item, idx) => (
        <div key={idx} style={{ marginBottom: '8px' }}>
          <button
            aria-expanded={open === idx}
            aria-controls={`panel-${idx}`}
            onClick={() => setOpen(open === idx ? null : idx)}
            onKeyDown={(e) => handleKey(e, idx)}
          >
            {item.label}
          </button>
          {open === idx && (
            <div id={`panel-${idx}`} style={{ padding: '8px', background: '#fff', borderRadius: 4 }}>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
