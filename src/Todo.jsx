import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function Todo() {
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
      hi there
      {todos.map((todo) => (
        <p key={todo.id}>
          Title: {todo.title}, Description: {todo.description}
        </p>
      ))}
    </>
  );
}
export default Todo;
