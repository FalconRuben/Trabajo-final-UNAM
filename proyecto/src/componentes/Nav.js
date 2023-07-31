import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarDatos } from "./SidebarDatos";
import "./Nav.css";
import logo from "../imagenes/logo.png";

/*  Use el manejo de estados con el objetivo de mostrar u ocultar la sidebar al hacer click sobre los iconos */

function Nav() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="navbar">
        <div className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </div>
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Logo de la empresa" />
            <span>Misiotrónica</span>
          </Link>
        </div>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiIcons.AiFillFacebook />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiIcons.AiFillTwitterCircle />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiIcons.AiFillInstagram />
          </a>
        </div>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarDatos.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span> {item.title} </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Nav;
