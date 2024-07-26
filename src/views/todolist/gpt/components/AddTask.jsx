import React, { useState } from 'react';
import './AddTask.css';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;

    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-task">
      <input
        type="text"
        placeholder="Add new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTask;