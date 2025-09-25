// react05/ex04/src/components/ClientPagination.jsx
import React, { useState } from 'react';

const data = Array.from({ length: 50 }, (_, i) => ({ id: i+1, name: `User${i+1}` }));

export default function ClientPagination({ pageSize = 10 }) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(data.length / pageSize);
  const pageData = data.slice((page-1)*pageSize, page*pageSize);

  return (
    <div>
      <table>
        <thead><tr><th>ID</th><th>이름</th></tr></thead>
        <tbody>
          {pageData.map(u => <tr key={u.id}><td>{u.id}</td><td>{u.name}</td></tr>)}
        </tbody>
      </table>
      <nav aria-label="페이지 네비게이션">
        <button onClick={()=>setPage(p=>Math.max(1,p-1))} disabled={page===1}>Prev</button>
        <span aria-live="polite">{page}/{totalPages}</span>
        <button onClick={()=>setPage(p=>Math.min(totalPages,p+1))} disabled={page===totalPages}>Next</button>
      </nav>
    </div>
  );
}
