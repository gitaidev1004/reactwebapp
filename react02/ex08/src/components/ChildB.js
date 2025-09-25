import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
export default function ChildB() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div style={{ padding: 12, background: theme === 'light' ? '#eee' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <h3>Child B (Context)</h3>
      <p>현재 테마: {theme}</p>
      <button onClick={toggleTheme}>테마 변경</button>
    </div>
  );
}