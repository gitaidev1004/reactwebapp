import React, { useState } from 'react';

export default function ControlledInput() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const v = e.target.value;
    setName(v);
    setError(v.length < 2 ? '이름은 두 글자 이상입니다.' : '');
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="name">이름</label>
      <input id="name" value={name} onChange={handleChange} />
      {error && (
        <div role="alert" style={{ color: 'red' }}>
          {error}
        </div>
      )}
    </form>
  );
}
