import { useMemo } from 'react'

import { useTodos } from '../../providers/TodoProvider'

import './style.css'

export const Stats = () => {
  const { todos } = useTodos()

  const total = useMemo(() => todos.length, [todos]);
  const completed = useMemo(() => todos.filter(todo => todo.completed === true).length, [todos])

  return (
    <div className="stats-container">
      <div className="board all">
       <div>
        <h3>Total</h3>
        <span>{total}</span>
       </div>
      </div>
      <div className="board finished">
        <div>
          <h3>Completed</h3>
          <span>{completed}</span>
        </div>
      </div>
    </div>
  )
}