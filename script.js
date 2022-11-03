const score = document.querySelector(".score");
const startBtn = document.querySelector(".startBtn");
const gameArea = document.querySelector(".gameArea");
const gameMessage = document.querySelector('.gameMessage');

startBtn.addEventListener("click", start);
gameMessage.addEventListener("click", start);
document.addEventListener("keydown", pressOn);
document.addEventListener("keyup", pressOff);

function start(){
  gameMessage.classList.add("hide");
  startBtn.classList.add("hide");
}

function pressOn(){
  console.log("on")
}

function pressOff(){
  console.log("off")
}