import { useState } from 'react';
import NewTasksForm from "./NewTasksForm"
import TasksList from './TasksList';
import "./styles.css";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { 
          id: crypto.randomUUID(), 
          title,
          completed: false 
        }
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if(todo.id === id) {
          return {...todo, completed} 
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id)
    })
  }

  return (
    <>
      <div>
        <NewTasksForm addTodo={addTodo}/>
        <h1 className="listHeader">Todo List</h1>
        <TasksList 
          todos={todos} 
          toggleTodo={toggleTodo} 
          deleteTodo={deleteTodo} 
        />
      </div>
    </>
  )
}

export default App;