import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './myComponents/Hello'
import Welcome from './myComponents/Welcome'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello></Hello>
        <Welcome></Welcome>
      </header>
    </div>
  );
}

export default App;
