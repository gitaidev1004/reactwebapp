import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Dashboard 메인 화면입니다.</p>
      <Link to="stats">Go to Stats</Link>
      <Outlet /> {/* /dashboard/stats 자식 라우트 */}
    </div>
  );
}
