import React from 'react';
import { TodoProvider } from './context/TodoContext';
import TodoInput from './components/TodoInput';
import StatsBar from './components/StatsBar';
import TodoList from './components/TodoList';
export default function App() {
  return {
    /* 컨텍스트로 전역 상태 제공, 입력/통계/목록을 배치 */
  } && (
    <TodoProvider>
      <div className="container">
        <h1>ex09 — Hooks Mini Project</h1>
        <TodoInput />
        <StatsBar />
        <TodoList />
      </div>
    </TodoProvider>
  );
}