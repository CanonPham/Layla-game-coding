let gameActive = true;
console.log("JS is running");

// Starting conditions for the game
let score = 0;
let lives = 3;
let currentItem = null;
let timeLeft = 30;
let timerId = null;

document.getElementbyId("game-over").style.display = "none";
document.getElementById("timer").style.display = "none";

// Making Sure the instructions disappear after 3 seconds
setTimeout(() => {
  document.getElementById("instructions").style.display = "none";
  startRound();
}, 3000);

const obstacles = [
  src = "https://illustoon.com/photo/12781.png", 
  src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK7XqoEW4V1E1P_HHOr3dGQDEnDeKpa0Em3Q&s", 
 ]

const trash = [
  src = "Layla-game-coding/collector-game/apple core - compost.png", 
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
  {src: "Layla-game-coding/collector-game/BinthereCharacterRUN.gif"},
  {src: "Layla-game-coding/collector-game/BinthereCharacterJUMP.gif}
]
   

function startRound() {
  if (!gameActive) return;

  clearInterval(timerId);

  const timerEl = document.getElementById("timer");
  timerEl.style.display = "block";
  timerEl.style.color = "black";
  timerEl.textContent = timeLeft;

  remove
  spawnObstacle();
  //is there a way to make obstacle show up more or less frequently (like every 2 seconds, for instance)
  spawnTrash();
}

function startTimer()
//Instead of losing a life, what would happen is the finish line would appear 
   
function jump() {
  
}

function slideUnder()

function collectTrash() {
//User gains a point
  score++;
  document.getElementById("score").textContent = score;
//Trash disappears
  document.getElementById("item-container").style.display = "none";
//New trash spawn
  spawnTrash();
}

function hitsObstacle()
//makes the character fall down or get upset when they run into an obstacle

function gameFinished() {
  clearInterval(timerId);
  gameActive = false;
  document.getElementById("game-end").style.display = "block";
  //No items show up anymore
  document.getElementById("item-container").innerHTML = "";
  //remove the score 
  document.getElementById("score").style.display = "none";
  //remove the timer
  document.getElementById("timer").style.display = "none";
  //Show the red x
  document.getElementById("red-x").style.display = "block";
  //Can't interact
  document.querySelectorAll(".bin").forEach(bin => {
    bin.style.pointerEvents = "none";
  });
}
//finish line shows up
//Three bins show up and it shows how many many points you got for each bin
