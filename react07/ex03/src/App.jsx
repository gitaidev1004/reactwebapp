import React, { Suspense } from 'react';
import AppRoutes from './AppRoutes';
import NavBar from './NavBar';
import ActiveNavExample from './ActiveNavExample';

export default function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <AppRoutes />
        </Suspense>
        <hr />
        {/* NavLink isActive 스타일링 예제 */}
        <ActiveNavExample />
      </main>
    </>
  );
}
