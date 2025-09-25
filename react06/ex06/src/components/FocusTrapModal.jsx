import { useEffect, useRef } from 'react';

export default function FocusTrapModal({ isOpen, onClose, children }) {
  const modalRef = useRef();

  useEffect(() => {
    if (!isOpen) return;

    const focusable = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const trap = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', trap);
    first.focus();

    return () => document.removeEventListener('keydown', trap);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div role="dialog" aria-modal="true" ref={modalRef} style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}>
      <div style={{
        background: '#fff', padding: 20, borderRadius: 8, position: 'relative', width: 300
      }}>
        {children}
        <button onClick={onClose} style={{ position: 'absolute', top: 10, right: 10 }}>Close</button>
      </div>
    </div>
  );
}
