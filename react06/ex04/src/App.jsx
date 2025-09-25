import Tabs from './components/Tabs';
import Accordion from './components/Accordion';
import AnimatedAccordion from './components/AnimatedAccordion';
import AccessibleAccordion from './components/AccessibleAccordion';
import { useState } from 'react';

export default function App() {
  const [showAnim, setShowAnim] = useState(false);

  const tabItems = [
    { label: 'Tab1', content: '탭 콘텐츠 1' },
    { label: 'Tab2', content: '탭 콘텐츠 2' },
    { label: 'Tab3', content: '탭 콘텐츠 3' }
  ];

  const accItems = [
    { label: 'Section 1', content: '아코디언 내용 1' },
    { label: 'Section 2', content: '아코디언 내용 2' },
    { label: 'Section 3', content: '아코디언 내용 3' }
  ];

  return (
    <div>
      <h1>6.4 탭 / 아코디언 / 콜랩시블</h1>

      <h2>1️⃣ 탭 기본</h2>
      <Tabs tabs={tabItems} />

      <h2 style={{ marginTop: 40 }}>2️⃣ 아코디언 기본</h2>
      <Accordion items={accItems} allowMultiple={true} />

      <h2 style={{ marginTop: 40 }}>3️⃣ Framer Motion 애니메이션</h2>
      <button onClick={() => setShowAnim((prev) => !prev)}>
        {showAnim ? '닫기' : '열기'}
      </button>
      <AnimatedAccordion isOpen={showAnim}>
        <div style={{ padding: 16 }}>애니메이션으로 열리고 닫히는 영역입니다.</div>
      </AnimatedAccordion>

      <h2 style={{ marginTop: 40 }}>4️⃣ 접근성 강화 아코디언</h2>
      <AccessibleAccordion items={accItems} />
    </div>
  );
}
