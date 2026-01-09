// src/pages/DashboardAdmin.jsx
import React, { useEffect, useState } from 'react';
import axios from '../services/api';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';

export default function DashboardAdmin() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const res = await axios.get('/usuarios');
        setUsuarios(res.data);
      } catch (error) {
        console.error('Error al cargar usuarios:', error);
      }
    };
    fetchUsuarios();
  }, []);

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        📊 Panel de Administrador
      </Typography>
      <Grid container spacing={3}>
        {usuarios.map((usuario) => (
          <Grid item xs={12} sm={6} md={4} key={usuario.id}>
            <Card sx={{ bgcolor: '#fff', borderLeft: `4px solid ${usuario.rol?.nombre === 'Administrador' ? '#FF4500' : '#8A2BE2'}` }}>
              <CardContent>
                <Typography variant="h6">{usuario.nombre}</Typography>
                <Typography color="text.secondary">📧 {usuario.correoElectronico}</Typography>
                <Typography color="text.secondary">🎭 {usuario.rol?.nombre || 'Sin rol'}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}