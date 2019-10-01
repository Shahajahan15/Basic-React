import React from 'react';
import logo from './logo.svg';
import './App.css';
import Arraw from './myComponents/Arraw'
import States from './myComponents/States'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <States></States>
        <Arraw></Arraw>
      </header>
    </div>
  );
}

export default App;
