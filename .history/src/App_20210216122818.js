import React from 'react';
import TodoInsert from './components/TodoInsert';
import TodoTemplate from './TodoTemplate';

const App = () => {
  return (
    <TodoTemplate>
      <TodoInsert />
    </TodoTemplate>
  );
};

export default App;
