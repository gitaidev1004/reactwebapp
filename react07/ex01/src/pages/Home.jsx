import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>SPA 예제: 홈 페이지입니다.</p>
      <Link to="/about">About 페이지로 이동</Link>
      <br/>
      <Link to="/post/1">Post 1</Link>
      <br/>
      <Link to="/post/2">Post 2</Link>
    </div>
  );
}
