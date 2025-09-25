import React, { useState } from 'react';
import useSWR, { mutate } from 'swr';

export default function TodosSWR() {
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/todos');

  const [title, setTitle] = useState('');

  const addTodo = async () => {
    if (!title) return;

    mutate('https://jsonplaceholder.typicode.com/todos', async (current = []) => {
      const optimistic = [{ id: Date.now(), title, completed: false }, ...current];
      // 서버 요청 (실제 JSONPlaceholder는 POST 안 되지만 구조 시연)
      await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify({ title, completed: false }),
        headers: { 'Content-Type': 'application/json' }
      });
      return optimistic;
    }, { revalidate: true });

    setTitle('');
  };

  if (error) return <div role="alert">에러: {String(error.message)}</div>;
  if (!data) return <div>로딩...</div>;

  return (
    <div>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={addTodo}>추가</button>
      <ul>
        {data.slice(0, 5).map(todo => (
          <li key={todo.id}>
            {todo.title} {todo.completed ? '(완료)' : ''}
          </li>
        ))}
      </ul>
    </div>
  );
}
