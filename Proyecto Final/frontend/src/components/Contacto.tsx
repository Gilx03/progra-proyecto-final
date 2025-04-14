import React from 'react';
import { Box, Typography, Container, AppBar, Toolbar, Button, Link, IconButton } from '@mui/material';
import backgroundImage from '../background.jpg'; // Importa tu imagen de fondo de la página
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Contacto: React.FC = () => {
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
        <Container maxWidth="sm">
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
              ¡Contáctanos!
            </Typography>

            <Typography variant="body1" align="center" gutterBottom>
              Estamos aquí para resolver sus dudas. ¡No dudes en contactarnos!
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', maxWidth: 300 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon color="primary" />
                <Typography variant="body1">
                  Correo Electrónico: <Link href="mailto:noemail@noemail.com" color="secondary">noemail@noemail.com</Link>
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon color="primary" />
                <Typography variant="body1">
                  Teléfono: <Link href="tel:+8094567890" color="secondary">+1 (809) 567-890</Link>
                </Typography>
              </Box>

              <Typography variant="h6" gutterBottom align="center">
                ¡Síguenos en nuestras redes sociales!
              </Typography>

              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                <IconButton color="primary" aria-label="Facebook" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <FacebookIcon fontSize="large" />
                </IconButton>
                <IconButton color="primary" aria-label="Instagram" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <InstagramIcon fontSize="large" />
                </IconButton>
                {/* Puedes agregar más redes sociales aquí */}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Contacto;