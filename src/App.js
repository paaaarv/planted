import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome.js'
import List from './components/list.js'
import Form from './components/form.js'
import Tab from './components/tab.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
    <Tab/>
      <Route exact path='/add' component={Form}/>
      <Route exact path= '/plants' component={List}/>
    </Router>

  );
}

export default App;
