import React, { Component } from 'react';
import './HomePage.scss';
import Modal from './../../components/atoms/Modal/Modal';

export class HomePage extends Component {
  state = {
    showModal: false,
    showCard: false,
  };

  handleBuyNowPressed = (e) => {
    e.preventDefault();
    this.setState({ showCard: true });
  };

  handleVerificationClicked = (e) => {
    console.log('Face Id Clicked');
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
        {/* {this.state.showCard && (
          <PaymentCard handleVerification={this.handleVerificationClicked} />
        )} */}
      </div>
    );
  }
}

export default HomePage;
