import React from "react";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

export default function ContenidoLibro(props) {
    console.log('Los datos que me envian el padre son: ',props.libros)
    return (
        <div>
           <Grid container padding={4} spacing={3}>
           {props.libros.map((libro, index)=>(<p>Hola xd</p>))}
            <Grid size={{ xs: 12, md: 4}}>
                <Paper style={{padding:20}}>
                    Soy hijo 1 {libros.index}
                </Paper>
            </Grid>
            </Grid>
                </div>
    )
}