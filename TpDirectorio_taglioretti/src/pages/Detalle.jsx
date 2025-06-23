import { useParams } from "react-router-dom";
import personas from "../data/personas.json";
import "./Detalle.css";

export default function Detalle() {
  const imagenes = import.meta.glob('../assets/imagenes/*', { eager: true, as: 'url' });
  const { id } = useParams();
  const persona = personas.find(p => p.id === parseInt(id));

  if (!persona) return <h2>Persona no encontrada</h2>;

  return (
    <div className="detalle-container">
      <div className="detalle-top">
      <img
  src={imagenes[`../assets/imagenes/${persona.foto}`]}
  alt={persona.nombre}
  className="detalle-foto"
/>

        
        <div className="detalle-info">
          <h2>{persona.nombre} {persona.apellido}</h2>
          <p>Edad: {persona.edad}</p>
          <p>{persona.edad < 18 ? "Menor de edad" : "Mayor de edad"}</p>
        </div>
      </div>
      <div className="detalle-email">
        <span className="email-icon">📧</span>
        <span>{persona.email}</span>
      </div>
    </div>
  );
}
