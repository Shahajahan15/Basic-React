import React from 'react';
import logo from './logo.svg';
import './App.css';
import Text from './myComponents/Text'
// import Signup from './myComponents/Signup';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Text></Text>
      </header>
    </div>
  );
}

export default App;
