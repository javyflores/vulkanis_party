// src/components/Confetti.jsx
export default function Confetti() {
  const gameContainer = document.createElement('div');
  const colors = ['#f00', '#0f0', '#00f', '#ff0', '#f0f', '#0ff'];
  
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = '-10px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
    confetti.style.transition = 'all ' + (Math.random() * 3 + 2).toFixed(2) + 's linear';
    confetti.style.position = 'fixed';
    confetti.style.zIndex = '9999';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.opacity = '1';

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.style.top = Math.random() * 100 + '%';
      confetti.style.left = (parseFloat(confetti.style.left) + (Math.random() * 20 - 10)) + '%';
    }, i * 30);

    setTimeout(() => confetti.remove(), 3000);
  }

  return null;
}