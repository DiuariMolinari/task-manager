import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Tasks from './components/tasks/Tasks';
import Header from "./components/header/Header";
import TaskDetails from './components/taskDetails/TaskDetails';


import './App.css';

function App() {
  
  return (
    <Router>
      <div className="container">
        <Header>Minhas Tarefas</Header>
        <Routes>
          <Route path="/" exact 
            element={
              <>
                <Tasks />
              </>
            }
          />

          <Route path="/:taskTitle" exact 
            element={
              <>
                <TaskDetails />
              </>
            }
          />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
