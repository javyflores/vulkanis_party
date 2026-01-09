// src/components/Footer.jsx
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#ffd54f',
        color: '#000',
        textAlign: 'center',
        py: 2,
        mt: 4,
        position: 'relative',
      }}
    >
      <Typography>© 2025 Vulkanis Party. Todos los derechos reservados.</Typography>
      <img
        src="/confetti.svg"
        alt="Serpentina"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      />
    </Box>
  );
}