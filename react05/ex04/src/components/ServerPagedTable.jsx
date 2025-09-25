// react05/ex04/src/components/ServerPagedTable.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ServerPagedTable({ pageSize = 10 }) {
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let mounted = true;
    axios.get('/api/users', { params: { page, limit: pageSize } }).then(res => {
      if(!mounted) return;
      setRows(res.data.items);
      setTotal(res.data.total);
    });
    return () => { mounted = false; }
  }, [page, pageSize]);

  const totalPages = Math.ceil(total / pageSize);

  return (
    <div>
      <table>
        <thead><tr><th>ID</th><th>이름</th></tr></thead>
        <tbody>
          {rows.map(r => <tr key={r.id}><td>{r.id}</td><td>{r.name}</td></tr>)}
        </tbody>
      </table>
      <nav aria-label="페이지 네비게이션">
        <button onClick={()=>setPage(p=>Math.max(1,p-1))} disabled={page===1}>Prev</button>
        <span>{page}/{totalPages}</span>
        <button onClick={()=>setPage(p=>Math.min(totalPages,p+1))} disabled={page===totalPages}>Next</button>
      </nav>
    </div>
  );
}
