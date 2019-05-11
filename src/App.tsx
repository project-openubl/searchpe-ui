import React from 'react';
import { Routes } from './Routes';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Routes childProps={this.props} />
    );
  }
}

export default withRouter<any>(connect()(App));
