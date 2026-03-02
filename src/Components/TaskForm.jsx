import React, { useState } from 'react'

export default function TaskForm({addTask}) {
    const[task, setTask] = useState('');
    const[priority, setPriority] = useState('Medium');
    const[category, setCategory] = useState('General');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!task.trim()) return; // Prevent empty tasks
        
        addTask({text: task, priority, category, completed: false});

        // Reset
        setTask('');
        setPriority('Medium');
        setCategory('General');
    }

  return (
    <form id='task-form' onSubmit={handleSubmit}>
        <div id='inp'>
            <input type='text' placeholder='Enter your task' value={task}
            onChange={(event) => {setTask(event.target.value)}} />
            <button type='submit'>Add Task</button>
        </div>

        <div className='btns'>
            <select value={priority} onChange={(event) => {setPriority(event.target.value)}}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>

            <select value={category} onChange={(event) => {setCategory(event.target.value)}}>
                <option value="General">General</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
            </select>
        </div>
    </form>
  )
}
