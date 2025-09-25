import React, { useState } from 'react';

export default function ChatInput({ onSend }) {
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    onSend(text.trim());
    setText('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="메시지 입력..." />
      <button type="submit">전송</button>
    </form>
  );
}
