import React, { useState, useEffect } from 'react';
import Task from './Task';


const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasksmeta');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, { id: Date.now(), name: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const onDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const onToggleCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  useEffect(() => {
    localStorage.setItem('tasksmeta', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="task-list">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={addTask}>Agregar</button>
      <div className="task-list" style={{padding:20}}>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggleCompleted={onToggleCompleted}
          />
        ))}
      </ul>
      </div>
    </div>
  );
};

export default TaskList;