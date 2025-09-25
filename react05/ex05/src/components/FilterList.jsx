// src/components/FilterList.jsx
import React, { useState, useMemo } from 'react';

// 샘플 데이터
const defaultItems = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
  category: i % 2 === 0 ? 'A' : 'B'
}));

export default function FilterList({ items = defaultItems }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');

  // 검색어 + 카테고리로 필터링
  const filtered = useMemo(() => {
    return items.filter(item => {
      const matchName = item.name.toLowerCase().includes(query.toLowerCase());
      const matchCategory =
        category === 'all' ? true : item.category === category;
      return matchName && matchCategory;
    });
  }, [items, query, category]);

  return (
    <div>
      <h2>FilterList (클라이언트 필터)</h2>

      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="이름 검색..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{ marginRight: '10px' }}
        />

        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="all">전체</option>
          <option value="A">카테고리 A</option>
          <option value="B">카테고리 B</option>
        </select>
      </div>

      <ul>
        {filtered.map(item => (
          <li key={item.id}>
            {item.name} ({item.category})
          </li>
        ))}
      </ul>

      {filtered.length === 0 && <p>검색 결과가 없습니다.</p>}
    </div>
  );
}
