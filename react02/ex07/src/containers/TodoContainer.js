import React, { useState } from 'react';
import Button from '../components/Button';
export default function TodoContainer() {
  const [items, setItems] = useState(['첫 번째 할 일', '두 번째 할 일']);
  const addItem = () => {
    const newItem = `새 항목 ${Date.now()}`;
    setItems(prev => [...prev, newItem]);
  };
  const removeItem = (index) => { setItems(prev => prev.filter((_, i) => i !== index)); };
  return (
    <div>
      <h3>Todo List</h3>
      <Button onClick={addItem}>항목 추가</Button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <Button onClick={() => removeItem(index)}>삭제</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}