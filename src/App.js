import React, { Component } from 'react';

import './App.css';
import Login from './views/Login';
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
        <div>
            <Router className="App">
                <div>
                    <Route exact path="/login" component={this.LoginView} />
                </div>
            </Router>
        </div>
    );
  }

  LoginView = () => {
    return (<Login/>);
  };
}


export default App;
