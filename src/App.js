import './App.css';
import React, { useState } from 'react';
import Card from './Card'

function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  return (

    <div>
      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} /><br/>
      <input type="text" placeholder="Message" onChange={(e) => setMessage(e.target.value)} /><br/>
      <Card name={name} message={message} />
    </div>
    
  );
}

export default App;
