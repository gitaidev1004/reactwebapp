import React, { useMemo } from 'react';
import { useTodos } from '../context/TodoContext';
import TodoItem from './TodoItem';
export default function TodoList() {
  const todos = useTodos();
  // 완료 항목은 아래로 정렬
  const ordered = useMemo(
    () => [...todos].sort((a, b) => Number(a.done) - Number(b.done)),
    [todos]
  );
  return (
    <ul className="list">
      {ordered.map(t => <TodoItem key={t.id} todo={t} />)}
    </ul>
  );
}