import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';

export default function MiDialogMasInfo(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
const productos=props.data;
  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        ver mas
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography>NOMBRE:{productos.nombre}</Typography>
            <Typography>CATEGORIA:{productos.categoria}</Typography>
            <Typography>STOCK:{productos.stock}</Typography>
            <Typography>PRECIO:${productos.precio}</Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>CANCELAR</Button>
          <Button onClick={handleClose} autoFocus>
            ACEPTAR
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
 