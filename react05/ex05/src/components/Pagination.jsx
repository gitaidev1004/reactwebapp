// src/components/Pagination.jsx
import React from 'react';

export default function Pagination({ page, setPage, totalPages }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div style={{ marginTop: 12 }}>
      {pages.map(p => (
        <button
          key={p}
          onClick={() => setPage(p)}
          disabled={p === page}
          style={{
            marginRight: 4,
            padding: '4px 8px',
            background: p === page ? '#1890ff' : '#fff',
            color: p === page ? '#fff' : '#000',
            border: '1px solid #ddd',
            borderRadius: 4
          }}
        >
          {p}
        </button>
      ))}
    </div>
  );
}
