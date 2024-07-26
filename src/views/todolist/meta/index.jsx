import React from 'react';
import TaskList from './components/TaskList';

const IndexMeta = () => {
  return (
    <div className="app">
      <h1>Lista de Tareas</h1>
      <TaskList />
    </div>
  );
};

export default IndexMeta;