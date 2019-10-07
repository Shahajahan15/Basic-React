import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import HookDemo from './hooks/HookDemo';
import Son from './ComponentTree/Son';
import { DadaContext } from './ComponentTree/myContext';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <div className="App pt-5">
      <Son name="Puti name is Afsana"></Son>
      <DadaContext value="Dada send message to Puti.">
        <Son></Son>
      </DadaContext>
    </div>
  );
}

export default App;
