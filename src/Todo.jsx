import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from '@mui/material';
import { Typography, Button } from '@mui/material';
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
    <>
      {/* hi there */}
      {todos.map((todo) => (
        <p key={todo.id}>
          {/* Title: {todo.title}, Description: {todo.description} */}
          <Todo todo={todo} />
        </p>
      ))}
    </>
  );
}

function Todo(props) {
  return (
    <Card
      style={{
        border: '1px solid black',
        width: 300,
        margin: 10,
        minHeight: 90,
        maxHeight: 200,
      }}
    >
      <Typography textAlign={'center'}> {props.todo.title}</Typography>
      <br />
      <Typography textAlign={'center'}> {props.todo.description}</Typography>

      <br />
      <center>
        <Button variant="contained">edit</Button>
      </center>
    </Card>
  );
}

export default Todos;
