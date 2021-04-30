import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './styles/global.scss';
import HomePage from './pages/HomePage/HomePage';
import SecondPage from './pages/SecondPage/SecondPage';
import VerificationSuccess from './pages/VerificationSuccess/VerificationSuccess';
import VerificationFailed from './pages/VerificationFailed/VerificationFailed';
import FinalPage from './pages/FinalPage/FinalPage';

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

              <Route
                path="/success"
                render={(routerProps) => (
                  <VerificationSuccess {...routerProps} />
                )}
              />

              <Route
                path="/failed"
                render={(routerProps) => (
                  <VerificationFailed {...routerProps} />
                )}
              />
              <Route
                path="/final-page"
                render={(routerProps) => <FinalPage {...routerProps} />}
              />
              <Redirect from="/mastercard-hackathon" to="/" />
            </Switch>
            <div className="iphone"></div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
