import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/dashboard">Dashboard</Link>
        </nav>
      </header>
      <main style={{ padding: 16 }}>
        <Outlet /> {/* 자식 Route가 여기 렌더링 */}
      </main>
      <footer style={{ padding: 16, borderTop: '1px solid #eee' }}>© Company</footer>
    </>
  );
}
