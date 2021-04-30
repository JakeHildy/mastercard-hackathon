import React, { Component } from 'react';
import './VerificationSuccess.scss';
import VerficationSuccessLogo from '../../assets/icons/Checked.svg';

class VerificationSuccess extends Component {
  state = {
    showButton: false,
  };

  activateRedirect = () => {
    setTimeout(() => {
      this.props.history.push('/');
    }, 2500);
  };

  render() {
    this.activateRedirect();
    return (
      <div className="verification__page">
        <div className="verification__background"></div>
        <img className="verification__check" src={VerficationSuccessLogo} />
      </div>
    );
  }
}

export default VerificationSuccess;
