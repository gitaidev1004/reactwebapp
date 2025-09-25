import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PostPage from './pages/PostPage';
import SearchPage from './pages/SearchPage';
import FilterPage from './pages/FilterPage';
import NotFound from './pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts/:postId" element={<PostPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/filter" element={<FilterPage />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
