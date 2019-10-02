import React from 'react';
import logo from './logo.svg';
import './App.css';
import Forms from './myComponents/Forms'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Forms></Forms>
      </header>
    </div>
  );
}

export default App;
