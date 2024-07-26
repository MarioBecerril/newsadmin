import React from 'react';


const Task = ({ task, onDelete, onToggleCompleted }) => {
  return (
    <div className="task">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleCompleted(task.id)}
      />
      <span className={task.completed ? 'completed' : ''}>{task.name}</span>
      <button onClick={() => onDelete(task.id)}>Eliminar</button>
    </div>
  );
};

export default Task;