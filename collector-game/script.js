let gameActive = true;
console.log("JS is running");

// Starting conditions for the game
let score = 0;
let lives = 3;
let currentItem = null;
let timeLeft = 30;
let timerId = null;
let CompostCount = 0;
let RecyclingCount = 0;
let TrashCount = 0;

document.getElementbyId("game-over").style.display = "none";
document.getElementById("timer").style.display = "none";

// Making Sure the instructions disappear after 3 seconds
setTimeout(() => {
  document.getElementById("instructions").style.display = "none";
  startRound();
}, 3000);

const obstacles = [
  { src = "https://illustoon.com/photo/12781.png" }, 
  { src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK7XqoEW4V1E1P_HHOr3dGQDEnDeKpa0Em3Q&s" }, 
 ]

const trash = [
  { src = "Layla-game-coding/collector-game/apple core - compost.png" , type: "compost"
  src = "Layla-game-coding/collector-game/Box - recycling.png",
  src = "Layla-game-coding/collector-game/chips - trash.png", 
  src = "Layla-game-coding/collector-game/water bottle - recycling.png",
  src = "Layla-game-coding/collector-game/Banana.png", 
  src = "Layla-game-coding/collector-game/Bread.png",
  src = "Layla-game-coding/collector-game/Can.png", 
  src = "Layla-game-coding/collector-game/Cardboard.png", 
  src = "Layla-game-coding/collector-game/Newspaper.png", 
  src = "Layla-game-coding/collector-game/Envelope.png",
  src = "Layla-game-coding/collector-game/Leaves.png", 
  src = "Layla-game-coding/collector-game/Branch.png", 
  src = "Layla-game-coding/collector-game/Glass.png",
  src = "Layla-game-coding/collector-game/Styrofoam.png"
];

const characters = [
  { src: "Layla-game-coding/collector-game/BinthereCharacterRUN.gif" },
  { src: "Layla-game-coding/collector-game/BinthereCharacterJUMP.gif }
]
   
function startGame() {
  startTimer();
  gameLoop();
  spawnTrashLoop();
  spawnObstacleLoop();
}

function startTimer() {
//Instead of losing a life, what would happen is the finish line would appear 
  timerId = setInterval(() => {
    timeLeft--;
    document.getElementbyId("timer").textContext = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerId);
      gameFinished();
    }
  }, 1000);
}

function spawnTrashLoop() {
  if (!gameActive) return;

  spawnTrash();

  setTimeout(spawnTrashLoop, 2000); // every 2 sec
}

function spawnTrash() {
  const data = trash[Math.floor(Math.random() * trash.length)];

  const item = document.createElement("img");
  item.src = data.src;
  item.classList.add("trash", "moving");
  item.style.position = "absolute";
  item.style.left = "100%";
  item.style.bottom = "50px";

  document.getElementById("game-container").appendChild(item);
}

function moveObjects() {
  document.querySelectorAll(".moving").forEach(obj => {
    let currentLeft = parseInt(obj.style.left || 300);
    obj.style.left = (currentLeft - 5) + "px";
  });
}
   
  //double up arrow to jump
  //place of Jump GIF goes higher on screen if you double click 
document.addEventListener("keydown", e => {
  if (e.code === "ArrowUp") jump();
  //Test whether the character goes higher if you double click the up arrow
  if (e.code) === "ArrowDown") slide();

function isColliding(a, b) {
  const rect1 = a.getBoundingClientRect();
  const rect2 = b.getBoundingClientRect();

  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
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

function collectTrash() {
//User gains a point
  score++;
  document.getElementById("score").textContent = score;
//Trash disappears
  item.remove();
}

function assortment() {
  if itemType == "compost":
    compostCount++;
  if itemType == "recycling":
    recyclingCount++;
  if itemType == "trash":
    trashCount++;
}

function hitsObstacle(obs) {
//makes the character fall down or get upset when they run into an obstacle
  lives--;
  obs.remove();
  document.getElementById("player").classList.add("hit");
  if (lives <= 0) {
    gameFinished();
  }
}

function gameFinished() {
  clearInterval(timerId);
  gameActive = false;
  document.getElementById("game-end").style.display = "block";
  //No items show up anymore
  document.getElementById("item-container").innerHTML = "";
  //remove the score 
  document.getElementById("score").style.display = "block";
  //remove the timer
  document.getElementById("timer").style.display = "none";
  //Show the different counts
  document.getElementById("finish-line").style.display = "block";

  document.getElementById("results").innerHTML =
    Compost: ${compostCount} <br>
    Recycling: ${recyclingCount} <br>
    Trash: ${trashCount}
  //Can't interact
  document.querySelectorAll(".bin").forEach(bin => {
    bin.style.pointerEvents = "block";
  });
}

function gameOver() {
  clearInterval(timerId);
  gameActive = false;
  document.getElementbyId("game-over").style.display = "block";
  document.getElementbyId("score").style.display = "block";
  document.getElementbyId("timer").style.display = "none";
}
  
  
//finish line shows up
//Three bins show up and it shows how many points you got for each bin
//The count of the # of items in each category will show up on the bin, racking up like a slot machine or something like that
//Bit total of the items that the player has picked up will show up separately at the top
