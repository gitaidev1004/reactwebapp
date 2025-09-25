import { Navigate, useLocation } from 'react-router-dom';

export default function ProtectedRoute({ isAuthenticated, children }) {
  const location = useLocation();
  if (!isAuthenticated) {
    // 로그인 페이지로 이동, 원래 위치 저장
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}
