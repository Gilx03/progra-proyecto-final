import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/login';
import SignupForm from './components/SignupForm';
import { useAuth } from './hooks/useAuth';

import Dashboard from './components/Dashboard';
import Nosotros from './components/Nosotros';
import NuestrosProductos from './components/NuestrosProductos';
import Contacto from './components/Contacto';

import RegistrarProducto from './components/RegistrarProducto';
import Inventario from './components/Inventario';
import Movimientos from './components/Movimientos';
import Bitacora from './components/Bitacora';

const App: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/" element={<Navigate to="/dashboard" />} />

      {/* Rutas protegidas */}
      <Route
        path="/dashboard"
        element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
      />
      <Route
        path="/registrar-producto"
        element={isAuthenticated ? <RegistrarProducto /> : <Navigate to="/login" />}
      />
      <Route
        path="/inventario"
        element={isAuthenticated ? <Inventario /> : <Navigate to="/login" />}
      />
      <Route
        path="/movimientos"
        element={isAuthenticated ? <Movimientos /> : <Navigate to="/login" />}
      />
      <Route
        path="/bitacora"
        element={isAuthenticated ? <Bitacora /> : <Navigate to="/login" />}
      />

      {/* Rutas públicas informativas */}
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/nuestrosproductos" element={<NuestrosProductos />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
};

export default App;
