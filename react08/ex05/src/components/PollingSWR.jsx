import React from 'react';
import useSWR from 'swr';

export default function PollingSWR() {
  const { data, error, isValidating } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    {
      refreshInterval: 5000,
      revalidateOnFocus: true,
      dedupingInterval: 2000,
      errorRetryCount: 3,
      errorRetryInterval: 5000
    }
  );

  if (error) return <div role="alert">오류: {String(error.message)}</div>;

  return (
    <div>
      <div>{isValidating ? '백그라운드 업데이트 중…' : '최신 데이터'}</div>
      <ul>
        {data?.slice(0, 5).map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
