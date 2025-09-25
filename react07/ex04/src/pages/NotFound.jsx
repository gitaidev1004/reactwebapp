import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>요청하신 페이지를 찾을 수 없습니다.</p>
      <p><Link to="/">홈으로 돌아가기</Link></p>
    </div>
  );
}
