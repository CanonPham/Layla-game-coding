document.getElementbyId("game-over").style.display = "none";

const obstacles = [
  src = "https://illustoon.com/photo/12781.png", 
  src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK7XqoEW4V1E1P_HHOr3dGQDEnDeKpa0Em3Q&s", 
 ]

const trash = [
  src = "Item Images/apple core - compost.png", 
  src = "Item Images/Box - recycling.png",
  src = "Item Images/chips - trash.png", 
  src = "Item Images/water bottle - recycling.png",
  src = "Item Images/Banana.png", 
  src = "Item Images/Bread.png",
  src = "Item Images/Can.png", 
  src = "Item Images/Cardboard.png", 
  src = "Item Images/Newspaper.png", 
  src = "Item Images/Envelope.png",
  src = "Item Images/Leaves.png", 
  src = "Item Images/Branch.png", 
  src = "Item Images/Glass.png",
  src = "Item Images/Styrofoam.png"
];

instructionsTimer = 3;

document.getElementbyId("intro-text").style.display = "block";
function instructionsTimer() {
  if (instructionsTimer > 0)
    instructionsTimer -= 1;
    setTimeout(instructionsTimer, 3000); 
}
document.getElementbyId("intro-text").style.display = "none";

let score = 0;
let timeLeft = 30;
function startRound() {
  document.getElementbyId("game-over").style.display = "none";
  spawnObstacle();
  //is there a way to make obstacle show up more or less frequently (like every 2 seconds, for instance)
  spawnTrash();
}

function startTimer()
//Instead of losing a life, what would happen is the finish line would appear 
   
function jump()

function slideUnder()

function collectTrash()
//User gains a point
//Trash disappears
//New trash spawn

function hitsObstacle()
//makes the character fall down or get upset when they run into an obstacle

function gameFinished()
//Shows score
//finish line shows up
//Three bins show up and it shows how many many points you got for each bin
