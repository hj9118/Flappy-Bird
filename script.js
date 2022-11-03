const score = document.querySelector('.score');
const startBtn = document.querySelector('.startBtn');
const gameArea = document.querySelector('.gameArea');
const gameMessage = document.querySelector('.gameMessage');

startBtn.addEventListener('click', start);
gameMessage.addEventListener('click', start);
document.addEventListener('keydown', pressOn);
document.addEventListener('keyup', pressOff);
let keys = {};
let player = {
  x: 0,
  y: 0,
  speed: 2,
  score: 0,
  isplay: false,
};

function start() {
  player.isplay = true;
  player.score = 0;
  gameArea.innerHTML = "";
  gameMessage.classList.add('hide');
  startBtn.classList.add('hide');
  let bird = document.createElement('div');
  let wing = document.createElement('div');
  bird.setAttribute('class', 'bird');
  wing.setAttribute('class', 'wing');
  wing.pos = 15;
  wing.style.top = wing.pos + 'px';
  bird.appendChild(wing);
  gameArea.appendChild(bird);
  player.x = bird.offsetLeft;
  player.y = bird.offsetTop;
  window.requestAnimationFrame(playGame);
}

function playGame() {
  if (player.isplay) {
    let bird = document.querySelector('.bird');
    let wing = document.querySelector('.wing');
    let move = false;

    if (keys.ArrowLeft && player.x > 0) {
      player.x -= player.speed;
      move = true;
    }
    if (keys.ArrowRight && player.x < gameArea.offsetWidth - bird.offsetWidth) {
      player.x += player.speed;
      move = true;
    }
    if ((keys.ArrowUp || keys.Space) && player.y > 0) {
      player.y -= player.speed * 3;
      move = true;
    }
    if (
      keys.ArrowDown &&
      player.y < gameArea.offsetHeight - bird.offsetHeight
    ) {
      player.y += player.speed;
      move = true;
    }

    if (move) {
      wing.pos = wing.pos === 15 ? 25 : 15;
      wing.style.top = wing.pos + 'px';
    }

    player.y += player.speed * 2;
    if (player.y > gameArea.offsetHeight) {
      playGameOver();
    }

    bird.style.left = player.x + 'px';
    bird.style.top = player.y + 'px';

    window.requestAnimationFrame(playGame);
    player.score++;
    score.innerText = 'SCORE : ' + player.score;
  }
}

function playGameOver() {
  player.isplay = false;
  gameMessage.classList.remove('hide');
  gameMessage.innerHTML = `Game Over <br/> 당신의 점수는 ${player.score}점 입니다 <br/> 다시 시작하려면 여기를 누르세요.`;
}

function pressOn(e) {
  console.log(e.code);
  keys[e.code] = true;
  console.log(keys);
}

function pressOff(e) {
  console.log(e.code);
  keys[e.code] = false;
  console.log(keys);
}
