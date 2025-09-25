// src/components/InfiniteList.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';

export default function InfiniteList() {
  const [items, setItems] = useState([]);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  const loadMore = useCallback(() => {
    if (!hasMore) return;
    axios.get(`https://dummyjson.com/users?limit=10&skip=${skip}`)
      .then(res => {
        setItems(prev => [...prev, ...res.data.users]);
        setSkip(prev => prev + 10);
        if (skip + 10 >= res.data.total) setHasMore(false);
      });
  }, [skip, hasMore]);

  const lastItemRef = useCallback(node => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) loadMore();
    });
    if (node) observer.current.observe(node);
  }, [loadMore]);

  useEffect(() => { loadMore(); }, []);

  return (
    <div>
      <h2>Infinite List</h2>
      <ul className="list">
        {items.map((u, idx) => {
          if (idx === items.length - 1) {
            return <li ref={lastItemRef} key={u.id} className="list-item">{u.firstName} {u.lastName}</li>
          }
          return <li key={u.id} className="list-item">{u.firstName} {u.lastName}</li>
        })}
      </ul>
      {!hasMore && <p>End of list</p>}
    </div>
  );
}
