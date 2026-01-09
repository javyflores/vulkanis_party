// src/pages/CotizacionPage.jsx
import React, { useState } from 'react';
import axios from '../services/api';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

export default function CotizacionPage() {
  const [formData, setFormData] = useState({
    nombreEvento: '',
    fechaEvento: '',
    direccionUbicacion: '',
    idCliente: '',
    servicios: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/eventos', formData);
      alert('🎉 Cotización enviada correctamente');
      console.log(res.data);
    } catch (error) {
      alert('❌ Error al enviar cotización');
    }
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        🎨 Solicitar Cotización
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          label="Nombre del Evento"
          name="nombreEvento"
          fullWidth
          margin="normal"
          onChange={handleChange}
          required
        />
        <TextField
          label="Dirección del Evento"
          name="direccionUbicacion"
          fullWidth
          margin="normal"
          onChange={handleChange}
          required
        />
        <TextField
          label="Fecha del Evento"
          name="fechaEvento"
          type="date"
          InputLabelProps={{ shrink: true }}
          fullWidth
          margin="normal"
          onChange={handleChange}
          required
        />

        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Enviar Cotización
        </Button>
      </Box>
    </Container>
  );
}