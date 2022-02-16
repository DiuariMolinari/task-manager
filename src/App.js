import React, { useState } from 'react';

import Tasks from './Tasks';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Programação",
      completed: false
    },
    {
      id: 2,
      title: "Ler livros",
      completed: true
    }
  ]);

  return (
    <>
      <div className="container">
        <Tasks tasks={tasks}/>
      </div>
    </>
  );
}

export default App;
