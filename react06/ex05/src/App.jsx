import Dropdown from './components/DropdownComp.jsx';
import { useRef, useState } from 'react';
import Popover from './components/PositioningComp.jsx';
import Tooltip from './components/TooltipComp.jsx';

export default function App() {
  const buttonRef = useRef();
  const [showPopover, setShowPopover] = useState(false);

  return (
    <div>
      <h1>6.5 드롭다운 / 팝오버 / 툴팁</h1>

      <h2>1️⃣ 기본 드롭다운</h2>
      <Dropdown label="메뉴 열기" items={['옵션 1', '옵션 2', '옵션 3']} />

      <h2 style={{ marginTop: 40 }}>2️⃣ 팝오버</h2>
      <button ref={buttonRef} onClick={() => setShowPopover(prev => !prev)}>
        팝오버 열기
      </button>
      {showPopover && <Popover targetRef={buttonRef}>여기에 팝오버 내용 표시</Popover>}

      <h2 style={{ marginTop: 40 }}>3️⃣ 툴팁</h2>
      <Tooltip text="툴팁 안내 메시지">
        <button>마우스 또는 포커스</button>
      </Tooltip>
    </div>
  );
}
