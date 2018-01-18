import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Fifty8 Studios</h1>
        </header>
        <p className="App-intro">
          Mobile Application Development
          added more text for testing
        </p>
      </div>
    );
  }
}

export default App;
