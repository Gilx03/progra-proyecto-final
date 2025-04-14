import React from 'react';
import { Box, Typography, Container, AppBar, Toolbar, Button, Avatar} from '@mui/material';
import backgroundImage from '../background.jpg'; // Importa tu imagen de fondo
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import nosotrosImage from '../pastel1.png'; // Importa la imagen para la sección "Nosotros"

const Nosotros: React.FC = () => {
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
          padding: 4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo blanco transparente
              padding: 4,
              borderRadius: 2,
              boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
            }}
          >
            <Typography variant="h4" component="h2" gutterBottom align="center">
              Sobre Nosotros - ElectroMax
            </Typography>

             {/* Imagen antes de la historia */}
             <Avatar
              alt="ElectroMax"
              src={nosotrosImage} // Asegúrate de que la ruta sea correcta
              sx={{ width: 300, height: 200, mb: 2, margin: '0 auto 2px auto', objectFit: 'contain',}} // Ajusta el tamaño y el margen inferior según necesites
              variant="rounded" // Puedes usar "circular" si prefieres una imagen circular
            />

            <Typography variant="h6" gutterBottom>
              Nuestra Historia
            </Typography>
            <Typography variant="body1" paragraph>
            ElectroMax nació en 2017, cuando Marcos Estévez, un joven apasionado por la tecnología, abrió una pequeña tienda en el antiguo taller de su abuelo. Observando la necesidad de productos electrónicos accesibles y confiables en su comunidad, inició ofreciendo artículos básicos y servicios técnicos de calidad. Su compromiso con la excelencia y la atención al cliente permitió que la tienda creciera rápidamente. En 2021, se lanzó la tienda en línea, posicionando a ElectroMax como una marca moderna y cercana. Hoy continúa en expansión, llevando tecnología de calidad a todo el país.

.
            </Typography>

            <Typography variant="h6" gutterBottom>
              Nuestra Visión
            </Typography>
            <Typography variant="body1" paragraph>
            Ser la tienda de electrónicos líder en República Dominicana, reconocida por su innovación, confianza y cercanía con el cliente, ofreciendo soluciones tecnológicas accesibles para todos.

.
            </Typography>

            <Typography variant="h6" gutterBottom>
              Nuestra Misión
            </Typography>
            <Typography variant="body1" paragraph>
            Brindar productos electrónicos de alta calidad y un servicio al cliente excepcional, mediante una plataforma física y digital eficiente, que conecte a las personas con la tecnología de forma fácil, rápida y segura.

.
            </Typography>

            <Typography variant="h6" gutterBottom>
              Nuestros Valores
            </Typography>
            <ul>
              <li>
                <Typography variant="body1">
                Innovación: Nos adaptamos constantemente a las nuevas tendencias tecnológicas.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                Compromiso: Cumplimos lo que prometemos y priorizamos la satisfacción del cliente.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                Responsabilidad: Operamos con ética, transparencia y respeto.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Servicio al Cliente: Atención personalizada y calidez en cada interacción.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                Calidad: Seleccionamos productos confiables y duraderos.
                </Typography>
              </li>
            </ul>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Nosotros;