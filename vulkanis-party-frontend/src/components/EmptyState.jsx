// src/components/EmptyState.jsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function EmptyState({ title, description }) {
  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 6,
        px: 2,
        bgcolor: '#fff',
        borderRadius: 2,
        boxShadow: 3,
        color: '#000',
        width: '100%',
      }}
    >
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" gutterBottom>
        {description}
      </Typography>
      <Button
        component={Link}
        to="/cotizacion"
        variant="contained"
        sx={{ mt: 2, background: '#FF4500' }}
      >
        🎨 Solicitar Cotización
      </Button>
    </Box>
  );
}