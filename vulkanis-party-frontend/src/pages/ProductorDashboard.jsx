// src/pages/ProductorDashboard.jsx
import { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Chip,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import axios from '../services/api';

export default function ProductorDashboard() {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const res = await axios.get('/eventos/productor/mis-eventos');
        setEventos(res.data);
      } catch (error) {
        console.error('Error al cargar eventos:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchEventos();
  }, []);

  const handleReportarLlegada = async (idEvento) => {
    try {
      await axios.post(`/actualizaciones`, {
        idEvento,
        tipo: 'llegada_productor',
        mensaje: 'El equipo ha llegado al lugar del evento.',
        idUsuario: 'tu-id-de-productor', // Esto debe venir del contexto de autenticación
      });
      alert('✅ Llegada reportada');
    } catch (error) {
      alert('❌ Error al reportar llegada');
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: 'linear-gradient(to right, #ff6ec4, #7873f5)',
        minHeight: '100vh',
        padding: '2rem',
        color: '#fff',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom fontWeight="bold" align="center">
          🎉 Dashboard del Productor
        </Typography>

        {loading ? (
          <Typography align="center">Cargando tus eventos...</Typography>
        ) : eventos.length === 0 ? (
          <Typography align="center">No tienes eventos asignados.</Typography>
        ) : (
          <Grid container spacing={3}>
            {eventos.map((evento) => (
              <Grid item xs={12} md={6} key={evento.id}>
                <Card sx={{ bgcolor: '#fff', color: '#000' }}>
                  <CardContent>
                    <Typography variant="h6">{evento.nombreEvento}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Fecha: {new Date(evento.fechaEvento).toLocaleDateString()}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Dirección: {evento.direccionUbicacion}
                    </Typography>
                    <Chip
                      label={evento.estado}
                      color={
                        evento.estado === 'confirmado'
                          ? 'success'
                          : evento.estado === 'cotizacion'
                          ? 'warning'
                          : 'default'
                      }
                      size="small"
                      sx={{ mt: 1 }}
                    />

                    <Divider sx={{ my: 2 }} />

                    <List dense>
                      {evento.servicios?.map((servicio) => (
                        <ListItem key={servicio.id}>
                          <ListItemText
                            primary={servicio.servicio?.nombre}
                            secondary={`Estado: ${servicio.estado}`}
                          />
                        </ListItem>
                      ))}
                    </List>

                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={() => handleReportarLlegada(evento.id)}
                      sx={{ mt: 2 }}
                    >
                      Reportar Llegada
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}