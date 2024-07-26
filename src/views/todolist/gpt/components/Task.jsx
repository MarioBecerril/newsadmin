import React from 'react';
import './Task.css';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`} onClick={() => onToggle(task.id)}>
      <p>{task.text}</p>
      <button onClick={(e) => {e.stopPropagation(); onDelete(task.id)}}>Delete</button>
    </div>
  );
};

export default Task;