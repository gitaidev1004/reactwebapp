import React, { useState } from 'react';
import ControlledInput from './components/ControlledInput';
import UncontrolledInput from './components/UncontrolledInput';
import AccessibleField from './components/AccessibleField';
import FileUploader from './components/FileUploader';
import MaskedPhone from './components/MaskedPhone';
import { NativeDateTime } from './components/NativeDateTime';
import Rform from './components/Rform';

export default function App() {
  const [accError, setAccError] = useState('');

  return (
    <div style={{ padding: 20 }}>
      <h1>5.3 폼(Form) 구현과 관리</h1>

      <h2>(1) 제어된 vs 비제어된 입력</h2>
      <ControlledInput />
      <UncontrolledInput />

      <h2>(3) 접근성 있는 입력</h2>
      <AccessibleField
        id="a11y"
        label="접근성 이름"
        error={accError}
        onChange={(e) =>
          setAccError(e.target.value.length < 2 ? '두 글자 이상 입력하세요' : '')
        }
      />

      <h2>(2) react-hook-form + Yup</h2>
      <Rform />

      <h2>(4) 고급 입력 UI</h2>
      <FileUploader />
      <MaskedPhone />
      <NativeDateTime
        date=""
        time=""
        onDateChange={(v) => console.log('date', v)}
        onTimeChange={(v) => console.log('time', v)}
      />
    </div>
  );
}