import React from 'react';
import logo from './logo.svg';
import './App.css';
// import List from './myComponents/List'
import JasonList from './myComponents/JasonList';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <JasonList></JasonList>
      </header>
    </div>
  );
}

export default App;
