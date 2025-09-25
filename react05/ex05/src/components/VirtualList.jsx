// src/components/VirtualList.jsx
import React from 'react';
import { FixedSizeList as List } from 'react-window';

export default function VirtualList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style} className="list-item">
      {items[index].name}
    </div>
  );

  return (
    <div>
      <h2>Virtual List</h2>
      <List
        height={300}
        itemCount={items.length}
        itemSize={50}
        width="100%"
      >
        {Row}
      </List>
    </div>
  );
}
