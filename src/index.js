import React from 'react';
import ReactDOM from 'react-dom/client';
import MultiStateChange from './components/MultiStateChange';
import ToDoList from './components/ToDoList';
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <ToDoList />
    <MultiStateChange />
  </React.StrictMode>
)


