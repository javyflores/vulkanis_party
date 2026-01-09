// src/components/TarjetaDestacado.jsx
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

export default function TarjetaDestacado({ servicio }) {
  return (
    <Card sx={{ maxWidth: 345, margin: 'auto', boxShadow: 5 }}>
      <CardMedia
        component="img"
        height="200"
        image={servicio.urlPortafolio[0]}
        alt={servicio.nombre}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {servicio.nombre}
        </Typography>
        <Typography variant="body2">{servicio.descripcionBreve}</Typography>
        <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
          {servicio.precioBase} $
        </Typography>
        <Typography variant="caption" color="text.secondary">
          ⭐ {servicio.valoracionPromedio || 'N/A'}
        </Typography>
      </CardContent>
    </Card>
  );
}