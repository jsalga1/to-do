// DailyTasks.js
import React from 'react';
import './WeeklyTasks.css';

const WeeklyTasks = ({ tasks, handleTaskCompletion }) => {
    const WeeklyTasks = tasks.filter(task => task.type === 'Weekly');

    return (
        <div>
            <h2>Tareas diarias</h2>
            {WeeklyTasks.map(task => (
                <div key={task.id}>
                    <input 
                        type="checkbox" 
                        checked={task.completed} 
                        onChange={() => handleTaskCompletion(task.id)} 
                    />
                    <span className={task.completed ? 'completed' : ''}>{task.text}</span>
                </div>
            ))}
        </div>
    );
};

export default WeeklyTasks;