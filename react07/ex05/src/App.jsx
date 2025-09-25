import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 상위 레이아웃 라우트 */}
        <Route path="/" element={<DashboardLayout />}>
          {/* 하위 페이지 */}
          <Route index element={<Home />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
