import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTodos } from './api';

export default function TodoList() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
    staleTime: 60 * 1000,
  });

  if (isLoading) return <div>로딩...</div>;
  if (isError) return <div role="alert">에러: {String(error.message)}</div>;

  return (
    <div>
      <button onClick={() => refetch()}>수동 새로고침</button>
      <ul>
        {data.map((t) => (
          <li key={t.id}>{t.title}</li>
        ))}
      </ul>
    </div>
  );
}
