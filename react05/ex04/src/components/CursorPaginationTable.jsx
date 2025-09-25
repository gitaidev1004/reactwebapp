// react05/ex04/src/components/CursorPaginationTable.jsx
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export default function CursorPaginationTable() {
  const [items, setItems] = useState([]);
  const [cursor, setCursor] = useState(null);
  const [hasNext, setHasNext] = useState(true);
  const loaderRef = useRef();

  const loadMore = async () => {
    const res = await axios.get('/api/users', { params: { after: cursor, limit: 20 }});
    setItems(prev => [...prev, ...res.data.items]);
    setCursor(res.data.nextCursor);
    setHasNext(res.data.hasNext);
  };

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting && hasNext) loadMore();
    }, { threshold: 1 });
    if(loaderRef.current) obs.observe(loaderRef.current);
    return () => obs.disconnect();
  }, [hasNext]);

  useEffect(() => { loadMore(); }, []);

  return (
    <div>
      <table>
        <thead><tr><th>ID</th><th>이름</th></tr></thead>
        <tbody>
          {items.map(i => <tr key={i.id}><td>{i.id}</td><td>{i.name}</td></tr>)}
        </tbody>
      </table>
      <div ref={loaderRef} aria-hidden="true">{hasNext ? '로딩...' : '끝'}</div>
    </div>
  );
}
