import React from 'react';
import './App.css';
import logo from './images/pasta_logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div className='Image-wrapper'>
         <img src={logo} className='Header-image' alt="logo"  />
       </div>
      </header>
      <div className='Hero'>
        <h1>PASTA</h1>
        <p>Coming Soon...</p>
      </div>
      
    </div>
  );
}

export default App;
