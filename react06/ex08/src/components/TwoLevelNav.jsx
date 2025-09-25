import React, { useState } from "react";

/**
 * menus: [{ id:'products', label:'제품', href:'/products', children:[{id:'a',label:'A',href:'/products/a'}] }, ...]
 */
export default function TwoLevelNav({ menus = [] }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTop, setActiveTop] = useState(null);

  return (
    <header>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 8 }}>
        <div>로고</div>
        <button onClick={() => setMobileOpen(v => !v)} aria-expanded={mobileOpen} aria-controls="main-nav">☰</button>
      </div>

      <nav id="main-nav" aria-label="주 메뉴" style={{ display: mobileOpen ? "block" : undefined }}>
        <ul style={{ display: "flex", gap: 12, listStyle: "none", padding: 8, margin: 0 }}>
          {menus.map((m) => {
            const isActive = activeTop === m.id;
            return (
              <li key={m.id} onMouseEnter={() => setActiveTop(m.id)} onMouseLeave={() => setActiveTop(null)}>
                <a href={m.href} aria-current={isActive ? "page" : undefined}>{m.label}</a>
                {m.children && (isActive || mobileOpen) && (
                  <ul role="menu" style={{ position: "absolute", background: "#fff", padding: 8, marginTop: 4, boxShadow: "0 4px 12px rgba(0,0,0,.08)" }}>
                    {m.children.map((c) => (
                      <li key={c.id}><a href={c.href} role="menuitem">{c.label}</a></li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
