import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function NotFound() {
  const headingRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    headingRef.current?.focus();
    document.title = '404 — 페이지를 찾을 수 없습니다';
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      // navigate('/', { replace: true });
    }, 8000);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <main style={{ padding: 24 }}>
      <h1 tabIndex={-1} ref={headingRef}>404 — 페이지를 찾을 수 없습니다</h1>
      <p role="status" aria-live="polite">
        요청하신 페이지가 존재하지 않거나 이동되었습니다.
      </p>
      <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
        <Link to="/" style={{ padding: '8px 12px', background:'#007bff', color:'#fff', borderRadius:6 }}>홈으로 가기</Link>
        <Link to="/search" style={{ padding: '8px 12px', border:'1px solid #ddd', borderRadius:6 }}>검색 페이지</Link>
      </div>
      <section style={{ marginTop: 20 }}>
        <form onSubmit={(e) => {
          e.preventDefault();
          const q = e.target.q.value;
          navigate(`/search?q=${encodeURIComponent(q)}`);
        }}>
          <label>
            검색어:
            <input name="q" style={{ marginLeft:8 }} />
          </label>
          <button type="submit" style={{ marginLeft:8 }}>검색</button>
        </form>
        <div style={{ marginTop: 12 }}>
          <button onClick={() => window.history.back()}>뒤로 가기</button>
        </div>
      </section>
    </main>
  );
}
