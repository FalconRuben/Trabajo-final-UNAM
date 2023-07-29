import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <>
    <div className="bg">
      <div className="mars"></div>
      <img
        src="https://assets.codepen.io/1538474/404.svg"
        className="logo-404"
      />
      <img
        src="https://assets.codepen.io/1538474/meteor.svg"
        className="meteor"
      />

      <p className="title">Oh no!!</p>
      <p className="subtitle">
        Estas Escribiendo mal la URL <br /> o estas solicitando una pagina que
        ya no existe.
      </p>
      <div align="center">
        <a className="btn-back" href="/">
          Volver al Inicio
        </a>
      </div>

      <img
        src="https://assets.codepen.io/1538474/astronaut.svg"
        className="astronaut"
      />
      <img
        src="https://assets.codepen.io/1538474/spaceship.svg"
        className="spaceship"
      />
      </div>
    </>
  );
};

export default NotFound;
