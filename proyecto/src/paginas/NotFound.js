import React from "react";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <>
      <div className={styles.bg}>
        <div className={styles.mars}></div>
        <img
          src="https://assets.codepen.io/1538474/404.svg"
          className={styles["logo-404"]}
        />
        <img
          src="https://assets.codepen.io/1538474/meteor.svg"
          className={styles.meteor}
        />

        <p className={styles.title}>Oh no!!</p>
        <p className={styles.subtitle}>
          Estas Escribiendo mal la URL <br /> o estas solicitando una pagina que
          ya no existe.
        </p>
        <div align="center">
          <a className={styles["btn-back"]} href="/">
            Volver al Inicio
          </a>
        </div>

        <img
          src="https://assets.codepen.io/1538474/astronaut.svg"
          className={styles.astronaut}
        />
        <img
          src="https://assets.codepen.io/1538474/spaceship.svg"
          className={styles.spaceship}
        />
      </div>
    </>
  );
};

export default NotFound;
