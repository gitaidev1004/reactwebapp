/* JSX */
const element = <h1 className="title">Hi</h1>;

/* Babel 변환 결과 */
const element2 = React.createElement(
  'h1',
  { className: 'title' },
  'Hi'
);