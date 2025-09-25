import React from 'react';

export default function AccessibleField({ id, label, error, ...props }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error && (
        <div id={`${id}-error`} role="alert" style={{ color: 'red' }}>
          {error}
        </div>
      )}
    </div>
  );
}
