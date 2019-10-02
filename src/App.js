import React from 'react';
import logo from './logo.svg';
import './App.css';
import FindDOMNodes from './myComponents/FindDOMNodes'
import Refresh from './myComponents/Refresh';
// import NewDemo from './myComponents/NewDemo';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FindDOMNodes></FindDOMNodes>
        <Refresh></Refresh>
      </header>
    </div>
  );
}

export default App;
