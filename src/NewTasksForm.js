import { useState } from 'react';

export default function NewTasksForm({ addTodo }) {
    const [newTask, setNewTask] = useState("");

    function handleSubmit(e) {
        e.preventDefault()
    
        if(newTask === "") {
          return newTask;
        }
        
        addTodo(newTask)

        setNewTask("")
      }

    return  (
        <form className="newTaskForm" onSubmit={handleSubmit}>
            <div className="formInput">
                <label htmlFor="newTask">New Task</label>
                <input 
                    type="text" 
                    id="newTask"
                    value={newTask} 
                    onChange={(e) => setNewTask(e.target.value)}
                />
            </div>
            <button 
                className="button" 
                onClick={handleSubmit}
            >
                Add
            </button>
        </form>
    )
}