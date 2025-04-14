import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AppBar, Toolbar, Typography, Button, Container, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import dashboardBackground from '../background.jpg';

const Bitacora: React.FC = () => {
  const [acciones, setAcciones] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/api/bitacora')
      .then(res => setAcciones(res.data))
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
            Bitácora de Acciones
          </Typography>
          <Button color="inherit" onClick={handleBack}>
            Volver al Dashboard
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4, backgroundColor: 'rgba(255,255,255,0.85)', borderRadius: 2, padding: 3 }}>
        <Typography variant="h5" gutterBottom align="center">
          Acciones Registradas
        </Typography>
        <List>
          {acciones.map((a: any) => (
            <ListItem key={a.id}>
              <ListItemText
                primary={`Usuario ID: ${a.usuario_id} - Acción: ${a.accion}`}
                secondary={`Fecha: ${new Date(a.fecha).toLocaleString()}`}
              />
            </ListItem>
          ))}
        </List>
      </Container>
    </div>
  );
};

export default Bitacora;
