import React from 'react';
import AppRoutes from './AppRoutes';

export default function App() {
  return (
    <div>
      <header style={{ background: '#282c34', padding: 12 }}>
        <nav style={{ display: 'flex', gap: 12 }}>
          <a href="/" style={{ color: '#fff' }}>Home</a>
          <a href="/search" style={{ color: '#fff' }}>Search</a>
          <a href="/filter" style={{ color: '#fff' }}>Filter</a>
          <a href="/posts/1" style={{ color: '#fff' }}>Post 1</a>
        </nav>
      </header>

      <main style={{ padding: 16 }}>
        <AppRoutes />
      </main>
    </div>
  );
}
