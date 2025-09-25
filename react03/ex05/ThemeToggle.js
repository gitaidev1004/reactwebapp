import React from 'react';
import { useTheme } from './ThemeContext';
export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return <button onClick={toggle}>현재 테마: {theme}</button>;
}