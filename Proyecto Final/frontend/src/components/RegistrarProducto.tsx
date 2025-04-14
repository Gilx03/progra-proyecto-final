import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, AppBar, Toolbar } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import dashboardBackground from '../background.jpg'; // asegúrate que exista

const RegistrarProducto: React.FC = () => {
  const [nombre_producto, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState<number>(0);
  const [cantidad, setCantidad] = useState<number>(0);
  const [error, setError] = useState('');
  const [exito, setExito] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setExito('');

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:3001/api/productos',
        {
          nombre_producto,
          descripcion,
          precio,
          cantidad,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setExito('Producto registrado correctamente ✅');
      setNombre('');
      setDescripcion('');
      setPrecio(0);
      setCantidad(0);
    } catch (err) {
      setError('Error al registrar producto ❌');
    }
  };

  const volverAlDashboard = () => {
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
        flexDirection: 'column',
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            ElectroMax - Registrar Producto
          </Typography>
          <Button color="inherit" onClick={volverAlDashboard}>
            Volver al Dashboard
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm" sx={{ mt: 5, backgroundColor: 'rgba(255, 255, 255, 0.9)', p: 4, borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom align="center">
          Registrar Nuevo Producto
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Nombre del Producto"
            value={nombre_producto}
            onChange={(e) => setNombre(e.target.value)}
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <TextField
            label="Descripción"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            fullWidth
            multiline
            rows={3}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Precio"
            type="number"
            value={precio}
            onChange={(e) => setPrecio(Number(e.target.value))}
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <TextField
            label="Cantidad"
            type="number"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
            fullWidth
            required
            sx={{ mb: 2 }}
          />

          {error && (
            <Typography color="error" align="center" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}
          {exito && (
            <Typography color="primary" align="center" sx={{ mt: 2 }}>
              {exito}
            </Typography>
          )}

          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Guardar Producto
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default RegistrarProducto;
