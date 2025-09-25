// src/components/ClientPager.jsx
import React, { useState } from 'react';
import Pagination from './Pagination';

export default function ClientPager({ items, pageSize }) {
  const [page, setPage] = useState(1);
  const total = items.length;
  const totalPages = Math.ceil(total / pageSize);
  const currentItems = items.slice((page-1)*pageSize, page*pageSize);

  return (
    <div>
      <h2>Client Pager</h2>
      <ul className="list">
        {currentItems.map(i => <li key={i.id} className="list-item">{i.name}</li>)}
      </ul>
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
}
