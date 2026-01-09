// src/pages/Pagos/PaymentPage.jsx
import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Paper,
  Alert,
} from '@mui/material';

export default function PaymentPage() {
  const [formData, setFormData] = useState({
    numeroTarjeta: '',
    nombreTitular: '',
    fechaExpiracion: '',
    cvv: '',
    monto: '250000', // Este valor debería venir del backend
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      // Simulación de llamada al backend
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log('Pago procesado:', formData);
      setSuccess(true);
    } catch (err) {
      setError('Error al procesar el pago. Verifica tus datos.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Paper sx={{ p: 4, borderRadius: 3, boxShadow: 4 }}>
        <Typography variant="h5" gutterBottom fontWeight="bold" align="center">
          💳 Pagar Cotización
        </Typography>

        {success ? (
          <Alert severity="success" sx={{ mb: 3 }}>
            ¡Pago realizado con éxito! Recibirás un correo de confirmación.
          </Alert>
        ) : (
          <form onSubmit={handleSubmit}>
            {error && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {error}
              </Alert>
            )}

            <TextField
              label="Nombre del Titular"
              name="nombreTitular"
              fullWidth
              margin="normal"
              value={formData.nombreTitular}
              onChange={handleChange}
              required
            />

            <TextField
              label="Número de Tarjeta"
              name="numeroTarjeta"
              fullWidth
              margin="normal"
              placeholder="1234 5678 9012 3456"
              value={formData.numeroTarjeta}
              onChange={handleChange}
              required
              inputProps={{ maxLength: 16 }}
            />

            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              <TextField
                label="Fecha de Expiración"
                name="fechaExpiracion"
                placeholder="MM/AA"
                fullWidth
                value={formData.fechaExpiracion}
                onChange={handleChange}
                required
                inputProps={{ maxLength: 5 }}
              />
              <TextField
                label="CVV"
                name="cvv"
                type="password"
                placeholder="123"
                value={formData.cvv}
                onChange={handleChange}
                required
                inputProps={{ maxLength: 3 }}
              />
            </Box>

            <Typography variant="h6" align="right" sx={{ mt: 3 }}>
              Total: ${parseInt(formData.monto).toLocaleString()}
            </Typography>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={loading}
              sx={{ mt: 2, py: 1.5, fontSize: '1.1rem' }}
            >
              {loading ? 'Procesando...' : 'Pagar Ahora'}
            </Button>
          </form>
        )}
      </Paper>
    </Container>
  );
}