import React, { Component } from 'react';
//import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

import Home from './pages/home/home';
//import History from './pages/history/history';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/history">History</Link>
          </li>
        </ul>
  
        <hr />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/history" component={History} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
