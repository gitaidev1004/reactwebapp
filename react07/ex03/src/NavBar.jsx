import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './nav.css';

export default function NavBar() {
  return (
    <nav className="nav">
      {/* 일반 링크 */}
      <Link to="/">Home</Link>
      {/* NavLink: isActive 기반 클래스 스타일링 */}
      <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
        About
      </NavLink>
      {/* NavLink: state 전달 및 replace 예시 */}
      <NavLink to="/search" state={{ fromNav: true }} replace={false}>
        Search
      </NavLink>
    </nav>
  );
}
