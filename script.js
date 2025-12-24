const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworks = [];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createFirework() {
  const x = random(100, canvas.width - 100);
  const y = random(100, canvas.height / 2);
  const colors = ["#ff4b5c", "#ffd93d", "#6bcB77", "#4d96ff"];

  for (let i = 0; i < 40; i++) {
    fireworks.push({
      x,
      y,
      r: 2,
      dx: random(-3, 3),
      dy: random(-3, 3),
      life: 60,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }
}

function animateFireworks() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  fireworks.forEach((p, i) => {
    p.x += p.dx;
    p.y += p.dy;
    p.life--;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();

    if (p.life <= 0) fireworks.splice(i, 1);
  });

  requestAnimationFrame(animateFireworks);
}
animateFireworks();

function goNext() {
  const name = document.getElementById("nameInput").value || "Someone Special";
  document.getElementById("personalText").innerText =
    `Hey ${name} 🎄 Something special for you`;
  document.getElementById("finalName").innerText =
    `Merry Christmas ${name} ❤️`;

  document.getElementById("step1").classList.add("hidden");
  document.getElementById("step2").classList.remove("hidden");
}

function openMessage() {
  document.getElementById("step2").classList.add("hidden");
  document.getElementById("step3").classList.remove("hidden");

  // Fireworks burst
  for (let i = 0; i < 6; i++) {
    setTimeout(createFirework, i * 300);
  }
}
