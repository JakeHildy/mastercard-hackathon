import React, { Component } from 'react';
import './SecondPage.scss';
import BorderNoLogoFace from './../../assets/images/face-id-box-no-logo.svg';
import CancelButton from './../../assets/icons/cancel-x-button.svg';
import ScanCircle from './../../assets/icons/scan circle.svg';

import './../../components/molecules/Video/Video.scss';

class SecondPage extends Component {
  state = { playing: false, showCircle: false };

  startVideo = () => {
    this.setState({ playing: true });
    navigator.getUserMedia(
      { video: true },
      (stream) => {
        let video = document.getElementsByClassName('video__videoFeed')[0];
        if (video) {
          video.srcObject = stream;
        }
      },
      (err) => console.log(err)
    );
  };

  stopVideo = () => {
    this.setState({ playing: false });
    let video = document.getElementsByClassName('video__videoFeed')[0];
    video.srcObject.getTracks()[0].stop();
  };

  componentDidMount = () => {
    this.startVideo();
    setTimeout(() => {
      console.log('Timer Done');
      this.setState({ showCircle: true });
    }, 2000);
  };

  goBack = () => {
    this.stopVideo();
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="second-page">
        <div className="second-page__logo-container">
          <div className="video__container">
            <video
              height={20}
              width={30}
              muted
              autoPlay
              className="video__videoFeed"
            ></video>
            <img
              className="second-page__logo"
              alt="FaceLogo"
              src={BorderNoLogoFace}
            />
            {this.state.showCircle && (
              <img
                className="second-page__scan-circle"
                alt="FaceLogo"
                src={ScanCircle}
              />
            )}
          </div>
        </div>
        <div className="second-page__buttons">
          <img src={CancelButton} alt="Cancel" onClick={this.goBack} />
        </div>
      </div>
    );
  }
}

export default SecondPage;
