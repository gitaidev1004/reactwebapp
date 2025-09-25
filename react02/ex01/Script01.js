function Counter() {
  let count = 0;

  const handleClick = () => {
    count += 1;
    console.log(count);
  };

  return <button onClick={handleClick}>Click</button>;
}