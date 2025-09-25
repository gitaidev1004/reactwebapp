import { memo } from 'react';

export default memo(function AccessibleCard({ image, title, link }) {
  return (
    <a href={link} className="card">
      <img src={image} alt={title} loading="lazy" />
      <div className="card-body">
        <h3>{title}</h3>
      </div>
    </a>
  );
});
