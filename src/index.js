import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NavBar from './NavBar';
import SideBar from './SideBar';

ReactDOM.render(
  <React.StrictMode>
    <NavBar></NavBar>
    <SideBar></SideBar>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);