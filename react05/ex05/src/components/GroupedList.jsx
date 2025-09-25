// src/components/GroupedList.jsx
import React from 'react';

const sampleData = [
  { id: 1, name: '김기태', category: 'A' },
  { id: 2, name: '유순복', category: 'B' },
  { id: 3, name: '김대철', category: 'A' },
  { id: 4, name: '함창훈', category: 'B' },
  { id: 5, name: '김경희', category: 'C' },
];

export default function GroupedList() {
  const groups = sampleData.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div>
      <h2>Grouped List</h2>
      {Object.keys(groups).map(cat => (
        <div key={cat}>
          <h3>Category {cat} ({groups[cat].length})</h3>
          <ul className="list">
            {groups[cat].map(u => <li key={u.id} className="list-item">{u.name}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}
