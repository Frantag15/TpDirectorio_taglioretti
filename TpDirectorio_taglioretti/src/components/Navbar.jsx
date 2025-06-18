import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#cfe3ff" }}>
      <Link to="/">Inicio</Link> |{" "}
      <Link to="/estadisticas">Estadísticas</Link> |{" "}
      <Link to="/contacto">Contacto</Link>
    </nav>
  );
}
