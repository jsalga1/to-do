// DailyTasks.js
import React from 'react';
import './MonthlyTasks.css';

const monthlyTasksTasks = ({ tasks, handleTaskCompletion }) => {
    const MonthlyTasks = tasks.filter(task => task.type === 'monthly');

    return (
        <div>
            <h2>Tareas diarias</h2>
            {MonthlyTasks.map(task => (
                <div key={task.id} className="task-container">
                <input 
                    type="checkbox" 
                    checked={task.completed} 
                    onChange={() => handleTaskCompletion(task.id)} 
                />
                <span className={`task-text ${task.completed ? 'completed' : ''}`}>{task.text}</span>
            </div>
))}
        </div>
    );
};

export default MonthlyTasks;