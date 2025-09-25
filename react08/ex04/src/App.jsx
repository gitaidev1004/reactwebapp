import React from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

export default function App() {
  return (
    <div>
      <h1>React Query Todo Example (JSONPlaceholder)</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}
