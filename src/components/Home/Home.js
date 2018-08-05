import React, { Component } from "react";
import Photo from "./../../img/profile.jpg";

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
        <div
          ref={"Home"}
          className="container flex-column d-flex align-items-center mt-4"
        >
          <h2>¡Hello World!</h2>
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
        <div ref={"Resume"} className="container">
          <h2>Formación</h2>
          <p>
            INGENIERO EN SISTEMAS COMPUTACIONALES (2013 - 2018) Instituto
            Tecnológico de Lázaro Cárdenas
          </p>
          <p>
            TÉCNICO EN INFORMÁTICA (2010 - 2013) Cecytem05 Guacamayas Michoacán
          </p>
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
        <div ref={"Projects"} className="container">
          <h2 className="text-center">Trabajos Recientes</h2>
          <div className="row m-0">
            <div className="col-4">
              <div className="card">
                <img
                  className="card-img-top w-100"
                  src=".../100px180/?text=Image cap"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
