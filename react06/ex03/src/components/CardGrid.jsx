import Card from './Card';

export default function CardGrid({ items }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '16px'
      }}
    >
      {items.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
}
