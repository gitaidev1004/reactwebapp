import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import { UserContext } from './context/UserContext';

import Home from './pages/Home';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import ReportsOverview from './pages/reports/Overview';
import ReportsDetail from './pages/reports/Detail';

const menuItems = [
  { label: '홈', path: '/' },
  { label: '리포트', path: '/reports' },
  { label: '설정', path: '/settings', auth: true } // 로그인 필요 메뉴 예시
];

export default function App() {
  // 로그인된 사용자(없으면 null)
  const currentUser = { name: '홍길동', avatar: '' };

  return (
    <UserContext.Provider value={currentUser}>
      <NavBar items={menuItems} logo={<span>🚀 Logo</span>} />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reports" element={<Reports />}>
            <Route path="overview" element={<ReportsOverview />} />
            <Route path=":id" element={<ReportsDetail />} />
          </Route>
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}
