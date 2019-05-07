import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Modul from './pages/Modul';
import FooterSection from './pages/section/Footer';
import HeaderSection from './pages/section/Header';

class App extends Component {
  render() {
    return (
      <div id="app">
      <HeaderSection/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={Profile} />
          <Route exact path="/modul" component={Modul} />
        </Switch>
      </Router>
      <FooterSection/>
  </div>
    );
  }
}

export default App;
