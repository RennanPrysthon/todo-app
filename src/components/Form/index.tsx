import { FormEvent, useRef }  from "react";

import { useTodos } from "../../providers/TodoProvider";
import './styles.css'

export const Form = () => {
  const { addTodo } = useTodos()

  const ref = useRef<HTMLInputElement>({} as HTMLInputElement)

  function onHandleSubmit (event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const value = ref.current.value
    if (value.trim() === '') return
    
    addTodo(value);  
    
    ref.current.value = ''
  }

  return (
    <form onSubmit={onHandleSubmit}>
      <input type="text" className="todo-input" ref={ref} />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square" />
      </button>
    </form>
  )
}