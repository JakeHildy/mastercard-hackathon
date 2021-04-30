import React, { Component } from 'react';
import './HomePage.scss';
import { Link } from 'react-router-dom';
import Map from './../../components/atoms/Map/Map';
import InputField from './../../components/atoms/InputField/InputField';
import Video from './../../components/molecules/Video/Video';

export class HomePage extends Component {
  state = {
    sampleInput: '',
    playing: false,
    setPlaying: false,
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="home-page">
        <Video />
      </div>
    );
  }
}

export default HomePage;
