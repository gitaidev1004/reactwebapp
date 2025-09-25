import React, { useState } from "react";
import Pagination from "./components/Pagination.jsx";
import Breadcrumb from "./components/Breadcrumb.jsx";
import TwoLevelNav from "./components/TwoLevelNav.jsx";

export default function App() {
  const [page, setPage] = useState(3);

  const menus = [
    { id: 'products', label: '제품', href:'/products', children: [{id:'p1',label:'제품A',href:'/products/a'}] },
    { id: 'docs', label: '문서', href:'/docs', children: [{id:'d1',label:'가이드',href:'/docs/guide'}] },
  ];

  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '제품', href: '/products' },
    { label: '쿠키', href: null }
  ];

  return (
    <div>
      <h1>6.8 페이지네이션·브레드크럼·내비게이션</h1>

      <h2>1️⃣ Two Level Navigation</h2>
      <TwoLevelNav menus={menus} />

      <h2>2️⃣ Breadcrumb</h2>
      <Breadcrumb items={breadcrumbItems} />

      <h2>3️⃣ Pagination</h2>
      <Pagination currentPage={page} totalPages={20} onPageChange={setPage} siblingCount={1} />
    </div>
  );
}
