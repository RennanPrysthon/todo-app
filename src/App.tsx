import React from 'react';
import { Form } from './components/Form';
import { TodoList } from './components/TodoList';

import './global.css'
import TodoProvider from './providers/TodoProvider';
function App() {
  return (
    <>
      <header>
        <h1>Todo List</h1>
      </header>
      <TodoProvider>
        <Form />
        <TodoList />
      </TodoProvider>
    </>
    
  );
}

export default App;
