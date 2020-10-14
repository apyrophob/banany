import React from 'react';
import './App.css';
import { Button } from './button/button';

function App() {
  return (
    <div className="App">
      <Button onClick={() => { console.log('!!!'); }}>Button Text</Button>
    </div>
  );
}

export default App;
