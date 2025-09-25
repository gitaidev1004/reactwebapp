import { Routes, Route, Navigate } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import SearchResult from './pages/search/SearchResult';
import NotFound from './pages/NotFound';

import DashboardLayout from './layouts/DashboardLayout';
import DashboardHome from './pages/dashboard/Home';
import DashboardNotFound from './pages/dashboard/NotFound';

import ProtectedRoute from './components/ProtectedRoute';

const isAuthenticated = false; // 데모용 (로그인 상태 false)

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="search" element={<SearchResult />} />

        {/* 중첩 라우트 : 대시보드 */}
        <Route
          path="dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="*" element={<DashboardNotFound />} />
        </Route>

        {/* 예: 오래된 URL을 새 URL로 이동 */}
        <Route path="old-blog/:id" element={<Navigate to="/search" replace />} />

        {/* 앱 전체 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
