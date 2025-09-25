import { Link, Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div>
      <header style={{ padding: 16, background: '#222', color: '#fff' }}>
        <h1>🌐 React Router 404 Demo</h1>
        <nav style={{ marginTop: 8 }}>
          <Link to="/" style={{ color: '#fff', marginRight: 8 }}>홈</Link>
          <Link to="/dashboard" style={{ color: '#fff', marginRight: 8 }}>대시보드</Link>
          <Link to="/search" style={{ color: '#fff' }}>검색</Link>
        </nav>
      </header>
      <main style={{ padding: 24 }}>
        <Outlet />
      </main>
    </div>
  );
}
