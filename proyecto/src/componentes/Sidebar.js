import { Outlet, Link } from "react-router-dom";
import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/SobreNosotros">Sobre Nosotros</Link>
        </li>
        <li>
          <Link to="/Ventas">Ventas</Link>
        </li>

        <li>
          <Link to="/Contacto">Contacto</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
