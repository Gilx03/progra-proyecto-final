import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AppBar, Toolbar, Typography, Button, Container, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import dashboardBackground from '../background.jpg';

const Movimientos: React.FC = () => {
  const [movimientos, setMovimientos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/api/movimientos')
      .then(res => setMovimientos(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleBack = () => {
    navigate('/dashboard');
  };

  return (
    <div
      style={{
        backgroundImage: `url(${dashboardBackground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Movimientos de Inventario
          </Typography>
          <Button color="inherit" onClick={handleBack}>
            Volver al Dashboard
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4, backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: 2, padding: 3 }}>
        <Typography variant="h5" gutterBottom align="center">
          Historial de Movimientos
        </Typography>
        <List>
          {movimientos.map((mov: any) => (
            <ListItem key={mov.id}>
              <ListItemText
                primary={`Producto ID: ${mov.producto_id} - Tipo: ${mov.tipo_movimiento} - Cantidad: ${mov.cantidad}`}
                secondary={`Fecha: ${new Date(mov.fecha).toLocaleString()}`}
              />
            </ListItem>
          ))}
        </List>
      </Container>
    </div>
  );
};

export default Movimientos;
