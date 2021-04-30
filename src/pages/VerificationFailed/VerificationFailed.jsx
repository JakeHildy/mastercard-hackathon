import React, { Component } from 'react';
import './VerificationFailed.scss';
import VerficationFailLogo from "../../assets/icons/Failed.svg";


class VerificationFailed extends Component {
    state = {
        showButton: false
    }

    // activateButton = () => {
    //     setTimeout(() => {
    //         this.setState({ showButton: true })
    //     }, 2000);
    // }

    // SubmitButton = (e) => {
    //     e.preventDefault();
    //     this.props.history.push("/");
    // }

    activateRedirect = () => {
        setTimeout(() => {
            this.props.history.push("/second-page");
        }, 5000);
    }


    
    render() {
        this.activateRedirect();
        return (
            <div className="verification-failed__page">
                <div className="verification-failed__background"></div>
                <img className="verification-failed__failed" src={VerficationFailLogo} />
            </div>
        );
    }
}

export default VerificationFailed;

// {this.state.showButton && <button className="verification-failed__button" onClick={this.SubmitButton}>Go Back</button>}