// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../services/api';
import { Box, Typography, TextField, Button, Container } from '@mui/material';

export default function Login() {
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [hashContrasena, setHashContrasena] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/usuarios/login', {
        correoElectronico,
        hashContrasena,
      });

      // Guardar token y redirigir
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (error) {
      alert('❌ Error al iniciar sesión. Verifica tus credenciales.');
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: 'linear-gradient(to right, #ff6ec4, #7873f5)', // Fondo festivo
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            bgcolor: '#ffffff',
            padding: '2rem',
            borderRadius: '10px',
            boxShadow: 4,
            textAlign: 'center',
          }}
        >
          <Typography variant="h5" gutterBottom fontWeight="bold" color="#8A2BE2">
            🔐 Iniciar Sesión
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Correo Electrónico"
              type="email"
              fullWidth
              margin="normal"
              value={correoElectronico}
              onChange={(e) => setCorreoElectronico(e.target.value)}
              required
              variant="outlined"
              InputLabelProps={{ style: { color: '#000' } }}
              sx={{ mb: 2 }}
            />

            <TextField
              label="Contraseña"
              type="password"
              fullWidth
              margin="normal"
              value={hashContrasena}
              onChange={(e) => setHashContrasena(e.target.value)}
              required
              variant="outlined"
              InputLabelProps={{ style: { color: '#000' } }}
              sx={{ mb: 2 }}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                background: 'linear-gradient(45deg, #FF4500, #8A2BE2)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #8A2BE2, #FF4500)',
                },
              }}
            >
              Ingresar
            </Button>
          </form>
        </Box>
      </Container>
    </Box>
  );
}