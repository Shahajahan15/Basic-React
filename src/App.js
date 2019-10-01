import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Arraw from './myComponents/Arraw'
import States from './myComponents/States'
import Hello from './myComponents/Hello';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <States></States>
        {/* <Arraw></Arraw> */}
        <Hello></Hello>
      </header>
    </div>
  );
}

export default App;
