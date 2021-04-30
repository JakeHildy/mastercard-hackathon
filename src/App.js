import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './styles/global.scss';
import NavBar from './components/molecules/NavBar/NavBar';
import Footer from './components/molecules/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import SecondPage from './pages/SecondPage/SecondPage';
import VerificationSuccess from "./pages/VerificationSuccess/VerificationSuccess";
import VerificationFailed from "./pages/VerificationFailed/VerificationFailed";

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
                render={(routerProps) => <VerificationSuccess {...routerProps} />}
              />

              <Route
                path="/failed"
                render={(routerProps) => <VerificationFailed {...routerProps} />}
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
