let gameActive = true;
console.log("JS is running");

let score = 0;
let lives = 3;
let timeLeft = 30;
let timerId = null;

let compostCount = 0;
let recyclingCount = 0;
let trashCount = 0;

document.getElementById("game-over").style.display = "none";
document.getElementById("timer").style.display = "none";

// Instructions → start game
setTimeout(() => {
  document.getElementById("instructions").style.display = "none";
  startGame();
}, 3000);


const obstacles = [
  { src: "Layla-game-coding/collector-game/Obstacle1BACKDROP1.gif" }
];

const trash = [
  { src = "Layla-game-coding/collector-game/apple core - compost.png" , type: "compost",
  src = "Layla-game-coding/collector-game/Box - recycling.png", type: "recycling",
  src = "Layla-game-coding/collector-game/chips - trash.png", type: "trash",
  src = "Layla-game-coding/collector-game/water bottle - recycling.png", type: "recycling",
  src = "Layla-game-coding/collector-game/Banana.png", type: "compost",
  src = "Layla-game-coding/collector-game/Bread.png", type: "compost",
  src = "Layla-game-coding/collector-game/Can.png", type: "recycling",
  src = "Layla-game-coding/collector-game/Cardboard.png", type: "recycling",
  src = "Layla-game-coding/collector-game/Newspaper.png", type: "recycling",
  src = "Layla-game-coding/collector-game/Envelope.png", type: "recycling",
  src = "Layla-game-coding/collector-game/Leaves.png", type: "compost",
  src = "Layla-game-coding/collector-game/Branch.png", type: "compost",
  src = "Layla-game-coding/collector-game/Glass.png", type: "trash",
  src = "Layla-game-coding/collector-game/Styrofoam.png", type: "trash",
];

// --------------------
// Start game
// --------------------
function startGame() {
  document.getElementById("timer").style.display = "block";
  startTimer();
  gameLoop();
  spawnTrashLoop();
  spawnObstacleLoop();
}

// --------------------
// Timer
// --------------------
function startTimer() {
  const timerEl = document.getElementById("timer");

  timerId = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerId);
      gameFinished();
    }
  }, 1000);
}


// Game loop
function gameLoop() {
  if (!gameActive) return;

  moveObjects();
  checkCollisions();

  requestAnimationFrame(gameLoop);
}

// --------------------
// Spawn loops
// --------------------
function spawnTrashLoop() {
  if (!gameActive) return;

  spawnTrash();
  setTimeout(spawnTrashLoop, 2000);
}

function spawnObstacleLoop() {
  if (!gameActive) return;

  spawnObstacle();
  setTimeout(spawnObstacleLoop, 3000);
}

// Spawning
function spawnTrash() {
  const data = trash[Math.floor(Math.random() * trash.length)];

  const item = document.createElement("img");
  item.src = data.src;
  item.dataset.type = data.type;
  item.classList.add("trash", "moving");

  item.style.position = "absolute";
  item.style.left = "100%";
  item.style.bottom = "50px";

  document.getElementById("game-container").appendChild(item);
}

function spawnObstacle() {
  const data = obstacles[Math.floor(Math.random() * obstacles.length)];

  const obs = document.createElement("img");
  obs.src = data.src;
  obs.classList.add("obstacle", "moving");

  obs.style.position = "absolute";
  obs.style.left = "100%";
  obs.style.bottom = "50px";

  document.getElementById("game-container").appendChild(obs);
}

// Movement
function moveObjects() {
  document.querySelectorAll(".moving").forEach(obj => {
    let currentLeft = parseInt(obj.style.left) || window.innerWidth;

    currentLeft -= 5;
    obj.style.left = currentLeft + "px";
    if (currentLeft < -100) {
      obj.remove();
    }
  });
}

// Controls
document.addEventListener("keydown", e => {
  if (e.code === "ArrowUp") jump();
  if (e.code === "ArrowDown") slide();
});

function jump() {
  document.getElementById("player").style.bottom = "120px";

  setTimeout(() => {
    document.getElementById("player").style.bottom = "50px";
  }, 500);
}

function slide() {
  document.getElementById("player").style.height = "40px";

  setTimeout(() => {
    document.getElementById("player").style.height = "80px";
  }, 500);
}

// Collisions
function isColliding(a, b) {
  const r1 = a.getBoundingClientRect();
  const r2 = b.getBoundingClientRect();

  return !(
    r1.right < r2.left ||
    r1.left > r2.right ||
    r1.bottom < r2.top ||
    r1.top > r2.bottom
  );
}

function checkCollisions() {
  const player = document.getElementById("player");

  document.querySelectorAll(".trash").forEach(item => {
    if (isColliding(player, item)) {
      collectTrash(item);
    }
  });

  document.querySelectorAll(".obstacle").forEach(obs => {
    if (isColliding(player, obs)) {
      hitObstacle(obs);
    }
  });
}

// Game actions
function collectTrash(item) {
  score++;
  document.getElementById("score").textContent = score;

  const type = item.dataset.type;

  if (type === "compost") compostCount++;
  if (type === "recycling") recyclingCount++;
  if (type === "trash") trashCount++;

  item.remove();
}

function hitObstacle(obs) {
  lives--;
  obs.remove();

  document.getElementById("player").classList.add("hit");

  if (lives <= 0) {
    gameFinished();
  }
}

// End game
function gameFinished() {
  gameActive = false;
  clearInterval(timerId);

  document.getElementById("game-end").style.display = "block";

  document.getElementById("results").innerHTML = `
    Compost: ${compostCount} <br>
    Recycling: ${recyclingCount} <br>
    Trash: ${trashCount}
  `;
}
