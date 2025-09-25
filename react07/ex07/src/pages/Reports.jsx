import { Outlet, Link } from 'react-router-dom';

export default function Reports() {
  return (
    <div>
      <h2>📊 리포트 메인</h2>
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="overview">개요</Link> | <Link to="1">상세(ID=1)</Link>
      </nav>
      <Outlet />
    </div>
  );
}
