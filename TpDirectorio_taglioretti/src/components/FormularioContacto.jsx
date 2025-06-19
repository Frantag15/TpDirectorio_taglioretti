import { useState } from "react";
import "./FormularioContacto.css";

export default function FormularioContacto() {
  const [form, setForm] = useState({ nombre: "", apellido: "", email: "", edad: "" });
  const [mensaje, setMensaje] = useState("");

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const { nombre, apellido, email, edad } = form;

    if (!nombre || !apellido || !email || !edad) return setMensaje("⚠️ Todos los campos son obligatorios.");
    if (!email.includes("@") || !email.includes(".")) return setMensaje("⚠️ Email inválido.");
    if (isNaN(edad) || edad <= 0) return setMensaje("⚠️ Edad debe ser mayor a 0.");

    setMensaje("✅ Formulario enviado con éxito.");
    setForm({ nombre: "", apellido: "", email: "", edad: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" />
      <input name="apellido" value={form.apellido} onChange={handleChange} placeholder="Apellido" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
      <input name="edad" value={form.edad} onChange={handleChange} placeholder="Edad" />
      <button type="submit">Enviar</button>
      <p>{mensaje}</p>
    </form>
  );
}
