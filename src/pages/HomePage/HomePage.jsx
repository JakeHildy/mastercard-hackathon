import React, { Component } from 'react';
import './HomePage.scss';
import Modal from './../../components/atoms/Modal/Modal';

export class HomePage extends Component {
  state = {
    showModal: false,
  };

  handleBuyNowPressed = (e) => {
    e.preventDefault();
    this.setState({ showModal: true });
  };

  handleFaceIdClicked = (e) => {
    console.log('Face Id Clicked');
  };

  handleCloseModal = (e) => {
    console.log('Close Modal');
    this.setState({ showModal: false });
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
        {this.state.showModal && (
          <Modal
            handleFaceIdClick={this.handleFaceIdClicked}
            handleClose={this.handleCloseModal}
          />
        )}
      </div>
    );
  }
}

export default HomePage;
