import React, { useState } from 'react';
import ModalDialog from './components/ModalDialog';
import Accordion from './components/Accordion';
import AccessibleButton from './components/AccessibleButton';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <h1>5.2 리액트 웹 접근성(A11Y) 실습</h1>

      <h2>(1) 키보드/ARIA 버튼</h2>
      <AccessibleButton onClick={() => alert('버튼 클릭!')}>
        클릭하세요
      </AccessibleButton>

      <h2>(2) 모달 다이얼로그</h2>
      <button onClick={() => setModalOpen(true)}>모달 열기</button>
      {modalOpen && <ModalDialog onClose={() => setModalOpen(false)} />}

      <h2>(3) 아코디언 패널</h2>
      <Accordion title="패널 1">
        <p>패널 1 내용입니다.</p>
      </Accordion>
      <Accordion title="패널 2">
        <p>패널 2 내용입니다.</p>
      </Accordion>
    </div>
  );
}