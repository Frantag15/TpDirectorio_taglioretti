import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/estadisticas">Estadísticas</Link>
      <Link to="/contacto">Contacto</Link>
    </nav>
  );
}
