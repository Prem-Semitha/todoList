import React, { useState } from 'react';
import { Card } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

function AddTodo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  return (
    <>
      <TodoCard
        title={title}
        description={description}
        setTitle={setTitle}
        setDescription={setDescription}
      />
    </>
  );
}

function TodoCard(props) {
  return (
    <div>
      <div
        style={{
          paddingTop: 50,
          paddingBottom: 25,
          display: 'flex',
          justifyContent: 'center',
        }}
      ></div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card variant="outlined" style={{ width: 400, padding: 20 }}>
          <TextField
            label="Title"
            variant="outlined"
            value={props.title}
            fullWidth
            onChange={(e) => {
              props.setTitle(e.target.value);
            }}
          />
          <br />
          <TextField
            label="Description"
            value={props.description}
            variant="outlined"
            fullWidth
            style={{ marginBottom: 5, marginTop: 5 }}
            onChange={(e) => {
              props.setDescription(e.target.value);
            }}
          />

          <br />
          <center>
            <Button
              variant="contained"
              size={'large'}
              onClick={() => {
                fetch('http://localhost:3000/todos', {
                  method: 'POST',
                  body: JSON.stringify({
                    title: props.title,
                    description: props.description,
                  }),
                  headers: {
                    'content-type': 'application/json',
                  },
                })
                  .then((response) => {
                    return response.json();
                  })
                  .then((data) => {
                    alert('Todo has been added');
                  });
              }}
            >
              Add Todo
            </Button>
          </center>
        </Card>
      </div>
    </div>
  );
}

export default AddTodo;
