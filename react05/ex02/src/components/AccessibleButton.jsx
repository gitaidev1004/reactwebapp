import React from 'react';

export default function AccessibleButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={children}
    >
      {children}
    </button>
  );
}