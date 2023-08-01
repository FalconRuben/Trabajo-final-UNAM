import React, { useState } from "react";
import styles from "./Ventas.module.css";
import * as FaIcons from "react-icons/fa";
import Products from "../componentes/Products";
import Carrito from "../componentes/Carrito";

const Ventas = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const addToCart = (product) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = { ...prevCartItems };
      if (updatedCartItems[product.id]) {
        updatedCartItems[product.id].quantity++;
      } else {
        updatedCartItems[product.id] = {
          ...product,
          quantity: 1,
        };
      }
      return updatedCartItems;
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = { ...prevCartItems };
      if (updatedCartItems[productId]) {
        updatedCartItems[productId].quantity--;
        if (updatedCartItems[productId].quantity === 0) {
          delete updatedCartItems[productId];
        }
      }
      return updatedCartItems;
    });
  };

  const getTotalPrice = () => {
    return Object.values(cartItems).reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCompra = () => {
    alert("¡Gracias por su compra!");
    setCartItems({}); // Vacia el carrito al presionar "Comprar"
    setIsCartOpen(false); // Cierra el carrito después de la compra
  };

  const cartItemCount = Object.values(cartItems).reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className={styles.ventas}>
      <h1>Nuestros Productos</h1>
      <div
        className={styles.cartIcon}
        onClick={() => setIsCartOpen(!isCartOpen)}
      >
        <FaIcons.FaShoppingCart />
        {cartItemCount > 0 && (
          <span className={styles.cartItemCount}>{cartItemCount}</span>
        )}
      </div>
      {isCartOpen && (
        <Carrito
          cartItems={Object.values(cartItems)}
          onClose={() => setIsCartOpen(false)}
        />
      )}
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
      <div className={styles.productList}>
        {Products.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        ).map((product) => (
          <div key={product.id} className={styles["product-card"]}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className={styles.price}>Precio: ${product.price}</p>
            <button onClick={() => addToCart(product)}>
              Agregar al carrito
            </button>
            {cartItems[product.id] && (
              <button onClick={() => removeFromCart(product.id)}>
                Eliminar del carrito
              </button>
            )}
          </div>
        ))}
      </div>
      <button className={styles.comprarButton} onClick={handleCompra}>
        Comprar
      </button>
    </div>
  );
};

export default Ventas;
