import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import dashboardBackground from '../background.jpg';

const Dashboard: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
  };

  const navigateToOption = (path: string) => {
    navigate(path);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${dashboardBackground})`,
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
            ElectroMax - Panel de Control
          </Typography>

          {/* Opciones funcionales del sistema */}
          <Button color="inherit" onClick={() => navigateToOption('/registrar-producto')}>
            Registrar Producto
          </Button>
          <Button color="inherit" onClick={() => navigateToOption('/inventario')}>
            Ver Inventario
          </Button>
          <Button color="inherit" onClick={() => navigateToOption('/movimientos')}>
            Movimientos
          </Button>
          <Button color="inherit" onClick={() => navigateToOption('/bitacora')}>
            Bitácora
          </Button>

          {/* Opciones informativas */}
          <Button color="inherit" onClick={() => navigateToOption('/nosotros')}>
            Nosotros
          </Button>
          <Button color="inherit" onClick={() => navigateToOption('/nuestrosproductos')}>
            Nuestros productos
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
    padding: 3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // fondo oscuro semitransparente
    backdropFilter: 'blur(8px)',           // efecto blur
    WebkitBackdropFilter: 'blur(8px)',     // para Safari
    borderRadius: 4,                       // esquinas redondeadas
    maxWidth: '600px',
    margin: 'auto',
  }}
>
  <Typography variant="h4" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>
    ¡Bienvenido a tu panel de control!
  </Typography>
  <Typography variant="body1" sx={{ color: 'white', textAlign: 'center' }}>
    Accede a las funciones del sistema o conoce más sobre ElectroMax usando el menú superior.
  </Typography>
</Box>
    </div>
  );
};

export default Dashboard;
