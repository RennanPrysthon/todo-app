import { 
  createContext, 
  useContext, 
  useState, 
  useEffect, 
  ReactNode
} from "react"

const STORAGE_NAME = '@todoapp/todos'

export type TodoType = {
  id: number;
  value: string;
  completed: boolean
}

type TodoContextData = {
  todos: TodoType[];
  addTodo: (value: string) => void;
  removeTodo: (id: number) => void;
  completeTodo: (id: number) => void;
}

const TodoContext = createContext({} as TodoContextData);

interface TodoProviderProps {
  children: ReactNode
}

const TodoProvider  = ({ children }: TodoProviderProps) => {
  const [todos, setTodos] = useState<TodoType[]>([])

  function addTodo(value: string) {
    setTodos(todos => [...todos, { id: todos.length + 1, value, completed: false }])
  }

  function removeTodo(id: number) {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }

  function completeTodo(id: number) {
    const alteredTodos = todos.map(todo => {
      if (todo.id === id)
        todo.completed = !todo.completed;

      return todo;
    })
    setTodos(alteredTodos)
  }

  useEffect(() => {
    if (localStorage.getItem(STORAGE_NAME) === null) {
      setTodos([])
      return;
    }

    const todoStorage = localStorage.getItem(STORAGE_NAME) || ''
    setTodos(JSON.parse(todoStorage))
  }, [])

  useEffect(() => {
    if (todos.length < 1) {
      localStorage.setItem(STORAGE_NAME, JSON.stringify([]))
      return;
    }
    localStorage.setItem(STORAGE_NAME, JSON.stringify(todos))
  }, [todos])

  return (
    <TodoContext.Provider 
      value={{
        todos,
        addTodo,
        removeTodo,
        completeTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export const useTodos = () => useContext(TodoContext);

export default TodoProvider;