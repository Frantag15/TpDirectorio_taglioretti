import { useParams } from "react-router-dom";
import personas from "../data/personas.json";

export default function Detalle() {
  const { id } = useParams();
  const persona = personas.find(p => p.id === parseInt(id));

  if (!persona) return <h2>Persona no encontrada</h2>;

  return (
    <div>
      <h2>Detalle de {persona.nombre}</h2>
      <p>Nombre: {persona.nombre} {persona.apellido}</p>
      <p>Edad: {persona.edad} - {persona.edad < 18 ? "Menor de edad" : "Mayor de edad"}</p>
      <p>Email: {persona.email}</p>
    </div>
  );
}
