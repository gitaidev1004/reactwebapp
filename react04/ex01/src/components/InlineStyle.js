import React from 'react';
export default function InlineStyle() {
  const style = {
    color: 'purple',
    fontSize: '28px',
    padding: '10px'
  };
  return <h1 style={style}>Inline Style 적용</h1>;
}