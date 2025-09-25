import React, { createContext, useContext, useState } from 'react';
const ThemeContext = createContext(); // 기본값 생략 가능
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const toggle = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));
  // value는 매 렌더 새 객체가 되므로 메모화 고려
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}