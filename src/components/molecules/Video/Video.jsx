import React, { Component } from 'react';
import './Video.scss';

export class Video extends Component {
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
      <>
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
        </div>
        <div className="video__input">
          {this.state.playing ? (
            <button onClick={this.stopVideo}>Stop</button>
          ) : (
            <button onClick={this.startVideo}>Start</button>
          )}
        </div>
      </>
    );
  }
}

export default Video;
