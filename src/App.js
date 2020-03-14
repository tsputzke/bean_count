import React from 'react';
import './css/main.css'

function App() {
  return (
    <main className='App'>
      <h1>Bean Counter</h1>
      <div id='bean_jar'></div>
      <div className='buttons'>
        <button id='add'>Add</button>
        <button id='remove'>Remove</button>
      </div>
    </main>
  );
}

export default App;
