import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Map from './../../components/atoms/Map/Map';
import InputField from './../../components/atoms/InputField/InputField';

export class HomePage extends Component {
  state = {
    sampleInput: '',
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <Link to="/home">Home</Link>
        <Link to="/another-page">Another Page</Link>
        <Map lat="21.0" long="14" />
        <InputField
          name="sampleInput"
          label="Input Field"
          value={this.state.sampleInput}
          placeholder="blank"
          onChange={this.handleChange}
          error=""
        />
      </div>
    );
  }
}

export default HomePage;
