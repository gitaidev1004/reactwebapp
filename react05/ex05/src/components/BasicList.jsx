// src/components/BasicList.jsx
import React from 'react';

const users = [
  { id: 1, name: '김기태', img: '/a.jpg' },
  { id: 2, name: '유순복', img: '/b.jpg' },
  { id: 3, name: '김대철', img: '/c.jpg' },
];

export default function BasicList() {
  return (
    <ul className="list">
      {users.map(user => (
        <li key={user.id} className="list-item">
          <img src={user.img} alt={user.name} width={60} height={60} />
          <div>{user.name}</div>
        </li>
      ))}
    </ul>
  );
}
