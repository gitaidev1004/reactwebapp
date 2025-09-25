function MeasuredBox() {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setWidth(rect.width);
      // 이 시점에서 setWidth는 동기적이지는 않지만, useLayoutEffect가 paint 전 동작하므로 레이아웃 깜빡임을 줄여줌
    }
  }, []);
  return <div ref={ref}>너비: {width}</div>;
}