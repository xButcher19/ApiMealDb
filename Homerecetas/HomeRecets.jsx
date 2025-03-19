import React from "react";
import { Grid, TextField, IconButton, Container, Card, CardContent, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ContenidoRecetas from "./ContenidoRecetas";

export default function HomeRecets() {
  const [textobuscar, setTextoBuscar] = React.useState("");
  const [data, setData] = React.useState({ meals: [] });

  console.log("Datos de input:", textobuscar);
  console.log("Datos almacenados:", data);

  const buscarcomida = async () => {
    if (textobuscar.trim() === "") {
      alert("Escribe algo...");
      return;
    }
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${textobuscar.trim()}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    const obtenerdatapre = async () => {
      try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=pie");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };
    obtenerdatapre();
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Card sx={{ p: 3, boxShadow: 3, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h5" fontWeight="bold" color="primary" gutterBottom>
            Buscador de Recetas
          </Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={10}>
              <TextField 
                onChange={(e) => setTextoBuscar(e.target.value)} 
                fullWidth 
                label="Buscar comida" 
                variant="outlined" 
              />
            </Grid>
            <Grid item xs={2}>
              <IconButton 
                onClick={buscarcomida} 
                color="primary" 
                sx={{ bgcolor: "primary.light", p: 2, borderRadius: 2 }}
              >
                <SearchIcon fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <ContenidoRecetas data={data.meals} />
    </Container>
  );
}
