import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome.js'
import List from './components/list.js'
function App() {
  return (
    <div className="App">
      <Welcome/>
      <List/> 
    </div>
  );
}

export default App;
