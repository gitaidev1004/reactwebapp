import { createPortal } from 'react-dom';

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return createPortal(
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}>
      <div style={{
        background: '#fff', padding: 20, borderRadius: 8, position: 'relative', width: 300
      }}>
        {children}
        <button onClick={onClose} style={{ position: 'absolute', top: 10, right: 10 }}>Close</button>
      </div>
    </div>,
    document.body
  );
}
