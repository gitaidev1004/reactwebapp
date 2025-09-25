// ✔ 가능: 표현식
{items.length && <p>총 {items.length}개</p>}

// ✖ 불가: 문장 (컴파일 오류)
{if (items.length) { ... }}