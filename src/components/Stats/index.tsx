import { useTodos } from '../../providers/TodoProvider'
import './style.css'

export const Stats = () => {
  const {todos} = useTodos()
  const total = todos.length;
  const completed = todos.filter(todo => todo.completed === true).length;

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