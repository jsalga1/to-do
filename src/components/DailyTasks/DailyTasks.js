import React from 'react';
import './DailyTasks.css';

const DailyTasks = ({ tasks, handleTaskCompletion }) => {
    const dailyTasks = tasks.filter(task => task.type === 'daily');

    return (
        <div className="DailyTasks">
            <h2>Tareas diarias</h2>
            {dailyTasks.map(task => (
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

export default DailyTasks;