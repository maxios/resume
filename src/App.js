import React, { Component } from 'react';
import Routes from './routes.jsx';
import Header from './component/header';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
