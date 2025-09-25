import { useCallback } from 'react';
import CardGrid from './components/CardGrid';
import AccessibleCard from './components/AccessibleCard';
import MasonryGrid from './components/MasonryGrid';

const sampleItems = [
  { id: 1, image: '/image1.jpg', title: '카드1', meta: '메타 정보1' },
  { id: 2, image: '/image2.jpg', title: '카드2', meta: '메타 정보2' },
  { id: 3, image: '/image3.jpg', title: '카드3', meta: '메타 정보3' },
  { id: 4, image: '/image1.jpg', title: '카드4', meta: '메타 정보4' },
  { id: 5, image: '/image2.jpg', title: '카드5', meta: '메타 정보5' },
  { id: 6, image: '/image3.jpg', title: '카드6', meta: '메타 정보6' },
];

export default function App() {
  const handleAction = useCallback(() => alert('Action!'), []);

  const withAction = sampleItems.map(item => ({
    ...item,
    onAction: handleAction
  }));

  return (
    <div>
      <h1>6.3 카드 & 갤러리 UI</h1>

      <h2>1️⃣ 기본 카드 그리드</h2>
      <CardGrid items={withAction} />

      <h2 style={{ marginTop: 40 }}>2️⃣ 접근성 카드</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px'
        }}
      >
        {sampleItems.map(item => (
          <AccessibleCard
            key={item.id}
            image={item.image}
            title={item.title}
            link="#"
          />
        ))}
      </div>

      <h2 style={{ marginTop: 40 }}>3️⃣ Masonry 레이아웃</h2>
      <MasonryGrid items={withAction} />
    </div>
  );
}
