import React, { Component } from "react";
import Photo from "./../../img/profile.jpg";
import Genesys from "./../../img/genesysmi.png";
import Codigma from "./../../img/codigma.png";
import Agendamicita from "./../../img/agendamicita.png";

class Home extends Component {
  componentDidMount() {
    if (this.refs[this.props.match.params.section]) {
      this.refs[this.props.match.params.section].scrollIntoView(true);
    } else {
      window.location = "/Home";
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps)
      this.handleShow(nextProps.match.params.section);
  }

  handleShow = i => {
    if (this.refs[i]) {
      this.refs[i].scrollIntoView({
        block: "start",
        behavior: "smooth"
      });
    } else {
      window.location = "/Home";
    }
  };

  render() {
    return (
      <div className="anim">
        <div
          ref={"Home"}
          className="container flex-column d-flex align-items-center jumbotron bg-transparent pb-0"
        >
          <h2 className="mt-4">¡Hello World!</h2>
          <img
            src={Photo}
            alt="profile"
            style={{ width: "300px", filter: "grayscale(18%)" }}
            className="rounded-circle"
          />
          <div className="jumbotron jumbotron-fluid col-12 col-lg-7 bg-transparent">
            <p className="d-flex w-75 mb-3 mx-auto justify-content-around">
              <span className="text-center">
                <span className="font-weight-bold" style={{ color: "#5a5a5a" }}>
                  Edad:{" "}
                </span>
                <span>23 años</span>
              </span>
              <span className="text-center">
                <span className="font-weight-bold" style={{ color: "#5a5a5a" }}>
                  Estado Civil:{" "}
                </span>
                <span>Soltero</span>
              </span>
            </p>
            <div className="container text-justify">
              <h6>
                Soy un joven con muchas ideas y con entusiasmo por aprender más
                sobre temas de la computación. Me gusta destacar de entre los
                demás y conocer gente talentosa de la que pueda aprender cada
                día.
              </h6>
            </div>
            <p className="text-center mt-3">
              <span className="font-weight-bold" style={{ color: "#5a5a5a" }}>
                Idiomas:{" "}
              </span>Español (Nativo), Inglés (Intermedio), Francés (Básico)
            </p>
          </div>
        </div>
        <hr />
        <div ref={"Resume"} className="container jumbotron bg-transparent">
          <h2 className="text-center mt-4">Hoja de vida</h2>
          <h2 className="mt-5">Formación</h2>
          <p className="font-weight-bold" style={{ color: "#5a5a5a" }}>
            INGENIERO EN SISTEMAS COMPUTACIONALES (2013 - 2018)
          </p>
          <p>Instituto Tecnológico de Lázaro Cárdenas</p>
          <p className="font-weight-bold" style={{ color: "#5a5a5a" }}>
            TÉCNICO EN INFORMÁTICA (2010 - 2013)
          </p>
          <p>Cecytem05 Guacamayas Michoacán</p>
          <h2>Experiencia</h2>
          <p className="mb-0 font-weight-bold" style={{ color: "#5a5a5a" }}>
            CODIGMA (Febrero 2018 - Junio 2018)
          </p>
          <p className="mb-0">
            Empresa de diseño, desarrollo web y móvil. Realicé actividades
            usando React js para frontend y php como backend.
          </p>
          <p>
            <a
              href="http://www.codigma.com.mx"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Codigma
            </a>
          </p>
          <p className="mb-0 font-weight-bold" style={{ color: "#5a5a5a" }}>
            UNIVERSIDAD AUTÓNOMA DE AGUASCALIENTES (Mayo 2017 - Agosto 2017)
          </p>
          <p className="mb-0">
            Trabajé como Líder técnico de proyecto en el desarrollo de una línea
            de videojuegos. Dando como resultado el videojuego Dislexpace.
          </p>
          <p>
            <a
              href="https://play.google.com/store/apps/details?id=com.Delfin.Dislexpace&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Dislexpace
            </a>
          </p>
          <p className="mb-0 font-weight-bold" style={{ color: "#5a5a5a" }}>
            INSTITUTO TECNOLÓGICO DE MORELIA (Mayo 2016 - Agosto 2016)
          </p>
          <p className="mb-0">
            Desarrollé un Videojuego para aprender fracciones usando Unity3d,
            C#, y Photoshop para diseño.
          </p>
          <p>
            <a
              href="https://play.google.com/store/apps/details?id=es.Delfin.games.CatMat&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Cat-Mat
            </a>
          </p>
        </div>
        <hr />
        <div ref={"Projects"} className="container jumbotron bg-transparent">
          <h2 className="text-center mt-4">Trabajos Recientes</h2>
          <div className="row mx-0 pt-4 bg-transparent d-flex justify-content-center">
            <div className="col-12 col-md-6 col-lg-6 pt-4">
              <a
                href="https://genesysmi.com/"
                className="card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="card-img-top w-100"
                  src={Genesys}
                  alt="Genesysmi"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">GenesysMi</h5>
                  <p className="card-text">
                    Tienda en Línea. Productos de la marca Mayoral. Desarrollada
                    con HTML, CSS, JavaScript, JQUERY, PHP, y Bootstrap.
                  </p>
                </div>
              </a>
            </div>
            <div className="col-12 col-md-6 col-lg-6 pt-4">
              <a
                href="http://codigma.com.mx/"
                className="card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="card-img-top w-100"
                  src={Codigma}
                  alt="Codigma"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Codigma</h5>
                  <p className="card-text">
                    Empresa de Desarrollo Web, Diseño y Desarrollo Móvil.
                    Desarrollada en React con el Framework de estilos Bulma.
                  </p>
                </div>
              </a>
            </div>
            <div className="col-12 col-md-6 col-lg-6 pt-4">
              <a
                href="http://agendamicita.com/"
                className="card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="card-img-top w-100"
                  src={Agendamicita}
                  alt="Codigma"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Agendamicita</h5>
                  <p className="card-text">
                    Sistema para agendar citas médicas. Desarrollada con React,
                    HTML, CSS, Bulma, PHP.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div ref={"Contact"} className="container jumbotron bg-transparent">
          <h2 className="text-center mt-4">Contacto</h2>
          <p className="text-center mt-5">
            <a href="tel:(+52)7531215568">
              <i className="fas fa-mobile-alt mr-2" />
              <span>Teléfono: </span>(+52)7531215568
            </a>
          </p>
          <p className="text-center mt-5">
            <a href="mailto:(+52)7531215568">
              <i className="fas fa-at mr-2" />
              <span>Email: </span>objkevin@gmail.com
            </a>
          </p>
          <p className="text-center mt-5">
            <a
              href="https://www.linkedin.com/in/kevin-roman-1577b8128/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin mr-2" />
              <span>Linkedin: </span>Kevin Roman
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
