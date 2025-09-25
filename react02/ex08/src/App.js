import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ParentContainer from './containers/ParentContainer';
import ChildB from './components/ChildB';
export default function App() {
  return (
    <ThemeProvider>
      <div style={{ padding: 20 }}>
        <h1>ex08 — 컴포넌트 간 데이터 전달</h1>
        <ParentContainer />
        <div style={{ height: 20 }} />
        <ChildB />
      </div>
    </ThemeProvider>
  );
}