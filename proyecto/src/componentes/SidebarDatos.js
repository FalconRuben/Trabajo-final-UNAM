import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

/*Para que el codigo de la Navbar no me quede muy cargado, decidi crear este archivos 
donde defino los elementos de la sidebar y  las rutas par luego exportarlo al Nav.js*/

export const SidebarDatos = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },

  {
    title: "Sobre Nosotros",
    path: "/SobreNosotros",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },

  {
    title: "Ventas",
    path: "/Ventas",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },

  {
    title: "Contacto",
    path: "/Contacto",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
];
