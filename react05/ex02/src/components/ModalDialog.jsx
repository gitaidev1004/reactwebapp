import React, { useEffect } from 'react';

export default function ModalDialog({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal-content">
        <h2>모달 제목</h2>
        <p>모달 내용입니다.</p>
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
}
