import personas from "../data/personas.json";
import PersonaCard from "../components/PersonaCard";
import "./Home.css";
import fondo from "../assets/imagenes/imagenfondo.jpg";

export default function Home() {
  const fondoEstilo = {
    backgroundImage: `url(${fondo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    width: "100%",
    paddingTop: "6rem",

    paddingBottom: "2rem",
  };  

  return (
    <div className="home-container" style={fondoEstilo}>
      <div className="overlay"></div> {/* Fondo negro transparente */}
      <h2 className="home-title">Listado de Personas</h2>
      <div className="cards-container">
        {personas.map((p) => (
          <PersonaCard key={p.id} persona={p} />
        ))}
      </div>
    </div>
  );
}
