import React from "react";
import './Task.css';

const Task = ({ task, handleTaskCompletion }) => {
  const handleCheckboxChange = () => {
    handleTaskCompletion(task);
  };

  return (
    <div className="task-container">
      <li>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleCheckboxChange}
        />
        <span>{task.text}</span>
      </li>
    </div>
  );
};

export default Task;