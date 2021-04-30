import React from 'react';
import { Link } from 'react-router-dom';
import './Modal.scss';
import FaceIdLogo from './../../../assets/icons/Face ID.png';
import TouchIdLogo from './../../../assets/icons/Touch ID.png';
import VoiceIdLogo from './../../../assets/icons/Microphone.png';

function Modal({ handleFaceIdClick, handleClose }) {
  return (
    <div className="modal">
      <div className="modal__popup">
        <Link
          to="/second-page"
          className="modal__popup-option"
          onClick={handleFaceIdClick}
        >
          <img src={FaceIdLogo} alt="" className="modal__logo" />
          <h3 className="modal__popup-text">Face ID</h3>
        </Link>
        <div className="modal__popup-option">
          <img src={TouchIdLogo} alt="" className="modal__logo" />
          <h3 className="modal__popup-text">Touch ID</h3>
        </div>
        <div className="modal__popup-option">
          <div className="modal__popup-mic">
            <img src={VoiceIdLogo} alt="" className="modal__logo" />
          </div>

          <h3 className="modal__popup-text">Voice ID</h3>
        </div>
        <h2 className="modal__close-button" onClick={handleClose}>
          x
        </h2>
      </div>
    </div>
  );
}

export default Modal;
