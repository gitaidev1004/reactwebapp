import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <header style={{ background: '#282c34', padding: '1rem' }}>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/" style={{ color: 'white' }}>Home</Link>
        <Link to="/about" style={{ color: 'white' }}>About</Link>
      </nav>
    </header>
  );
}