import { Link } from "react-router-dom";

export default function PersonaCard({ persona }) {
  return (
    <div style={{ border: "1px solid #aaa", margin: "1rem", padding: "1rem" }}>
      <h3>{persona.nombre} {persona.apellido}</h3>
      <p>Edad: {persona.edad}</p>
      <Link to={`/persona/${persona.id}`}>Ver más</Link>
    </div>
  );
}
