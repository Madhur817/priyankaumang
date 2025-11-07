window.addEventListener('load', () => {
  const line1 = document.getElementById('line1');
  const line2 = document.getElementById('line2');
  const photo = document.getElementById('photo');
  const line3 = document.getElementById('line3');
  const footer = document.getElementById('footer');

  setTimeout(() => line1.classList.add('fade-in'), 500);
  setTimeout(() => line2.classList.add('fade-in'), 2500);
  setTimeout(() => { photo.classList.add('fade-in'); }, 4500);
  setTimeout(() => {
    line3.classList.add('fade-in');
    footer.classList.add('fade-in');
    startConfetti();
  }, 6500);
});

// Simple confetti animation
function startConfetti() {
  const canvas = document.getElementById('confetti');
  const ctx = canvas.getContext('2d');
  let W = (canvas.width = window.innerWidth);
  let H = (canvas.height = window.innerHeight);
  let particles = [];
  const colors = ['#f9c5d1', '#ffd1a9', '#b5ead7', '#c7ceea', '#ff9aa2'];

  for (let i = 0; i < 120; i++) {
    particles.push({
      x: Math.random() * W,
      y: Math.random() * H - H,
      r: Math.random() * 6 + 2,
      d: Math.random() * 10 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      tilt: Math.random() * 10 - 10
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach((p) => {
      ctx.beginPath();
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.r, p.r);
      ctx.fill();
    });
    update();
  }

  function update() {
    particles.forEach((p) => {
      p.y += Math.cos(p.d) + 1 + p.r / 2;
      p.x += Math.sin(0.5) * 2;
      if (p.y > H) p.y = -10;
    });
  }

  setInterval(draw, 20);
}
