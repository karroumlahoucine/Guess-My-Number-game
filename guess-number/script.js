'use strict';

let Element = document.querySelector('.check');

let secretNum = Math.trunc(Math.random() * 20 + 1);

let score = 20;

let highScore = 0;

function displayedMessage(message) {
  document.querySelector('.message').textContent = message;
}

//event hendler
function clicked() {
  const num = Number(document.querySelector('.guess').value);

  if (!num) {
    displayedMessage('No number ⛔️!');
  } else if (num == secretNum) {
    displayedMessage('Correct Number 😋');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNum;
    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
      highScore = score;
    }
  } else if (num != secretNum && score > 0) {
    score--;
    document.querySelector('.score').textContent = score;
    if (num > secretNum) {
      displayedMessage('Too high📈!');
    } else {
      displayedMessage('Too low 📉!');
    }
  } else {
    alert('you lost again and again');
    displayedMessage('Game over ⭕!');
  }
}

Element.addEventListener('click', clicked);

const again = document.querySelector('.again');

function reset() {
  displayedMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  secretNum = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  score = 20;
}

again.addEventListener('click', reset);
