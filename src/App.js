import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome.js'
import List from './components/list.js'
import Form from './components/form.js'
import Plants from './components/plants.js'
function App() {
  return (
    <div className="App">
      <Welcome/>
      <List/>
      <Form/>
      <Plants/>
    </div>
  );
}

export default App;
