import personas from "../data/personas.json";
import PersonaCard from "../components/PersonaCard";

export default function Home() {
  return (
    <div>
      <h2>Listado de Personas</h2>
      {personas.map((p) => (
        <PersonaCard key={p.id} persona={p} />
      ))}
    </div>
  );
}
