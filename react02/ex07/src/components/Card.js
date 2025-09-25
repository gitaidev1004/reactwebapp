import React from 'react';
export default function Card({ children }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: 12, borderRadius: 8, marginBottom: 12 }}>
      {children}
    </div>
  );
}