// src/pages/Home.jsx
import React, { useState } from 'react';
import Carrusel from '../components/Carrusel';
import TarjetaDestacado from '../components/TarjetaDestacado';
import Confetti from '../components/Confetti';
import '../components/Confetti.css';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(false);

  // Imágenes del carrusel
  const carruselImages = [
    '/galeria/imagen1.jpg',
    '/galeria/imagen2.jpg',
    '/galeria/imagen3.jpg',
    '/galeria/imagen4.jpg',
    '/galeria/imagen5.jpg',
    '/galeria/imagen6.png'
  ];

  // Servicios destacados
  const destacados = [
    {
      nombre: 'Combo Premium',
      descripcionBreve: 'Incluye animador, inflable y comida.',
      precioBase: 32,
      urlPortafolio: ['servicios/servicio1.jpg'],
      valoracionPromedio: 4.9,
    },
    {
      nombre: 'Pista de Baile',
      descripcionBreve: 'Pista iluminada con música temática.',
      precioBase: 60,
      urlPortafolio: ['servicios/servicio2.jpg'],
      valoracionPromedio: 4.7,
    },
    {
      nombre: 'Magia y Globos',
      descripcionBreve: 'Show interactivo para niños.',
      precioBase: 50,
      urlPortafolio: ['servicios/servicio3.jpg'],
      valoracionPromedio: 4.8,
    }
  ];

  return (
    <Box
      sx={{
        backgroundImage: 'linear-gradient(to right, #ff6ec4, #7873f5)',
        minHeight: '100vh',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#fff',
        position: 'relative',
      }}
    >
      {/* Vulkanis Party */}
      <img
        src="vulkanis.jpg"
        alt="Vulkanis Party"
        style={{
          width: '200px',
          transition: 'transform 0.3s ease-in-out',
          transform: showConfetti ? 'scale(1.1)' : 'none',
          filter: showConfetti ? 'drop-shadow(0 0 10px #ffffff)' : '',
          cursor: 'pointer',
        }}
        onMouseEnter={() => setShowConfetti(true)}
        onMouseLeave={() => setShowConfetti(false)}
      />

      {/* Mensaje principal */}
      <Typography variant="h2" gutterBottom fontWeight="bold" align="center">
        🎉 ¡Celebra con estilo!
      </Typography>
      <Typography variant="h6" align="center" sx={{ mb: 4 }}>
        En Vulkanis Party ofrecemos los mejores servicios para eventos infantiles.
      </Typography>

      {/* Carrusel Festivo */}
      <Carrusel images={carruselImages} />

      {/* Sección Destacados */}
      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Typography variant="h4" align="center" gutterBottom>
          🔥 Servicios Más Destacados
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2rem',
          }}
        >
          {destacados.map((servicio, i) => (
            <TarjetaDestacado key={i} servicio={servicio} />
          ))}
        </Box>
      </Container>

      <Button
        component={Link}
        to="/login"
        variant="contained"
        sx={{ mt: 2, mr: 2 }}
        color="primary"
      >
        Iniciar Sesión
      </Button>

      <Button
        component={Link}
        to="/registro"
        variant="outlined"
        sx={{ mt: 2, color: '#fff' }}
        color="secondary"
      >
        Registrarse
      </Button>
      <Footer />
    </Box>
  );
}