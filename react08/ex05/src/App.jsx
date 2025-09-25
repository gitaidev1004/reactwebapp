import React from 'react';
import BasicSWR from './components/BasicSWR';
import PollingSWR from './components/PollingSWR';
import TodosSWR from './components/TodosSWR';

export default function App() {
  return (
    <div>
      <h1>SWR 실습 예제</h1>
      <h2>1. BasicSWR</h2>
      <BasicSWR />
      <h2>2. PollingSWR</h2>
      <PollingSWR />
      <h2>3. TodosSWR</h2>
      <TodosSWR />
    </div>
  );
}
