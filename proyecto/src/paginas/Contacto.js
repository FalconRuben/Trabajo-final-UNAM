import React, { useState } from "react";
import styles from "./Contacto.module.css";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    /* Esta parte del codigo muestra el mensaje de "Enviado" y limpia los datos del formulario después de unos segundos*/

    setEnviado(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setTimeout(() => {
      setEnviado(false);
    }, 2000);
  };

  return (
    <div className={styles.mainContainer}>
      {" "}
      <div className={styles.contactoContainer}>
        <h1>Contacto</h1>
        {enviado ? <p>Mensaje enviado. ¡Gracias!</p> : null}
        <form onSubmit={handleSubmit}>
          <div className={styles["form-control"]}>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles["form-control"]}>
            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles["form-control"]}>
            <label htmlFor="subject">Asunto:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles["form-control"]}>
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
