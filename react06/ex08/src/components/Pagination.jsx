import React from "react";

/**
 * Props:
 *  currentPage (number), totalPages (number), onPageChange (fn), siblingCount (number, optional)
 */
export default function Pagination({ currentPage = 1, totalPages = 1, onPageChange, siblingCount = 1 }) {
  if (totalPages <= 1) return null;

  const makeRange = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => start + i);
  const left = Math.max(2, currentPage - siblingCount);
  const right = Math.min(totalPages - 1, currentPage + siblingCount);
  const pages = [];

  pages.push(1);
  if (left > 2) pages.push("left-ellipsis");
  pages.push(...makeRange(left, right));
  if (right < totalPages - 1) pages.push("right-ellipsis");
  if (totalPages > 1) pages.push(totalPages);

  const go = (p) => {
    if (typeof p === "number" && p !== currentPage) onPageChange?.(p);
  };

  return (
    <nav aria-label="페이지 네비게이션">
      <ul style={{ display: "flex", gap: 8 }}>
        <li>
          <button onClick={() => go(currentPage - 1)} disabled={currentPage === 1} aria-label="이전 페이지">
            ◀
          </button>
        </li>
        {pages.map((p, idx) =>
          p === "left-ellipsis" || p === "right-ellipsis" ? (
            <li key={p + idx} aria-hidden="true" style={{ padding: "6px 8px" }}>…</li>
          ) : (
            <li key={p}>
              <button
                onClick={() => go(p)}
                aria-current={p === currentPage ? "page" : undefined}
                aria-label={p === currentPage ? `현재 페이지 ${p}` : `페이지 ${p}으로 이동`}
                style={{
                  fontWeight: p === currentPage ? "700" : "400",
                  textDecoration: p === currentPage ? "underline" : "none"
                }}
              >
                {p}
              </button>
            </li>
          )
        )}
        <li>
          <button onClick={() => go(currentPage + 1)} disabled={currentPage === totalPages} aria-label="다음 페이지">▶</button>
        </li>
      </ul>
    </nav>
  );
}
