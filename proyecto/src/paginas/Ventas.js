import React, { useState } from "react";
import styles from "./Ventas.module.css";
import products from "../componentes/Products";
import * as FaIcons from "react-icons/fa";

/*Use useState para menejar los estados de los diferentes  componentes de la barra de busqueda*/

const Ventas = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  {
    /* el elemento que se llama FilteredProducts es un array el cual contiene los productos que coinciden con la busqueda */
  }
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className={styles.ventas}>
      <h1>Nuestros Productos</h1>
      {/* Barra de búsqueda */}
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Buscar productos"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <span className={styles.searchIcon}>
          <FaIcons.FaSearch />
        </span>
      </div>
      {/* Lista de productos filtrados */}
      <div className={styles.productList}>
        {filteredProducts.map((product) => (
          <div key={product.id} className={styles["product-card"]}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className={styles.price}>Precio: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ventas;
