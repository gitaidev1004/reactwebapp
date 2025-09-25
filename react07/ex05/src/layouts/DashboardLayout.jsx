import { Outlet, Link } from "react-router-dom";
import MultiLevelNav from "../components/MultiLevelNav";

export default function DashboardLayout() {
  return (
    <div style={{ display: "flex" }}>
      {/* 사이드바 */}
      <nav style={{ width: "200px", background: "#f1f1f1", padding: "1rem" }}>
        <ul>
          <li><Link to="/">홈</Link></li>
          <li><Link to="/reports">리포트</Link></li>
          <li><Link to="/settings">설정</Link></li>
        </ul>
        <hr />
        <MultiLevelNav />
      </nav>
      {/* 메인 콘텐츠 영역 */}
      <main style={{ padding: "1rem", flex: 1 }}>
        {/* 중첩 라우트가 렌더링되는 영역 */}
        <Outlet />
      </main>
    </div>
  );
}
