import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class MenuMobile extends Component {
  handleClick = () => {
    this.props.handleSetToggle();
  };
  render() {
    return (
      <div className="my-modal">
        <ul className="mb-0 bg-dark d-flex flex-column py-3 flex-wrap justify-content-around h-25">
          <li>
            <NavLink
              to="/Home"
              activeClassName="font-weight-bold active"
              onClick={e => this.handleClick()}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Resume"
              activeClassName="font-weight-bold active"
              onClick={e => this.handleClick()}
            >
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Projects"
              activeClassName="font-weight-bold active"
              onClick={e => this.handleClick()}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              activeClassName="font-weight-bold active"
              onClick={e => this.handleClick()}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="my-modal-bg" onClick={e => this.handleClick()} />
      </div>
    );
  }
}
export default MenuMobile;
