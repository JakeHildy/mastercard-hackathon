import React, { Component } from 'react';
import './FinalPage.scss';

class FinalPage extends Component {
  state = {
    showButton: false,
  };

  render() {
    return (
      <div className="final-page__page">
        <div className="final-page__background"></div>
      </div>
    );
  }
}

export default FinalPage;

// {this.state.showButton && <button className="verification-failed__button" onClick={this.SubmitButton}>Go Back</button>}
