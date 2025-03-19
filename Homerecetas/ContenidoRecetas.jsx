import React from "react";
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import { Card, CardContent, CardMedia, Typography, Button, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function ContenidoRecetas(props) {
    const navigate = useNavigate();

    console.log('Datos desde hijo:', props.data);

    return (
        <div>
            {!props.data || props.data.length === 0 ? (
                <Typography variant="h5" color="error">No se encontraron resultados</Typography>
            ) : (
                <Grid container padding={4} spacing={2}>
                    {props.data.map((receta, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                            <Card style={{ maxWidth: 345, margin: '0 auto' }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={receta.strMealThumb}
                                    alt={receta.strMeal}
                                />
                                <CardContent>
                                    <Typography variant="h6" align="center">{receta.strMeal}</Typography>
                                    <Button 
                                        variant="contained" 
                                        color="primary" 
                                        fullWidth
                                        onClick={() => navigate(`/recetas/${receta.idMeal}`)}
                                    >
                                        Más Información
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </div>
    );
}
