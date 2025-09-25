import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function SearchList() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const q = params.get('q') || '';
  const page = Number(params.get('page') || 1);

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // 실제 API: /api/items?q=...&page=N
    fetch(`/api/items?q=${encodeURIComponent(q)}&page=${page}`)
      .then((r) => {
        if (!r.ok) throw new Error('Network response was not ok');
        return r.json();
      })
      .then((data) => {
        // 예시 응답 구조: { items: [...] }
        setItems(data.items || []);
      })
      .catch((err) => {
        console.error(err);
        setItems([]);
      })
      .finally(() => setLoading(false));
  }, [q, page]);

  const onSearch = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const qv = form.get('q') || '';
    // navigate with new query (push)
    navigate(`?q=${encodeURIComponent(qv)}&page=1`);
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        <input name="q" defaultValue={q} placeholder="검색어 입력" />
        <button type="submit">검색</button>
      </form>

      <div>페이지: {page}</div>

      {loading ? (
        <div>로딩중…</div>
      ) : (
        <ul>
          {items.length ? items.map((it) => <li key={it.id}>{it.name}</li>) : <li>검색 결과 없음</li>}
        </ul>
      )}
    </div>
  );
}
