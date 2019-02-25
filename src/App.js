import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './views/Login';
import "antd/dist/antd.css";
import Restablecer from "./views/Restablecer";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Login/>
        <Restablecer/>
      </div>
    );
  }
}

export default App;
