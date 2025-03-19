import React from "react";
import { Routes, Route } from "react-router-dom";

import PageHome from "./Home/PageHome";
import HomeRecets from "../Homerecetas/HomeRecets";
import DetalleReceta from "../Homerecetas/DetalleReceta";  // Importar DetalleReceta
import PageContact from "./Contact/PageContact";
import PageAcerca from "./Acercade/PageAcerca";
import NotFound from "./Home/NotFound";
import PageDash from "./dash/PageDash";
import DetalleDash from "./dash/DetalleDash";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="/recetas" element={<HomeRecets />} />
      <Route path="/recetas/:idMeal" element={<DetalleReceta />} />  {/* NUEVA RUTA */}
      <Route path="/contact" element={<PageContact />} />
      <Route path="/acercade" element={<PageAcerca />} />
      <Route path="/home" element={<PageHome />} />

      <Route path='/dash'>
        <Route index element={<PageDash />} />
        <Route path=':city' element={<DetalleDash/>} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
