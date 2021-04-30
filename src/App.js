import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/global.scss';
import HomePage from './pages/HomePage/HomePage';
import SecondPage from './pages/SecondPage/SecondPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="container">
            <Switch>
              <Route
                path="/"
                exact
                render={(routerProps) => <HomePage {...routerProps} />}
              />
              <Route
                path="/second-page"
                render={(routerProps) => <SecondPage {...routerProps} />}
              />
              {/* <Redirect from="/" to="/home" /> */}
            </Switch>
            <div className="iphone"></div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
