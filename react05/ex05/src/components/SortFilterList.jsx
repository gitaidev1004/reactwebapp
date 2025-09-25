// src/components/SortFilterList.jsx
import React, { useState } from 'react';

export default function SortFilterList({ data }) {
  const [filter, setFilter] = useState('');
  const [sortAsc, setSortAsc] = useState(true);

  const filtered = data
    .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));

  return (
    <div>
      <h2>Sort & Filter List</h2>
      <input
        placeholder="검색..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      <button onClick={() => setSortAsc(!sortAsc)}>
        {sortAsc ? '오름차순' : '내림차순'}
      </button>
      <ul className="list">
        {filtered.map(item => (
          <li key={item.id} className="list-item">{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
