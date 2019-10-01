import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Arraw from './myComponents/Arraw'
// import States from './myComponents/States'
import Hello from './myComponents/Hello';
// import Conditional1 from './myComponents/Conditional1'
// import Conditional2 from './myComponents/Conditional2'
import Refresh from './myComponents/Refresh';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <States></States> */}
        {/* <Arraw></Arraw> */}
        <Hello></Hello>
        {/* <Conditional1></Conditional1>
        <Conditional2></Conditional2> */}
        <Refresh></Refresh>
      </header>
    </div>
  );
}

export default App;
