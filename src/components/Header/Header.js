import React, { Component } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    const { toggle = false } = this.props;

    this.state = {
      isToggleOn: toggle
    };
  }

  handleSetToggle = e => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  };

  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light sticky-top"
        style={{ height: "70px" }}
      >
        <div className="container">
          <button
            className="navbar-toggler text-dark mr-auto"
            style={{ width: "3rem" }}
            onClick={this.handleSetToggle}
          >
            <i
              className={
                this.state.isToggleOn
                  ? "fas fa-times fa-lg"
                  : "fas fa-bars fa-lg"
              }
            />
          </button>
          <a className="navbar-brand mr-0 mr-lg-3" href="/">
            Kevin Roman
          </a>
          <div className="navbar-nav">
            <ul className="navbar-nav navbar-left d-none d-lg-flex">
              <li>
                <NavLink to="/Home" className="nav-link active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/Resume" className="nav-link">
                  Resume
                </NavLink>
              </li>
              <li>
                <NavLink to="/Portfolio" className="nav-link">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/Contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav ml-auto flex-row">
            <li>
              <a
                className="nav-link px-2"
                href="https://www.facebook.com/objkevin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-square fa-lg" />
              </a>
            </li>
            <li>
              <a
                className="nav-link d-none d-lg-block"
                href="https://www.instagram.com/objkevin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram fa-lg" />
              </a>
            </li>
            <li>
              <a
                className="nav-link px-2"
                href="https://twitter.com/objkevin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter fa-lg text-primary" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
