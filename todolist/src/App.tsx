import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const test = 'test'

  return (
    <div className="App-header">
      <h1 className='test'>Todo List {
      test === 'test' ? 'test' : 'not test'
      }</h1>
      <p>반갑습니다.</p>
      {/* 주석 테스트 */}
    </div>
  );
}

// function App() {
//   return React.createElement('div', null, 'Hello World');
// }

export default App;
