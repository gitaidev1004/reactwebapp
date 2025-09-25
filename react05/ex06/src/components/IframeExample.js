import React from 'react';

export default function IframeExample({ src, title }) {
  return (
    <iframe
      src={src}
      title={title}
      width="560"
      height="315"
      loading="lazy"
      allowFullScreen
      style={{ border: 'none' }}
    ></iframe>
  );
}
