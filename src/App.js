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

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
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
        </Router>
      </div>
    );
  }
}

export default App;
