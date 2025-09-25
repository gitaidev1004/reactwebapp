// App.jsx
import React, { useState } from 'react';
import { Button } from './components/Button.jsx';
import ButtonGroup from './components/ButtonGroup.jsx';
import IconButton from './components/IconButton.jsx';
import Toast from './components/Toast.jsx';
import StarIcon from './assets/star.svg';

export default function App() {
  const [showToast, setShowToast] = useState(false);

  return (
    <div className="container">
      <h1>6.2 버튼·아이콘·토스트</h1>

      <h2>1️⃣ 버튼 컴포넌트</h2>
      <Button variant="primary" size="lg" onClick={() => setShowToast(true)}>Primary</Button>
      <Button variant="secondary" style={{marginLeft:8}}>Secondary</Button>
      <Button variant="outline" disabled style={{marginLeft:8}}>Disabled</Button>

      <h2>2️⃣ 버튼 그룹</h2>
      <ButtonGroup />

      <h2>3️⃣ 아이콘 버튼</h2>
      <IconButton icon="/star.svg" label="즐겨찾기" />

      <h2>4️⃣ 토스트 알림</h2>
      {showToast && <Toast message="저장이 완료되었습니다." duration={3000} />}
    </div>
  );
}
