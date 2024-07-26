import React, { useState, useEffect } from 'react';
import { Container, Form, Button, ListGroup } from 'react-bootstrap';
import { Trash, CheckCircle, Circle } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexClaude = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <Container className="mt-5" style={{ textAlign:'center', padding:20}}>
      <h1 className="text-center mb-4">Lista de Tareas</h1>
      <Form onSubmit={addTodo} className="mb-3">
        <Form.Group className="d-flex">
          <Form.Control
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Añadir nueva tarea"
            className="me-2"
          />
          <Button variant="primary" type="submit">Añadir</Button>
        </Form.Group>
      </Form>
      <ListGroup>
        {todos.map(todo => (
          <ListGroup.Item 
            key={todo.id} 
            className="d-flex align-items-center"
            variant={todo.completed ? "light" : ""}
          >
            <Button 
              variant="link" 
              onClick={() => toggleTodo(todo.id)} 
              className="me-2 p-0"
            >
              {todo.completed ? (
                <CheckCircle className="text-success" size={20} />
              ) : (
                <Circle className="text-secondary" size={20} />
              )}
            </Button>
            <span 
              className={`flex-grow-1 ${todo.completed ? 'text-decoration-line-through text-muted' : ''}`}
            >
              {todo.text}
            </span>
            <Button 
              variant="link" 
              onClick={() => deleteTodo(todo.id)} 
              className="text-danger p-0"
            >
              <Trash size={20} />
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default IndexClaude;