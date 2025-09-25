import React from 'react';
import { useParams } from 'react-router-dom';

export default function Post() {
  const { id } = useParams();
  return (
    <div>
      <h1>Post {id}</h1>
      <p>이 페이지는 URL 파라미터(id)에 따라 내용이 변합니다.</p>
    </div>
  );
}
