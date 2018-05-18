import React, { Component } from "react";
import { Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login/Login.js";
import Jokes from "./Components/Jokes/Jokes.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Route exact path="/" component={Login} />
        <Route path="/jokes" component={Jokes} />
      </div>
    );
  }
}

export default App;
