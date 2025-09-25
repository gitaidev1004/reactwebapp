// react05/ex04/src/components/FilteredTable.jsx
import React, { useState, useMemo } from 'react';

const data = [
  { id: 1, name: 'Alice', role: 'Frontend' },
  { id: 2, name: 'Bob', role: 'Backend' },
  { id: 3, name: 'Charlie', role: 'Frontend' },
  { id: 4, name: 'David', role: 'Backend' },
];

export default function FilteredTable() {
  const [query, setQuery] = useState('');

  const filteredData = useMemo(() => {
    const q = query.trim().toLowerCase();
    return data.filter(
      item => item.name.toLowerCase().includes(q) || item.role.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div>
      <input
        placeholder="검색..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        aria-label="테이블 필터"
      />
      <table>
        <thead>
          <tr><th>이름</th><th>역할</th></tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
