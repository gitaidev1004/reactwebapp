import React from 'react';
export default function Display({ message }) {
  return (
    <div>
      <h3>속성(Props) 예제</h3>
      <p>부모가 전달한 메시지: {message}</p>
    </div>
  );
}