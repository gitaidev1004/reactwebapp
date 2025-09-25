import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Post from './pages/Post.jsx';

const About = lazy(() => import('./pages/About.jsx'));

function LoginButton() {
  const navigate = useNavigate();
  const onLogin = () => {
    // 로그인 성공 후 Dashboard로 이동 예제
    navigate('/dashboard');
  };
  return <button onClick={onLogin}>Login</button>;
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/login">Login</Link>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/login" element={<LoginButton />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
