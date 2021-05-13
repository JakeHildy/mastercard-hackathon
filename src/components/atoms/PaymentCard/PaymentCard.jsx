import React from 'react';
import { Link } from 'react-router-dom';
import './PaymentCard.scss';
import card from '../../../assets/images/Card.png';

function PaymentCard({ handleFaceIdClick }) {
  return (
    <div className="payment-card">
      <div className="payment-card__popup">
        <Link
          to="/second-page"
          className="payment-card__popup-open"
          onClick={handleFaceIdClick}
        >
          <button className="payment-card__button"></button>
        </Link>
        <img className="payment-card__card" src={card} />
      </div>
    </div>
  );
}

export default PaymentCard;
