import React from "react";
import "./Home.css";
import products from "../componentes/Products"; // Importe el array de los productos
import BannerHome from "../imagenes/BannerHome.png"; /*Banner para pantallas grandes*/
import BannerHomeSmall from "../imagenes/BannerHomeSmall.png"; /*Banner para pantallas pequeñas*/
import Cliente1 from "../imagenes/cliente1.jpg";
import Cliente2 from "../imagenes/cliente2.jpg";
import Cliente3 from "../imagenes/cliente3.jpg";

const Home = () => {
  const mainProducts = products.slice(0, 3); // Obtiene los principales 3 productos del array de productos

  return (
    <div className="Home">
      <img src={BannerHome} alt="Banner" className="banner bannerLarge" />
      <img src={BannerHomeSmall} alt="Banner" className="banner bannerSmall" />

      {/* Apartado de "Nuestros principales productos" */}
      <div className="productosContainer">
        <h2>Productos mas vendidos</h2>
        <div className="productos">
          {mainProducts.map((product) => (
            <div key={product.id} className="producto">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span>${product.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Sección "Nuestros clientes" */}
      <div className="clientesContainer">
        <h2>Comentarios de nuestros clientes</h2>
        <div className="clientes">
          <div className="clienteCard">
            <img src={Cliente1} alt="Cliente 1" />
            <p>¡Excelente producto! Estoy muy satisfecha con mi compra.</p>
          </div>
          <div className="clienteCard">
            <img src={Cliente2} alt="Cliente 2" />
            <p>
              Recomiendo totalmente este sitio, me trataron como un campeon.
            </p>
          </div>
          <div className="clienteCard">
            <img src={Cliente3} alt="Cliente 3" />
            <p>Los productos son de alta calidad y el envío fue rápido.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
