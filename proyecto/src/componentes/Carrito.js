import React from "react";
import styles from "./Carrito.module.css";

const Carrito = ({ cartItems, onClose }) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCompra = () => {
    alert("¡Gracias por su compra!");
    onClose(); // Cierra el carrito despues de comprar
  };

  return (
    <div className={styles.carritoOverlay}>
      <div className={styles.carrito}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <h2>Carrito de compras</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - Cantidad: {item.quantity} - Precio unitario: ${item.price} - Precio total: ${item.price * item.quantity}
            </li>
          ))}
        </ul>
        <p>Total: ${getTotalPrice()}</p>
        <button className={styles.comprarButton} onClick={handleCompra}>
          Comprar
        </button>
      </div>
    </div>
  );
};

export default Carrito;
