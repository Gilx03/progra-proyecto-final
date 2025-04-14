import React from 'react';
import { Box, Typography, Container, AppBar, Toolbar, Button, Grid, Card, CardMedia, CardContent } from '@mui/material';
import backgroundImage from '../background.jpg'; // Importa tu imagen de fondo de la página
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

// Importa tus 12 imágenes de repostería
import producto1 from '../producto1.png';
import producto2 from '../producto2.png';
import producto3 from '../producto3.png';
import producto4 from '../producto4.png';
import producto5 from '../producto5.png';
import producto6 from '../producto6.png';
import producto7 from '../producto7.png';
import producto8 from '../producto8.png';
import producto9 from '../producto9.png';
import producto10 from '../producto10.png';
import producto11 from '../producto11.png';
import producto12 from '../producto12.png';

const productos = [
  { id: 1, nombre: 'MacBook Pro Ultra Max Alpha', imagen: producto1, descripcion: 'Con Procesador Apple M69420.' },
  { id: 2, nombre: 'Laptop Windows', imagen: producto2, descripcion: 'Una Laptop Windows mid.' },
  { id: 3, nombre: 'Router Ultra Gaming Xtreme', imagen: producto3, descripcion: 'Para que no digas que fue culpa de Lag.' },
  { id: 4, nombre: 'Apple Watch', imagen: producto4, descripcion: 'Reloj que te dice la hora.' },
  { id: 5, nombre: 'Mouse Mega Pro Gaming', imagen: producto5, descripcion: 'Mouse Ultra ligero con extras como aimbot.' },
  { id: 6, nombre: 'Router', imagen: producto6, descripcion: 'Router comun y corriente .' },
  { id: 7, nombre: 'Airpods 2', imagen: producto7, descripcion: 'Audifonos Inalambricos.' },
  { id: 8, nombre: 'PS4 Controller', imagen: producto8, descripcion: 'Control PS4 para poder jugar en PC ya que la PS4 no sirve.' },
  { id: 9, nombre: 'Monitor ASUS', imagen: producto9, descripcion: 'ASUS Monitor 4K OLED 360Hz Refresh Rate.' },
  { id: 10, nombre: 'Camara', imagen: producto10, descripcion: 'Camara para tirar fotos.' },
  { id: 11, nombre: 'Impresora', imagen: producto11, descripcion: 'Impresora para imprimir.' },
  { id: 12, nombre: 'Bocina Apple', imagen: producto12, descripcion: 'Bocina para bocinar.' },
];

const NuestrosProductos: React.FC = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const navigateToOption = (path: string) => {
    navigate(path);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ElectroMax
          </Typography>
          <Button color="inherit" onClick={() => navigateToOption('/dashboard')}>
            Inicio
          </Button>
          <Button color="inherit" onClick={() => navigateToOption('/nosotros')}>
            Nosotros
          </Button>
          <Button color="inherit" onClick={() => navigateToOption('/nuestrosproductos')}>
            Nuestros Productos
          </Button>
          <Button color="inherit" onClick={() => navigateToOption('/contacto')}>
                     Contáctanos
          </Button>
          
          <Button color="inherit" onClick={handleLogout}>
            Cerrar Sesión
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          flexGrow: 1,
          padding: 4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              padding: 4,
              borderRadius: 2,
              boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              alignItems: 'center',
            }}
          >
            <Typography variant="h4" component="h2" gutterBottom align="center">
              Nuestros Deliciosos Productos
            </Typography>

            <Grid container spacing={4} justifyContent="center">
              {productos.map((producto) => (
                <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      alt={producto.nombre}
                      height="200"
                      image={producto.imagen}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        {producto.nombre}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {producto.descripcion}
                      </Typography>
                    </CardContent>
                    {/* Puedes agregar más acciones a la tarjeta si es necesario */}
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default NuestrosProductos;