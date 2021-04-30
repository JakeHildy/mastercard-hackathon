import React, { Component } from 'react';
import './SecondPage.scss';
import FaceLogo from './../../assets/icons/Face ID.png';
import './../../components/molecules/Video/Video.scss';

class SecondPage extends Component {
  state = { playing: false };

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
            <div
              className={`video__overlay video__overlay${
                this.state.playing ? '--on' : '--off'
              }`}
            ></div>
            <img className="second-page__logo" alt="FaceLogo" src={FaceLogo} />
          </div>
          <div className="second-page__corner-tl"></div>
          <div className="second-page__corner-tr"></div>
          <div className="second-page__corner-br"></div>
          <div className="second-page__corner-bl"></div>
        </div>
        <div className="second-page__buttons">
          <button
            className="second-page__button second-page__button--cancel"
            onClick={this.stopVideo}
          >
            Cancel
          </button>
          <button
            onClick={this.startVideo}
            className="second-page__button second-page__button--scan"
          >
            Scan
          </button>
        </div>
      </div>
    );
  }
}

export default SecondPage;
