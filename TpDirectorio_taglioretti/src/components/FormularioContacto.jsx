import { useState } from "react";

export default function FormularioContacto() {
  const [form, setForm] = useState({ nombre: "", apellido: "", email: "", edad: "" });
  const [mensaje, setMensaje] = useState("");

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { nombre, apellido, email, edad } = form;

    if (!nombre || !apellido || !email || !edad) {
      setMensaje("⚠️ Todos los campos son obligatorios.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setMensaje("⚠️ El email no tiene un formato válido.");
      return;
    }

    if (isNaN(edad) || edad <= 0) {
      setMensaje("⚠️ La edad debe ser mayor a 0.");
      return;
    }

    setMensaje("✅ Formulario enviado con éxito.");
    setForm({ nombre: "", apellido: "", email: "", edad: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" /><br/>
      <input name="apellido" value={form.apellido} onChange={handleChange} placeholder="Apellido" /><br/>
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" /><br/>
      <input name="edad" value={form.edad} onChange={handleChange} placeholder="Edad" /><br/>
      <button type="submit">Enviar</button>
      <p>{mensaje}</p>
    </form>
  );
}
