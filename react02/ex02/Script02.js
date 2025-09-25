function HelloJSX() {
  const name = 'React';
  return (
    <section className="box">            {/* 단일 최상위 노드 */}
      <h1>Hello, {name}!</h1>            {/* {} 안 표현식 */}
      <img src="/logo.svg" alt="logo" /> {/* 닫는 태그 */}
    </section>
  );
}