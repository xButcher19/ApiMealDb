import React from "react";
import { Container, Grid, Card, CardContent, CardMedia, Typography, IconButton, Box } from "@mui/material";
import { GitHub, LinkedIn, Email, Instagram } from "@mui/icons-material";

const contactos = [
    {
        nombre: "Alberto García",
        puesto: "Desarrollador Full Stack",
        imagen: "xd.jpg", // Asegúrate de colocarla en `public`
        linkedin: "https://www.linkedin.com/in/alberto-garc%C3%ADa-b60308357",
        github: "https://github.com/xButcher19",
        instagram: "https://www.instagram.com/xbutcher_1",
        email: "mailto:garciatorrucocarlosalberto@gmail.com"
    },
];

export default function Contactos() {
    return (
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold", color: "#1976d2" }}>
                Contacto
            </Typography>
            <Grid container justifyContent="center">
                {contactos.map((contacto, index) => (
                    <Grid item xs={12} key={index}>
                        <Card sx={{ borderRadius: 3, boxShadow: 3, textAlign: "center", p: 3 }}>
                            <Box display="flex" justifyContent="center">
                                <CardMedia
                                    component="img" // Esto debe ser "img" para renderizar correctamente
                                    sx={{
                                        width: 360,
                                        height: 360,
                                        borderRadius: "25%",
                                        objectFit: "cover",
                                        marginBottom: 2
                                    }}
                                    image={contacto.imagen}
                                    alt={contacto.nombre}
                                />
                            </Box>
                            <CardContent>
                                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                                    {contacto.nombre}
                                </Typography>
                                <Typography variant="body1" color="textSecondary" gutterBottom>
                                    {contacto.puesto}
                                </Typography>
                                <Grid container justifyContent="center" spacing={2} sx={{ mt: 1 }}>
                                    <Grid item>
                                        <IconButton color="primary" href={contacto.linkedin} target="_blank">
                                            <LinkedIn fontSize="large" />
                                        </IconButton>
                                    </Grid>
                                    <Grid item>
                                        <IconButton color="inherit" href={contacto.github} target="_blank">
                                            <GitHub fontSize="large" />
                                        </IconButton>
                                    </Grid>
                                    <Grid item>
                                        <IconButton color="secondary" href={contacto.instagram} target="_blank">
                                            <Instagram fontSize="large" />
                                        </IconButton>
                                    </Grid>
                                    <Grid item>
                                        <IconButton color="error" href={contacto.email}>
                                            <Email fontSize="large" />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
