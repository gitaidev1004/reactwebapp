import React from 'react';
import './App.css';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
function App() {
  return (
    <div className="App">
      <h1>함수형 vs 클래스형 컴포넌트</h1>
      <FunctionalComponent name="React" />
      <ClassComponent name="React" />
    </div>
  );
}
export default App;