import personas from "../data/personas.json";
import PersonaCard from "../components/PersonaCard";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <h2 className="home-title">Listado de Personas</h2>
      <div className="cards-container">
        {personas.map((p) => (
          <PersonaCard key={p.id} persona={p} />
        ))}
      </div>
    </div>
  );
}
