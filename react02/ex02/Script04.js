function ProductList({ items }) {
  return (
    <ul>
      {items.map(({ id, title }) => (
        <li key={id}>{title}</li>   {/* key 필수 */}
      ))}
    </ul>
  );
}