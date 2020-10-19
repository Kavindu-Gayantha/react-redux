import React from 'react';
import logo from './logo.svg';
import './App.css';
import Count from './component/Count';


function App() {
  const owner= "kavindu";
  return (
    <div className="App">
      <h1>
        Hello this is first redux increment decrement app
      </h1>
      <h2> owner: {owner}</h2>
      <Count/>

     
    </div>
  );
}

export default App;
