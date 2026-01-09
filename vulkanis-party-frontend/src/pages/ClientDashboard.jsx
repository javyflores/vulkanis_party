// src/pages/ClientDashboard.jsx
import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import CotizacionCard from '../components/CotizacionCard';
import Confetti from '../components/Confetti';
import axios from '../services/api';

export default function ClientDashboard() {
  const [cotizaciones, setCotizaciones] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCotizaciones = async () => {
      try {
        const res = await axios.get('/eventos/cliente/yo');
        setCotizaciones(res.data);
      } catch (error) {
        console.error('Error al cargar cotizaciones:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCotizaciones();
  }, []);

  const handleSolicitarCotizacion = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2000);
  };

  return (
    <Box
      sx={{
        backgroundImage: 'linear-gradient(to right, #ff6ec4, #7873f5)',
        minHeight: '100vh',
        padding: '2rem',
        color: '#fff',
        position: 'relative',
      }}
    >
      {showConfetti && <Confetti />}

      <Typography variant="h4" gutterBottom fontWeight="bold" align="center">
        🎉 Panel del Cliente
      </Typography>
      <Typography variant="h6" gutterBottom align="center">
        Revisa tus eventos y cotizaciones aquí
      </Typography>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {loading ? (
          <Typography align="center">Cargando tus eventos...</Typography>
        ) : cotizaciones.length === 0 ? (
          <EmptyState
            title="No tienes cotizaciones aún"
            description="Haz clic en el botón de abajo para solicitar una nueva cotización"
          />
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
            {cotizaciones.map((cotizacion) => (
              <CotizacionCard key={cotizacion.id} cotizacion={cotizacion} />
            ))}
          </div>
        )}

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Button
            href="/cotizacion"
            variant="contained"
            sx={{
              background: 'linear-gradient(45deg, #FF4500, #8A2BE2)',
              color: '#fff',
              fontWeight: 'bold',
              padding: '1rem 2rem',
              '&:hover': {
                background: 'linear-gradient(45deg, #8A2BE2, #FF4500)',
              },
            }}
            onClick={handleSolicitarCotizacion}
          >
            🎨 Solicitar Nueva Cotización
          </Button>
        </Box>
      </Container>
    </Box>
  );
}