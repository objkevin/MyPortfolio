import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:section" exact component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
