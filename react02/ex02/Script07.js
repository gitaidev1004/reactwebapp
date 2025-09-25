function Counter() {
  const [cnt, setCnt] = React.useState(0);
  const handleClick = () => setCnt(cnt + 1);   // 화살표 함수
  return <button onClick={handleClick}>COUNT: {cnt}</button>;
}