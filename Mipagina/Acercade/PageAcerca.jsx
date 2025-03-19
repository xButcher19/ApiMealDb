import React from "react";
import { Container, Typography, Grid, Card, CardContent, CardMedia, Paper, Box } from "@mui/material";

export default function PageAcerca() {
    return (
        <Container maxWidth="lg" sx={{ mt: 5, textAlign: "center" }}>
            {/* Encabezado principal */}
            <Paper elevation={4} sx={{ p: 4, borderRadius: 3, backgroundColor: "#fff3e0" }}>
                <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", color: "#d32f2f" }}>
                    🍽️ TheMealDB API
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    TheMealDB es una API gratuita para obtener información sobre recetas, ingredientes y categorías de comida.  
                    Perfecta para desarrolladores que desean integrar recetas en sus aplicaciones.
                </Typography>
            </Paper>

            {/* Contenedor de tarjetas */}
            <Grid container spacing={4} sx={{ mt: 4 }}>
                {/* Tarjeta 1: ¿Qué es? */}
                <Grid item xs={12} md={4}>
                    <Paper elevation={3} sx={{ borderRadius: 3, overflow: "hidden", transition: "0.3s", "&:hover": { transform: "scale(1.03)" } }}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="220"
                                image="https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg"
                                alt="Receta TheMealDB"
                            />
                            <CardContent>
                                <Typography variant="h5" sx={{ fontWeight: "bold", color: "#d32f2f" }}>
                                    ¿Qué es TheMealDB?
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Es una API que proporciona información sobre miles de recetas y sus ingredientes.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>

                {/* Tarjeta 2: Características */}
                <Grid item xs={12} md={4}>
                    <Paper elevation={3} sx={{ borderRadius: 3, overflow: "hidden", transition: "0.3s", "&:hover": { transform: "scale(1.03)" } }}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="220"
                                image="https://www.themealdb.com/images/media/meals/1548772327.jpg"
                                alt="Características"
                            />
                            <CardContent>
                                <Typography variant="h5" sx={{ fontWeight: "bold", color: "#388e3c" }}>
                                    Características
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    ✅ Búsqueda de recetas  
                                    ✅ Listado de ingredientes  
                                    ✅ Categorías y áreas geográficas  
                                    ✅ Imágenes de calidad
                                </Typography>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>

                {/* Tarjeta 3: ¿Cómo usarla? */}
                <Grid item xs={12} md={4}>
                    <Paper elevation={3} sx={{ borderRadius: 3, overflow: "hidden", transition: "0.3s", "&:hover": { transform: "scale(1.03)" } }}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="220"
                                image="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"
                                alt="Uso de la API"
                            />
                            <CardContent>
                                <Typography variant="h5" sx={{ fontWeight: "bold", color: "#1976d2" }}>
                                    ¿Cómo usarla?
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Puedes acceder a la API a través de peticiones HTTP como:  
                                    <Box sx={{ fontSize: "0.9rem", color: "#000", fontStyle: "italic", mt: 1 }}>
                                        https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
                                    </Box>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}
