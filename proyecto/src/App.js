import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Contacto from "./paginas/Contacto";
import Home from "./paginas/Home";
import NotFound from "./paginas/NotFound";
import SobreNosotros from "./paginas/SobreNosotros";
import Ventas from "./paginas/Ventas";
import Navbar from "./componentes/Navbar";
import Sidebar from "./componentes/Sidebar";

const App = () => {
  //Mi idea es ocultar la Navbar y la Sidebar de la pagina NotFound por eso agregue u

  // Lista de rutas donde se mostrará el Navbar y el Sidebar
  const rutasDondeSeMuestran = ["/", "/SobreNosotros", "/Ventas", "/Contacto"];

  return (
    <div className="App">
      <BrowserRouter>
        {rutasDondeSeMuestran.includes(window.location.pathname) && (
          <>
            <Navbar />
            <Sidebar />
          </>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SobreNosotros" element={<SobreNosotros />} />
          <Route path="/Ventas" element={<Ventas />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
