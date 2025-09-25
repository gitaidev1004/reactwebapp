//App.jsx
import React from 'react';
import ChatApp from './components/ChatApp';

export default function App() {
  return (
    <div>
      <h1>React WebSocket 실시간 채팅 예제</h1>
      <ChatApp wsUrl="ws://localhost:8090" roomId="room1" />
    </div>
  );
}
