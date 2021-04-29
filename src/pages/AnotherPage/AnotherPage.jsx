import React, { Component } from 'react';
import axios from 'axios';
import './AnotherPage.scss';
import SearchField from '../../components/atoms/SearchField/SearchField';

class AnotherPage extends Component {
  state = {};

  componentDidMount = () => {};

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if (!this.state.listingsLoaded) return null;
    return (
      <div className="browse-page">
        <div className="browse-page__search-bar">
          <SearchField name="searchStr" value={this.state.searchStr} onChange={this.handleChange} />
        </div>
        <div className="browse-page__container"></div>
      </div>
    );
  }
}

export default AnotherPage;
