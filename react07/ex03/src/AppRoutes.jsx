import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import DashboardStats from './pages/DashboardStats';
import NotFound from './pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />                 {/* / */}
        <Route path="about" element={<About />} />        {/* /about */}
        <Route path="dashboard" element={<Dashboard />}>  {/* /dashboard */}
          <Route path="stats" element={<DashboardStats />} /> {/* /dashboard/stats */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
