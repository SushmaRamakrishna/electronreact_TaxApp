import React from 'react';
import { Link } from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Let's start by getting to know you...</p>
        <p class="display-4 far fa-handshake"></p>
        <img src='Documents-Folder-white-icon.png' className="App-logo" alt="logo" />
        <p>
          Welcome.
        </p>      
        
        <Link className="App-link" to="/about">Link to the About Page</Link>
      </header>
      
    </div>
  );
}

export default App;
