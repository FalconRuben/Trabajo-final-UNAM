import React from "react";
import styles from "./SobreNosotros.module.css";
import fondoSobreNosotros from "../imagenes/fondoSobreNosotros.jpg";
import fondoMisionVision from "../imagenes/fondoMisionVision.jpg";
import * as FaIcons from "react-icons/fa";

const SobreNosotros = () => {
  return (
    <div>
      {/* Sección de "Sobre nosotros" */}
      <div
        className={styles.fondoSobreNosotros}
        style={{ backgroundImage: `url(${fondoSobreNosotros})` }}
      >
        <div className={styles.contenidoSobreNosotros}>
          <div className={`${styles.tarjeta} ${styles.tarjetaSobreNosotros}`}>
            <h1>Sobre Nosotros</h1>
            <p>
              Bienvenidos a Misiontrónica nuestra tienda en línea de artículos
              electrónicos. En nuestra tienda, podrás encontrar una amplia gama de
              productos electrónicos, incluyendo Teclados inalámbricos, Luces led,
              Auriculares bluetooth. Nuestro objetivo es proporcionar la mejor
              experiencia de compra para nuestros clientes, brindando productos de
              alta calidad y un excelente servicio al cliente. Nos apasiona la
              tecnología y nos esforzamos por mantenernos actualizados con las
              últimas tendencias del mercado electrónico. ¡Gracias por visitarnos
              y esperamos que encuentres lo que buscas!
            </p>
          </div>
          {/* tarjeta de  "Siga Deslizando" */}
          <div className={styles.tarjetaSigaDeslizando}>
            <h2>Siga Deslizando</h2>
            <p>¡Gracias por visitarnos!</p>
            <FaIcons.FaArrowDown />
          </div>
        </div>
      </div>

      {/* Sección de "Misión y Visión" */}
      <div
        className={styles.fondoMisionVision}
        style={{ backgroundImage: `url(${fondoMisionVision})` }}
      >
        <div className={styles.contenidoMisionVision}>
          <h1>Misión, Visión y Valores</h1>
          <div className={styles.tarjetas}>
            <div className={styles.tarjeta}>
              <h2>Misión</h2>
              <p>
                En Misiotrónica, nuestra misión es ofrecer soluciones
                electrónicas innovadoras y de alta calidad que mejoren la
                experiencia tecnológica de nuestros clientes.
              </p>
            </div>
            <div className={styles.tarjeta}>
              <h2>Visión</h2>
              <p>
                Nuestra visión es ser reconocidos como un referente en el
                mercado de productos electrónicos, siendo una empresa líder y
                confiable en la industria.
              </p>
            </div>
            <div className={`${styles.tarjeta} ${styles.tarjetaValores}`}>
              <h2>Valores</h2>
              <p>
                ♦ Innovación: Buscamos constantemente nuevas formas de mejorar
                nuestros productos y servicios
                <br />
                ♦ Calidad: Nos comprometemos a ofrecer productos electrónicos de
                la más alta calidad,
                <br />
                ♦ Compromiso: Buscamos brindar un servicio excepcional y una
                atención personalizada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreNosotros;
