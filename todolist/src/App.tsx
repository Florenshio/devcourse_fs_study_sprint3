import React from 'react';
import './App.css';
import Clock from './Clock';

function App() {

  const test = 'test'

  return (
    <div className="App-header">
      <h1 className='test'>React Clock App</h1>
      <p>반갑습니다.</p>
      <Clock />
    </div>
  );
}

// function App() {
//   return React.createElement('div', null, 'Hello World');
// }

export default App;
