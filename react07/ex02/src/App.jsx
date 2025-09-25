import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <>
      <NavBar />
      <main style={{ padding: '20px' }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
