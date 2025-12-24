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
  const name = "Kashish";

  document.getElementById("personalText").innerText =
    `Hey ${name} 🎄 Something special for you`;

  document.getElementById("finalName").innerText =
    `Merry Christmas ${name} ❤️`;

  fullMessage = `
This Christmas, I just want you to know how incredibly special you are to me.

You are not just a name or a moment in my life — you are someone who brings warmth,
happiness, and meaning into my days.

I may not always say everything perfectly, but I want you to know this from the
bottom of my heart: I am here for you, and I will always stand by you — no matter what.

For now, this little website is all I could create for you as a Christmas gift.
Your real gift is still pending… and I promise, it will be worth the wait.

Kashish, you are incredibly pretty — not just by the way you look, but by the way
you think, feel, and care. You are strong, even on the days you don’t realize it.

Please always keep smiling, keep believing in yourself, and keep being the beautiful
person that you are. I hope you never forget how amazing you truly are — because I see
it every single day.

No matter where life takes us, you’ll always have someone who cares for you deeply
and wishes you happiness, peace, and endless reasons to smile.

Merry Christmas once again ❤️
  `;

  document.getElementById("step1").classList.add("hidden");
  document.getElementById("step2").classList.remove("hidden");
}
function openMessage() {
  document.getElementById("step2").classList.add("hidden");
  document.getElementById("step3").classList.remove("hidden");

  typeText();

  for (let i = 0; i < 6; i++) {
    setTimeout(createFirework, i * 300);
  }
}

/* Typing animation */
function typeText() {
  const container = document.getElementById("typingText");
  const cursor = document.getElementById("cursor");
  container.innerHTML = "";
  container.appendChild(cursor);

  let i = 0;

  function typing() {
    if (i < fullMessage.length) {
      const char = fullMessage.charAt(i);

      if (char === "\n") {
        container.insertBefore(document.createElement("br"), cursor);
        container.insertBefore(document.createElement("br"), cursor);
      } else {
        container.insertBefore(document.createTextNode(char), cursor);
      }

      i++;
      setTimeout(typing, 70); // ⏳ slow typing speed
    }
  }

  typing();
}
function createFlower() {
  const flower = document.createElement("div");
  flower.className = "flower";
  flower.innerText = ["🌸","🌼","🌺","💮"][Math.floor(Math.random()*4)];
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = 8 + Math.random() * 5 + "s";
  document.body.appendChild(flower);

  setTimeout(() => flower.remove(), 13000);
}

setInterval(createFlower, 800);

