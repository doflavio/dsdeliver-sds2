import React from 'react';
import './App.css';
import Hello from './Hello'
import Counter from './Counter'


function App() {
  return (
    <div>
      <Hello message="Flávio" />
      <Hello message="Flávio2" />
      <Hello message="Flávio3" />
      <Hello message="Flávio3" />
      <Counter />
    </div>
  );
}

export default App;
