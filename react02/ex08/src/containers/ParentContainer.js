import React, { useState } from 'react';
import ChildA from '../components/ChildA';
import SiblingDisplay from '../components/SiblingDisplay';
export default function ParentContainer() {
  const [text, setText] = useState('');
  return (
    <div>
      <ChildA value={text} onChange={setText} />
      <SiblingDisplay value={text} />
    </div>
  );
}