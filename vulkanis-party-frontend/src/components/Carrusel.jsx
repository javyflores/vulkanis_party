// src/components/Carrusel.jsx
import React, { useState, useEffect } from 'react';
import '../components/Confetti.css';
import Confetti from './Confetti';

export default function Carrusel({ images }) {
  const [index, setIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 1500);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div style={{ position: 'relative', margin: '2rem auto', width: '90%', maxWidth: '800px' }}>
      <img
        src={images[index]}
        alt={`Slide ${index}`}
        style={{
          width: '100%',
          height: '400px',
          objectFit: 'cover',
          borderRadius: '10px',
          boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
        }}
      />
      {showConfetti && <Confetti />}
    </div>
  );
}