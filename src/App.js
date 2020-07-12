import React, { Component } from 'react';

import './App.css';

import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import FirstPage from './LandingPage/FirstPage';


class App extends Component {

  render() {

    return (
      <div className="App">

        <Switch>
          <Route path="/landingPage"  component={LandingPage} />
          <Route path="/" exact component={FirstPage} />
        </Switch>

      </div>
    );
  }
}


export default App;
