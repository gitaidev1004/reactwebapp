import React from 'react';
import useSWR from 'swr';

export default function BasicSWR() {
  const { data, error, isValidating } = useSWR('https://jsonplaceholder.typicode.com/users');

  if (error) return <div role="alert">에러: {String(error.message)}</div>;
  if (!data && isValidating) return <div>로딩...</div>;

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name} ({user.email})</li>
      ))}
    </ul>
  );
}
