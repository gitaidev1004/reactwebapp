import { useState, useEffect } from 'react';

export default function Toast({ message, duration = 3000 }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!show) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        marginTop: 12,
        padding: '12px 20px',
        background: '#28a745',
        color: '#fff',
        borderRadius: 4,
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
      }}
    >
      {message}
    </div>
  );
}
