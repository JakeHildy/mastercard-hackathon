import React, { Component } from 'react';
import './SecondPage.scss';
import FaceLogo from './../../assets/icons/Face ID.png';

class SecondPage extends Component {
  state = {};

  componentDidMount = () => {};

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="second-page">
        <div className="second-page__logo-container">
          <img className="second-page__logo" src={FaceLogo} />
          <div className="second-page__corner-tl"></div>
          <div className="second-page__corner-tr"></div>
          <div className="second-page__corner-br"></div>
          <div className="second-page__corner-bl"></div>
        </div>
        <div className="second-page__buttons">
          <button>Cancel</button>
          <button>Scan</button>
        </div>
      </div>
    );
  }
}

export default SecondPage;
