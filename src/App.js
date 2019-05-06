import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';

class App extends Component {
  render() {
    return (
      <div id="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={Profile} />
        </Switch>
      </Router>
  </div>
    );
  }
}

export default App;
