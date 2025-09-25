import { useState } from 'react';

export default function Tooltip({ children, text }) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      style={{ display: 'inline-block', position: 'relative', margin: 8 }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      <span aria-describedby="tooltip">{children}</span>
      {visible && (
        <div
          id="tooltip"
          role="tooltip"
          style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#333',
            color: '#fff',
            padding: '4px 8px',
            borderRadius: 4,
            whiteSpace: 'nowrap'
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
}
