// src/components/Button.jsx
import { Button } from '@mui/material';

export default function CustomButton({ children, to }) {
  return (
    <Button
      component="a"
      href={to}
      variant="contained"
      sx={{
        background: 'linear-gradient(45deg, #ff6ec4, #7873f5)',
        color: '#fff',
        px: 3,
        py: 1,
        '&:hover': {
          background: 'linear-gradient(45deg, #7873f5, #ff6ec4)',
        },
      }}
    >
      {children}
    </Button>
  );
}