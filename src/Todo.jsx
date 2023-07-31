import React from 'react';
import { useEffect, useState } from 'react';
import { Card, Typography, Button } from '@mui/material';

function Todos() {
  const [todos, setTodo] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/todos', {
      method: 'GET',
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTodo(data);
      });
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: 0,
        padding: 100,
      }}
    >
      {todos.map((todo) => (
        <div key={todo.id}>
          <Todo todo={todo} todos={todos} setTodo={setTodo} />
        </div>
      ))}
    </div>
  );
}

function Todo({ todo, todos, setTodo }) {
  return (
    <Card
      style={{
        border: '1px solid black',
        width: 300,
        margin: 10,
        minHeight: 90,
        maxHeight: 200,
        margin: 'auto',
      }}
    >
      <Typography textAlign={'center'}> {todo.title}</Typography>
      <br />
      <Typography textAlign={'center'}> {todo.description}</Typography>

      <br />
      <center>
        <Button
          variant="contained"
          onClick={() => {
            fetch('http://localhost:3000/todos/' + todo.id, {
              method: 'DELETE',
              headers: {
                'content-type': 'application/json',
              },
            }).then((response) => {
              if (response.ok) {
                alert('Todo has been deleted');
                setTodo((prevTodos) => {
                  return prevTodos.filter((t) => t.id !== todo.id);
                });
              } else {
                alert('Error: Todo was not deleted');
              }
            });
          }}
        >
          Delete
        </Button>
      </center>
    </Card>
  );
}

export default Todos;
