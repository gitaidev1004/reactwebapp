import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function ScrollLockModal({ isOpen, onClose, children }) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}>
      <div style={{
        background: '#fff', padding: 20, borderRadius: 8, width: 300, position: 'relative'
      }}>
        {children}
        <button onClick={onClose} style={{ position: 'absolute', top: 10, right: 10 }}>Close</button>
      </div>
    </div>,
    document.body
  );
}
