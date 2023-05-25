export default function TasksList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <label>
              <input 
                type="checkbox" 
                checked={todo.completed} 
                onChange={(e) => toggleTodo(todo.id, e.target.checked)}
              />
              {todo.title}
            </label>
            <button 
              className="button delButton"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        )
      })}
    </ul>
  )
}