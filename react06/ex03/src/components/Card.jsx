export default function Card({ image, title, meta, onAction }) {
  return (
    <div className="card">
      <img src={image} alt={title} loading="lazy" />
      <div className="card-body">
        <h3>{title}</h3>
        <p>{meta}</p>
        <button onClick={onAction}>Action</button>
      </div>
    </div>
  );
}
