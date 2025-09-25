import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ActiveNavExample() {
  return (
    <div style={{ display: 'flex', gap: 12 }}>
      {/* exact-like 매칭: end 사용 */}
      <NavLink
        to="/settings"
        end
        className={({ isActive }) => (isActive ? 'nav-btn active' : 'nav-btn')}
        aria-label="설정"
      >
        Settings
      </NavLink>
      {/* inline style 방식 */}
      <NavLink
        to="/profile"
        style={({ isActive }) => ({
          padding: '6px 10px',
          color: isActive ? '#fff' : '#333',
          background: isActive ? '#007bff' : 'transparent',
          borderRadius: 6,
          textDecoration: 'none'
        })}
      >
        Profile
      </NavLink>
    </div>
  );
}
