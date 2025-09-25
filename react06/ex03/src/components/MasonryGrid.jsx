import Masonry from 'react-masonry-css';
import Card from './Card';

export default function MasonryGrid({ items }) {
  const breakpoints = { default: 3, 1100: 2, 700: 1 };
  return (
    <Masonry
      breakpointCols={breakpoints}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {items.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </Masonry>
  );
}
