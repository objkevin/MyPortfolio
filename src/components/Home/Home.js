import React, { Component } from "react";
import Photo from "./../../img/profile.jpg";
import ReactDOM from "react-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this._nodes = new Map();
  }

  componentWillReceiveProps(nextProps) {
    this.handleShow(nextProps.match.params.section);
  }

  handleShow = i => {
    //const node = this._nodes.get(Number(i));
    this.refs[i].scrollIntoView({ block: "end", behavior: "smooth" });
    //if (node) {

    //console.log(i);
    //ReactDOM.findDOMNode(node).scrollIntoView({
    //  block: "start",
    //  behavior: "smooth"
    //  //inline: "start"
    //});
    //}
  };

  render() {
    return (
      <div>
        <div ref={"Home"}>
          <div className="container flex-column d-flex align-items-center mt-4">
            <h2>¡Hello World!</h2>
            <img
              src={Photo}
              alt="profile"
              style={{ width: "300px", filter: "grayscale(18%)" }}
              className="rounded-circle"
            />
            <div className="jumbotron jumbotron-fluid col-12 col-lg-7 bg-transparent">
              <div className="container text-justify">
                <h6>
                  I'm a young man with many ideas and desire to do things. I
                  like to stand out from the others and meeting talented people
                  from whom I can learn more and more. I am currently working on
                  a big project with friends, and I'm learning about web
                  technologies.
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div ref={"Resume"}>

        </div>
      </div>
    );
  }
}

export default Home;
