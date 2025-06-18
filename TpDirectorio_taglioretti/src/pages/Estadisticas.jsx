import personas from "../data/personas.json";

export default function Estadisticas() {
  const total = personas.length;
  const mayores35 = personas.filter(p => p.edad > 35);
  const mayorEdad = Math.max(...personas.map(p => p.edad));
  const menorEdad = Math.min(...personas.map(p => p.edad));
  const promedio = (personas.reduce((suma, p) => suma + p.edad, 0) / total).toFixed(1);

  return (
    <div>
      <h2>Estadísticas</h2>
      <p>Total de personas: {total}</p>
      <p>Personas mayores de 35: {mayores35.length}</p>
      <p>Edad máxima: {mayorEdad}</p>
      <p>Edad mínima: {menorEdad}</p>
      <p>Promedio de edad: {promedio}</p>
    </div>
  );
}
