import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Todo from './Todo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddTodo from './AddTodo';

function App() {
  // const [count, setCount] = useState(0)
  return (
    <div
      style={{ width: '100vw', height: '100vh', backgroundColor: '#eeeeee' }}
    >
      <Router>
        <Routes>
          <Route path="/todos" element={<Todo />} />
          <Route path="/addtodo" element={<AddTodo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
