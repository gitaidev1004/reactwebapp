import React, { useState, useMemo } from 'react';
import './basic-table.css';

const sample = [
  { id: 1, name: 'Alice', age: 28 },
  { id: 2, name: 'Bob', age: 34 },
  { id: 3, name: 'Carol', age: 22 },
];

function compare(a, b, key, dir) {
  const va = a[key]; const vb = b[key];
  if (va == null) return 1;
  if (vb == null) return -1;
  if (va === vb) return 0;
  return (va > vb ? 1 : -1) * (dir === 'asc' ? 1 : -1);
}

export default function SortableTable() {
  const [sortKey, setSortKey] = useState(null);
  const [sortDir, setSortDir] = useState('asc');

  const sorted = useMemo(() => {
    if (!sortKey) return sample;
    return [...sample].sort((a,b) => compare(a,b,sortKey,sortDir));
  }, [sortKey, sortDir]);

  const toggleSort = (key) => {
    if (sortKey === key) setSortDir(d => (d==='asc' ? 'desc' : 'asc'));
    else { setSortKey(key); setSortDir('asc'); }
  };

  return (
    <div className="table-wrapper">
      <table>
        <caption>정렬 가능한 테이블</caption>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">
              <button onClick={() => toggleSort('name')} aria-sort={sortKey==='name' ? (sortDir==='asc'?'ascending':'descending'):'none'}>
                이름
              </button>
            </th>
            <th scope="col">
              <button onClick={() => toggleSort('age')} aria-sort={sortKey==='age' ? (sortDir==='asc'?'ascending':'descending'):'none'}>
                나이
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {sorted.map(r => (
            <tr key={r.id}>
              <td>{r.id}</td><td>{r.name}</td><td>{r.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
