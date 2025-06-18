import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Detalle from "../pages/Detalle";
import Estadisticas from "../pages/Estadisticas";
import Contacto from "../pages/Contacto";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="persona/:id" element={<Detalle />} />
          <Route path="estadisticas" element={<Estadisticas />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
