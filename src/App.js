import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Text from './myComponents/Text'
import Select from './myComponents/Select';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Select></Select>
      </header>
    </div>
  );
}

export default App;
