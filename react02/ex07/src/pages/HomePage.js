import React from 'react';
import Card from '../components/Card';
import TodoContainer from '../containers/TodoContainer';
export default function HomePage() {
  return (
    <div>
      <h2>Home Page</h2>
      <Card>
        <TodoContainer />
      </Card>
    </div>
  );
}