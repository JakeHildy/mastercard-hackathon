import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './styles/global.scss';
import NavBar from './components/molecules/NavBar/NavBar';
import Footer from './components/molecules/Footer/Footer';
import AnotherPage from './pages/AnotherPage/AnotherPage';
import HomePage from './pages/HomePage/HomePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route path="/home" component={HomePage} />
            <Redirect from="/" to="/home" />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
