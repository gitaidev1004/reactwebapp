import { createPortal } from 'react-dom';
import { useState, useRef, useEffect } from 'react';

export default function Popover({ targetRef, children }) {
  const [pos, setPos] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      setPos({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
    }
  }, [targetRef]);

  return createPortal(
    <div style={{ position: 'absolute', top: pos.top, left: pos.left, background: 'white', border: '1px solid #ccc', padding: 8, borderRadius: 4 }}>
      {children}
    </div>,
    document.body
  );
}
