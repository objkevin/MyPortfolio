import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/Home" />} />
          <Route path="/:section" exact component={Home} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
