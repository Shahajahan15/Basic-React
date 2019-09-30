import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './myComponents/Hello'
import Welcome from './myComponents/Welcome'
import Arraw from './myComponents/Arraw'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Hello age="24" name="Tuhin"></Hello>
        <Welcome name="class 1"></Welcome>
        <Arraw></Arraw>
      </header>
    </div>
  );
}

export default App;
