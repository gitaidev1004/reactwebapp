import React from 'react';
import BasicAsyncForm from './components/BasicAsyncForm';
import AsyncFieldValidation from './components/AsyncFieldValidation';
import ServerResponseHandling from './components/ServerResponseHandling';

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>react08/ex07: Form과 비동기 검증 예제</h1>

      <section style={{ marginBottom: 40 }}>
        <h2>1. BasicAsyncForm</h2>
        <BasicAsyncForm />
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2>2. AsyncFieldValidation</h2>
        <AsyncFieldValidation />
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2>3. ServerResponseHandling</h2>
        <ServerResponseHandling />
      </section>
    </div>
  );
}
