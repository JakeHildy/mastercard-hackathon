import React, { Component } from 'react';
import './HomePage.scss';
import Modal from './../../components/atoms/Modal/Modal';

export class HomePage extends Component {
  state = {};

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleBuyNowPressed = (e) => {
    e.preventDefault();
    console.log('Buy Now Pressed');
  };

  render() {
    return (
      <div className="home-page">
        <button
          className="home-page__button"
          onClick={this.handleBuyNowPressed}
        >
          Buy now
        </button>
        <Modal />
      </div>
    );
  }
}

export default HomePage;
