import { Link, Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div>
      <h2>📊 Dashboard Layout</h2>
      <nav>
        <Link to="/dashboard">대시보드 홈</Link>
      </nav>
      <div style={{ marginTop: 16 }}>
        <Outlet />
      </div>
    </div>
  );
}
