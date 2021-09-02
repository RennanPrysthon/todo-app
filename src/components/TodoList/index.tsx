import React, { useEffect } from "react";
import { useTodos } from "../../providers/TodoProvider";
import { Todo } from "../Todo";

export const TodoList = () => { 
  const { todos } = useTodos()
  useEffect(() => {}, [todos])
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map(todo => <Todo todo={todo} key={todo.id} />)}
      </ul>
    </div>
  )
}