import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AppBar, Toolbar, Typography, Button, Container, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import dashboardBackground from '../background.jpg';

const Inventario: React.FC = () => {
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/api/productos')
      .then(res => setProductos(res.data))
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
            Inventario
          </Typography>
          <Button color="inherit" onClick={handleBack}>
            Volver al Dashboard
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4, backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: 2, padding: 3 }}>
        <Typography variant="h5" gutterBottom align="center">
          Lista de Productos
        </Typography>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Categoría</TableCell>
                <TableCell>Proveedor</TableCell>
                <TableCell>Precio</TableCell>
                <TableCell>Cantidad</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productos.map((prod: any) => (
                <TableRow key={prod.id}>
                  <TableCell>{prod.nombre_producto}</TableCell>
                  <TableCell>{prod.categoria_id}</TableCell>
                  <TableCell>{prod.proveedor_id}</TableCell>
                  <TableCell>{prod.precio}</TableCell>
                  <TableCell>{prod.cantidad}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Container>
    </div>
  );
};

export default Inventario;
