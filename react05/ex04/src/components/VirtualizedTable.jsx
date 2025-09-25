// react05/ex04/src/components/VirtualizedTable.jsx
import React, { useMemo } from 'react';
import { FixedSizeList as List } from 'react-window';

const generateData = (count) =>
  Array.from({ length: count }, (_, i) => ({ id: i + 1, name: `User${i + 1}` }));

export default function VirtualizedTable() {
  const data = useMemo(() => generateData(1000), []);

  const Row = ({ index, style, data: items }) => {
    const item = items?.[index]; // 안전하게 접근
    if (!item) return null;

    return (
      <div
        style={{
          ...style,
          display: 'flex',
          alignItems: 'center',
          padding: '0 8px',
          borderBottom: '1px solid #eee',
        }}
      >
        <span style={{ width: '50px' }}>{item.id}</span>
        <span>{item.name}</span>
      </div>
    );
  };

  return (
    <List
      height={400}
      width="100%"
      itemCount={data.length}
      itemSize={35}
      itemData={data}
    >
      {Row}
    </List>
  );
}
