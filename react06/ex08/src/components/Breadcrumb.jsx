import React from "react";

/**
 * items: [{ label: '홈', href: '/' }, { label: '카테고리', href: '/cat' }, { label: '현재', href: null }]
 */
export default function Breadcrumb({ items = [] }) {
  if (!items || items.length === 0) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.label,
      item: it.href ? window.location.origin + it.href : window.location.href
    }))
  };

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol style={{ display: "flex", gap: 8 }}>
          {items.map((it, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={idx}>
                {it.href && !isLast ? (
                  <a href={it.href}>{it.label}</a>
                ) : (
                  <span aria-current={isLast ? "page" : undefined}>{it.label}</span>
                )}
                {!isLast && <span aria-hidden="true">/</span>}
              </li>
            );
          })}
        </ol>
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
