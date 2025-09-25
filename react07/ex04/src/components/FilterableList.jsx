import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function FilterableList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category') || 'all';
  const sort = searchParams.get('sort') || 'new';

  const [items, setItems] = useState([]);

  useEffect(() => {
    // 서버 API 호출: /api/items?category=...&sort=...
    fetch(`/api/items?category=${encodeURIComponent(category)}&sort=${encodeURIComponent(sort)}`)
      .then((r) => {
        if (!r.ok) throw new Error('Network error');
        return r.json();
      })
      .then((d) => setItems(d.items || []))
      .catch((err) => {
        console.error(err);
        setItems([]);
      });
  }, [category, sort]);

  const onCategoryChange = (ev) => {
    const next = new URLSearchParams(searchParams);
    next.set('category', ev.target.value);
    next.set('page', '1'); // 페이지 리셋
    setSearchParams(next); // push (기본)
  };

  const onSort = (ev) => {
    const next = new URLSearchParams(searchParams);
    next.set('sort', ev.target.value);
    // 예시: setSearchParams는 push(히스토리 추가)
    setSearchParams(next);
    // 필요 시: navigate({ search: next.toString() }, { replace: true });
  };

  return (
    <div>
      <label style={{ marginRight: 12 }}>
        카테고리:
        <select value={category} onChange={onCategoryChange} style={{ marginLeft: 8 }}>
          <option value="all">전체</option>
          <option value="books">도서</option>
          <option value="electronics">전자제품</option>
        </select>
      </label>

      <label style={{ marginRight: 12 }}>
        정렬:
        <select value={sort} onChange={onSort} style={{ marginLeft: 8 }}>
          <option value="new">최신</option>
          <option value="popular">인기</option>
        </select>
      </label>

      <ul>
        {items.length ? items.map((it) => <li key={it.id}>{it.title}</li>) : <li>항목 없음</li>}
      </ul>
    </div>
  );
}
