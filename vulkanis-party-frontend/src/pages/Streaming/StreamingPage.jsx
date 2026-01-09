// src/pages/Streaming/StreamingPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../services/api';
import {
  Container,
  Typography,
  Box,
  Paper,
  Alert,
  CircularProgress,
} from '@mui/material';

export default function StreamingPage() {
  const { id } = useParams(); // ID del evento
  const [evento, setEvento] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEvento = async () => {
      try {
        const res = await axios.get(`/eventos/${id}`);
        setEvento(res.data);
      } catch (err) {
        setError('No se pudo cargar la información del evento.');
        console.error('Error al cargar evento:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvento();
  }, [id]);

  if (loading) {
    return (
      <Container sx={{ py: 4, textAlign: 'center' }}>
        <CircularProgress />
        <Typography>Cargando transmisión...</Typography>
      </Container>
    );
  }

  if (error || !evento) {
    return (
      <Container sx={{ py: 4 }}>
        <Alert severity="error">{error || 'Evento no encontrado.'}</Alert>
      </Container>
    );
  }

  return (
    <Container
      sx={{
        py: 4,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Fondo decorativo */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'radial-gradient(circle at 20% 50%, #f0f, #ff0, #0ff)',
          opacity: 0.1,
          zIndex: -1,
        }}
      />

      <Typography variant="h3" gutterBottom fontWeight="bold" color="#FF4500">
        🎬 VENTANA MÁGICA 🎥
      </Typography>
      <Typography variant="h5" gutterBottom color="#8A2BE2">
        ¡Tu Fiesta Sin Fronteras!
      </Typography>

      <Box sx={{ bgcolor: '#000', borderRadius: 2, overflow: 'hidden', my: 4 }}>
        <video
          autoPlay
          muted
          playsInline
          controls
          style={{ width: '100%', maxHeight: '600px', objectFit: 'cover' }}
        >
          <source src={`http://localhost:3000/streaming/${id}`} type="video/mp4" />
          Tu navegador no soporta video.
        </video>
      </Box>

      <Paper sx={{ p: 3, bgcolor: '#ffebee', display: 'inline-block' }}>
        <Typography variant="h6">
          Estás viendo en tiempo real: <strong>{evento.nombreEvento}</strong>
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Fecha: {new Date(evento.fechaEvento).toLocaleDateString()}
        </Typography>
      </Paper>
    </Container>
  );
}