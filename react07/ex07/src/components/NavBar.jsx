import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export default function NavBar({ items, logo }) {
  const [open, setOpen] = useState(false);
  const user = useUser();

  return (
    <nav className="navbar">
      <div className="logo">{logo}</div>

      <button
        className="hamburger"
        aria-label="메뉴 열기"
        aria-expanded={open}
        aria-controls="nav-menu"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      <ul id="nav-menu" className={`menu ${open ? 'open' : ''}`}>
        {items
          .filter(item => !item.auth || user)
          .map(item => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  );
}
