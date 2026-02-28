import React, { useState } from 'react'

export default function TaskForm({addTask}) {

    const[task, setTask] = useState('');
    const[priority, setPriority] = useState('Medium');
    const[category, setCategory] = useState('General');

    const handleSubmit = (e) => {
        e.preventDefault();
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
             <h1>{task} {priority} {category}</h1>
        </div>

        <div className='btns'>
            <select onChange={(event) => {setPriority(event.target.value)}}>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>

            <select onChange={(event) => {setCategory(event.target.value)}}>
                <option value="general">General</option>
                <option value="work">Work</option>
                <option value="personal">Personal</option>
            </select>
        </div>
       
    </form>
  )
}
