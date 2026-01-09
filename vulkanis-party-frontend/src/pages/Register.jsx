// src/pages/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../services/api';
import { TextField, Button, Container, Box, Typography } from '@mui/material';

export default function Register() {
  const [nombre, setNombre] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [hashContrasena, setHashContrasena] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/usuarios', {
        correoElectronico,
        hashContrasena,
        nombre,
        idRol: 'cliente', // Debe venir desde el backend
      });
      navigate('/login');
    } catch (error) {
      alert('Error al registrarse');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Box sx={{ bgcolor: '#fff', p: 4, borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h5" align="center" gutterBottom>
          🎨 Regístrate en Vulkanis Party
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nombre"
            fullWidth
            margin="normal"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <TextField
            label="Correo Electrónico"
            fullWidth
            margin="normal"
            value={correoElectronico}
            onChange={(e) => setCorreoElectronico(e.target.value)}
            required
          />
          <TextField
            label="Contraseña"
            type="password"
            fullWidth
            margin="normal"
            value={hashContrasena}
            onChange={(e) => setHashContrasena(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, mb: 2 }}>
            Registrar
          </Button>
        </form>
      </Box>
    </Container>
  );
}