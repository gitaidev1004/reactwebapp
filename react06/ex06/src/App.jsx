import { useState } from 'react';
import Modal from './components/ModalComp.jsx';
import FocusTrapModal from './components/FocusTrapModal.jsx';
import ScrollLockModal from './components/ScrollLockModal.jsx';

export default function App() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  return (
    <div>
      <h1>6.6 레이어 팝업 / 모달</h1>

      <h2>1️⃣ 기본 모달</h2>
      <button onClick={() => setOpen1(true)}>모달 열기</button>
      <Modal isOpen={open1} onClose={() => setOpen1(false)}>
        <p>기본 모달 내용</p>
      </Modal>

      <h2>2️⃣ 포커스 트랩 모달</h2>
      <button onClick={() => setOpen2(true)}>포커스 트랩 모달 열기</button>
      <FocusTrapModal isOpen={open2} onClose={() => setOpen2(false)}>
        <p>Tab 키로 포커스 제한</p>
        <input placeholder="입력 가능" />
      </FocusTrapModal>

      <h2>3️⃣ 스크롤 잠금 모달</h2>
      <button onClick={() => setOpen3(true)}>스크롤 잠금 모달 열기</button>
      <ScrollLockModal isOpen={open3} onClose={() => setOpen3(false)}>
        <p>배경 스크롤이 잠김</p>
      </ScrollLockModal>
    </div>
  );
}
