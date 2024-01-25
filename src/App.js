import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import TextBox from "./components/TextBox/TextBox";
import Task from "./components/Task/Task"; 
import DarkModeSwitch from "./components/DarkModeSwitch/DarkModeSwitch";
import "./App.css";

const App = () => {
  const [dailyTasks, setDailyTasks] = useState(JSON.parse(localStorage.getItem('dailyTasks')) || []);
  const [weeklyTasks, setWeeklyTasks] = useState(JSON.parse(localStorage.getItem('weeklyTasks')) || []);
  const [monthlyTasks, setMonthlyTasks] = useState(JSON.parse(localStorage.getItem('monthlyTasks')) || []);
  const [taskInput, setTaskInput] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [darkMode, setDarkMode] = useState(false); 
  const options = ["Diario", "Semanal", "Mensual"];
  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    localStorage.setItem('dailyTasks', JSON.stringify(dailyTasks));
    localStorage.setItem('weeklyTasks', JSON.stringify(weeklyTasks));
    localStorage.setItem('monthlyTasks', JSON.stringify(monthlyTasks));
  }, [dailyTasks, weeklyTasks, monthlyTasks]);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const handleDeleteTask = (taskId, taskType) => {
    if (taskType === 'Diario') {
      setDailyTasks(dailyTasks.filter(task => task.id !== taskId));
    } else if (taskType === 'Semanal') {
      setWeeklyTasks(weeklyTasks.filter(task => task.id !== taskId));
    } else if (taskType === 'Mensual') {
      setMonthlyTasks(monthlyTasks.filter(task => task.id !== taskId));
    }
  };

  const handleInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    const newTask = {
      id: dailyTasks.length + weeklyTasks.length + monthlyTasks.length + 1,
      text: taskInput,
      completed: false
    };
    if (selectedOption === 'Diario') {
      setDailyTasks([...dailyTasks, newTask]);
    } else if (selectedOption === 'Semanal') {
      setWeeklyTasks([...weeklyTasks, newTask]);
    } else if (selectedOption === 'Mensual') {
      setMonthlyTasks([...monthlyTasks, newTask]);
    }
    setTaskInput("");
  };

  const handleTaskCompletion = (taskId, taskType) => {
    if (taskType === 'Diario') {
      setDailyTasks(dailyTasks.map(task => 
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ));
    } else if (taskType === 'Semanal') {
      setWeeklyTasks(weeklyTasks.map(task => 
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ));
    } else if (taskType === 'Mensual') {
      setMonthlyTasks(monthlyTasks.map(task => 
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ));
    }
  };


  return (
    <div className={darkMode ? "App dark-mode" : "App"}>
      <div className="header">
        <h1>Mi lista de tareas</h1>
        <div className={darkMode ? "App dark-mode" : "App"}>
          <DarkModeSwitch checked={darkMode} onChange={handleDarkModeChange} />
        </div>
        <TextBox
          taskInput={taskInput}
          handleInputChange={handleInputChange}
          handleAddTask={handleAddTask}
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
          options={options}
        />
      </div>
      <div className="tasks">
      <div className="DailyTasks">
  <h2>Tareas diarias</h2>
  {dailyTasks.map(task => (
    <div className="task-container" key={task.id}>
      <div className="task-text">
        <Task task={task} handleTaskCompletion={() => handleTaskCompletion(task.id, 'Diario')} />
      </div>
      <button onClick={() => handleDeleteTask(task.id, 'Diario')} className="delete-button">X</button>
    </div>
  ))}
</div>
      <div className="WeeklyTasks">
  <h2>Tareas semanales</h2>
  {weeklyTasks.map(task => (
    <div className="task-container" key={task.id}>
      <div className="task-text">
        <Task task={task} handleTaskCompletion={() => handleTaskCompletion(task.id, 'Semanal')} />
      </div>
      <button onClick={() => handleDeleteTask(task.id, 'Semanal')} className="delete-button">X</button>
    </div>
  ))}
      </div>
      <div className="MonthlyTasks">
  <h2>Tareas mensuales</h2>
  {monthlyTasks.map(task => (
    <div className="task-container" key={task.id}>
      <div className="task-text">
        <Task task={task} handleTaskCompletion={() => handleTaskCompletion(task.id, 'Mensual')} />
      </div>
      <button onClick={() => handleDeleteTask(task.id, 'Mensual')} className="delete-button">X</button>
    </div>
  ))}
    </div>
    </div>
    <footer>
      <a href="https://linkedin.com/in/juan-salgado-3b54891a0" target="_blank" rel="noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/jsalga1" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
    </footer>      
  </div>
);
};
  
export default App;
