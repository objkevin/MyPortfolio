import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Photo from './img/profile.jpg'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div id="section1">
        <div className="container flex-column d-flex align-items-center mt-4">
          <h2>¡Hello World!</h2>
          <img src={ Photo } alt="profile" style={{ width: "300px", filter: "grayscale(18%)" }} className="rounded-circle"/>
          <div class="jumbotron jumbotron-fluid col-12 col-lg-7 bg-transparent">
            <div class="container text-justify">
              <h6>
                I'm a young man with many ideas and desire to do things. I like to stand out from the others and meeting talented people from whom I can learn more and more.
                I am currently working on a big project with friends, and I'm learning about web technologies.
              </h6>
            </div>
          </div>
        </div>
        </div>
        <div id="section2">
        <div className="container flex-column d-flex align-items-center mt-4">
          <h2>¡Hello World!</h2>
          <img src={ Photo } alt="profile" style={{ width: "300px", filter: "grayscale(18%)" }} className="rounded-circle"/>
          <div class="jumbotron jumbotron-fluid col-12 col-lg-7 bg-transparent">
            <div class="container text-justify">
              <h6>
                I'm a young man with many ideas and desire to do things. I like to stand out from the others and meeting talented people from whom I can learn more and more.
                I am currently working on a big project with friends, and I'm learning about web technologies.
              </h6>
            </div>
          </div>
        </div>
        </div>
        <div id="section3">
        <div className="container flex-column d-flex align-items-center mt-4">
          <h2>¡Hello World!</h2>
          <img src={ Photo } alt="profile" style={{ width: "300px", filter: "grayscale(18%)" }} className="rounded-circle"/>
          <div class="jumbotron jumbotron-fluid col-12 col-lg-7 bg-transparent">
            <div class="container text-justify">
              <h6>
                I'm a young man with many ideas and desire to do things. I like to stand out from the others and meeting talented people from whom I can learn more and more.
                I am currently working on a big project with friends, and I'm learning about web technologies.
              </h6>
            </div>
          </div>
        </div>
        </div>
        <div id="section4">
        <div className="container flex-column d-flex align-items-center mt-4">
          <h2>¡Hello World!</h2>
          <img src={ Photo } alt="profile" style={{ width: "300px", filter: "grayscale(18%)" }} className="rounded-circle"/>
          <div class="jumbotron jumbotron-fluid col-12 col-lg-7 bg-transparent">
            <div class="container text-justify">
              <h6>
                I'm a young man with many ideas and desire to do things. I like to stand out from the others and meeting talented people from whom I can learn more and more.
                I am currently working on a big project with friends, and I'm learning about web technologies.
              </h6>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
