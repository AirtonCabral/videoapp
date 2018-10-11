import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './App.css';

import Home from './pages/home/home';
import History from './pages/history/history';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar inverse collapseOnSelect>
            <Nav>
              <NavItem  eventKey={1} href="#">
                Home
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem  eventKey={2} href="#">
                History
              </NavItem>
            </Nav>
        </Navbar>

        <Home />
        <History />
      </div>
    );
  }
}

export default App;
