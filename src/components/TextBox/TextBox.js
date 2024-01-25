import React from "react";
import "./TextBox.css";

const TextBox = ({ taskInput, handleInputChange, handleAddTask, selectedOption, handleOptionChange, options }) => {
  return (
    <form onSubmit={handleAddTask} className="input-group">
      <input
        type="text"
        value={taskInput}
        onChange={handleInputChange}
        className="input"
        placeholder="Añade una tarea..."
      />
      <select value={selectedOption} onChange={handleOptionChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button type="submit" className="button">
        Añadir
      </button>
    </form>
  );
};

export default TextBox;