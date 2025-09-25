import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>동적 라우팅 & 쿼리스트링 샘플 페이지입니다.</p>

      <ul>
        <li><Link to="/posts/1">Post 1 (valid numeric id)</Link></li>
        <li><Link to="/posts/abc">Post abc (invalid id → 404)</Link></li>
        <li><Link to="/search">Search (example with querystring)</Link></li>
        <li><Link to="/filter">Filter example (useSearchParams)</Link></li>
      </ul>
    </div>
  );
}
