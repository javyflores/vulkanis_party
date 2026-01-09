// src/components/Header.jsx
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <AppBar position="static" sx={{ bgcolor: '#8A2BE2' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          🎉 Vulkanis Party
        </Typography>
        <Button color="inherit" onClick={() => navigate('/login')}>
          Iniciar Sesión
        </Button>
        <Button color="inherit" onClick={() => navigate('/cotizacion')} sx={{ ml: 2 }}>
          🎨 Cotización
        </Button>
      </Toolbar>
    </AppBar>
  );
}