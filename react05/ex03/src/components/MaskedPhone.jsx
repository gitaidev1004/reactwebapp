import React, { useState } from 'react';
import { formatPhone } from './simpleMask';

export default function MaskedPhone() {
  const [val, setVal] = useState('');
  return (
    <label>
      전화번호
      <input
        value={formatPhone(val)}
        onChange={(e) => setVal(e.target.value)}
        aria-label="전화번호"
      />
    </label>
  );
}
