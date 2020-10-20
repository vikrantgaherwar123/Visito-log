import React, { Component } from 'react';
import './App.css';
import  Header from './components/Header';
import Router from './Router';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Router/>
      </div>
    );
  }
}

export default App;
