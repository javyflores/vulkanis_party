// src/components/CotizacionCard.jsx
import React from 'react';
import { Card, CardContent, Typography, Chip, Button } from '@mui/material';
import { Box } from '@mui/system';

export default function CotizacionCard({ cotizacion }) {
  const { nombreEvento, estado, fechaEvento, createdAt } = cotizacion;

  const estadoColorMap = {
    cotizacion: 'warning',
    pendiente_pago: 'info',
    confirmado: 'success',
    en_curso: 'primary',
    finalizado: 'default',
    cancelado: 'error',
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        minWidth: 280,
        boxShadow: 4,
        bgcolor: '#fff',
        color: '#000',
        borderRadius: 2,
        transition: 'transform 0.3s',
        '&:hover': {
          transform: 'scale(1.02)',
        },
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {nombreEvento}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Fecha: {new Date(fechaEvento).toLocaleDateString()}
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Chip
            label={estado}
            color={estadoColorMap[estado] || 'default'}
            size="small"
            sx={{ fontWeight: 'bold' }}
          />
        </Box>
        <Typography variant="caption" color="text.secondary">
          Creado el {new Date(createdAt).toLocaleDateString()}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button size="small" href={`/cotizacion/${cotizacion.id}`} fullWidth>
            Ver Detalles
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}