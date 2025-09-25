function Card({ title, children }) {
  return (
    <>                       {/* Fragment: 불필요한 div 방지 */}
      <h3>{title}</h3>
      <section>{children}</section>
    </>
  );
}