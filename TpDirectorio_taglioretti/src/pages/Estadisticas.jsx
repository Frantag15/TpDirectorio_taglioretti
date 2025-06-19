import personas from "../data/personas.json";
import "./Estadisticas.css";

export default function Estadisticas() {
  const total = personas.length;
  const mayores35 = personas.filter(p => p.edad > 35);
  const mayorEdad = Math.max(...personas.map(p => p.edad));
  const menorEdad = Math.min(...personas.map(p => p.edad));
  const promedio = (personas.reduce((suma, p) => suma + p.edad, 0) / total).toFixed(1);

  const stats = [
    { label: "Total de personas", value: total },
    { label: "Personas mayores de 35", value: mayores35.length },
    { label: "Edad máxima", value: mayorEdad },
    { label: "Edad mínima", value: menorEdad },
    { label: "Promedio de edad", value: promedio }
  ];

  return (
    <div className="estadisticas-container">
      <h2>Estadísticas</h2>
      <div className="estadisticas-scroll">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <h3>{stat.label}</h3>
            <p>{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
