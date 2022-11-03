const score = document.querySelector(".score");
const startBtn = document.querySelector(".startBtn");
const gameArea = document.querySelector(".gameArea");
const gameMessage = document.querySelector('.gameMessage');

startBtn.addEventListener("click", start);
gameMessage.addEventListener("click", start);
document.addEventListener("keydown", pressOn);
document.addEventListener("keyup", pressOff);
let keys = {};
let bird = document.createElement("div");
let wing = document.createElement("div");
let player = {
  x: 0,
  y: 0,
  speed: 2
};

function start(){
  gameMessage.classList.add("hide");
  startBtn.classList.add("hide");
  bird.setAttribute("class", "bird");
  wing.setAttribute("class", "wing");
  bird.appendChild(wing);
  gameArea.appendChild(bird);
  player.x = bird.offsetLeft;
  player.y = bird.offsetTop;
  window.requestAnimationFrame(playGame);
}

function playGame(){
  if (keys.ArrowLeft){
    player.x -= player.speed;
  }
  if(keys.ArrowRight){
    player.x += player.speed;
  }
  if(keys.ArrowUp){
   player.y -= player.speed;
  }
  if(keys.ArrowDown){
    player.y += player.speed;
  }
  bird.style.left = player.x + "px";
  bird.style.top = player.y + "px";

  window.requestAnimationFrame(playGame);
}

function pressOn(e){
  console.log(e.code)
  keys[e.code] = true
  console.log(keys)
}

function pressOff(e){
  console.log(e.code)
  keys[e.code] = false
  console.log(keys)
}