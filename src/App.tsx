import { Form } from './components/Form';
import { TodoList } from './components/TodoList';

import TodoProvider from './providers/TodoProvider';

import './global.css'

function App() {
  return (
    <>
      <header>
        <h1>Todo List Project</h1>
      </header>
      <TodoProvider>
        <Form />
        <TodoList />
      </TodoProvider>
    </>
    
  );
}

export default App;
