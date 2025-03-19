import React from "react";
import { Card, CardContent, Typography, Link } from "@mui/material";

function PageHome() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#f9fafb", padding: "16px" }}>
      <Card sx={{ maxWidth: 600, width: "100%", padding: 3, boxShadow: 3, borderRadius: 3 }}>
        <Typography variant="h5" fontWeight="bold" color="text.primary" gutterBottom>
          Conclusión
        </Typography>
        <CardContent>
          <Typography variant="body1" color="text.secondary" paragraph>
            Este mini proyecto ha sido desarrollado como parte de la materia <strong>Aplicaciones Web Orientadas a Servicios</strong> y tiene como objetivo demostrar el consumo de una API REST en el desarrollo de aplicaciones web.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Mediante el uso de la API de <Link href="https://www.themealdb.com/" target="_blank" rel="noopener noreferrer" color="primary">TheMealDB</Link>, se ha implementado una aplicación que permite a los usuarios explorar recetas, visualizar ingredientes y pasos de preparación, además de obtener información detallada de cada platillo.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Este proyecto resalta la importancia de la integración de servicios web en aplicaciones modernas, facilitando el acceso a datos dinámicos y mejorando la experiencia del usuario. A lo largo del desarrollo, se han aplicado conceptos clave como <strong>solicitudes HTTP, manejo de JSON, asincronía y renderización dinámica</strong> de información obtenida desde un servicio externo.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            En conclusión, este mini proyecto no solo representa un ejercicio práctico en la materia, sino que también demuestra el potencial de las APIs en el desarrollo de aplicaciones interactivas y funcionales.
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold" color="text.primary" sx={{ mt: 3 }}>
            Carlos Alberto García
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Mini Proyecto - Aplicaciones Web Orientadas a Servicios
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default PageHome;
