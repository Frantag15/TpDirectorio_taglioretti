import { Link } from "react-router-dom";
import "./PersonaCard.css";

export default function PersonaCard({ persona }) {
  return (
    <div className="persona-card">
      <h3>{persona.nombre} {persona.apellido}</h3>
      <p>Edad: {persona.edad}</p>
      <Link to={`/persona/${persona.id}`}>Ver más</Link>
    </div>
  );
}
