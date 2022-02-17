'use strict';
const again = document.getElementById('again');
const answerNum = document.getElementById('answerNum');
const input = document.getElementById('input');
const checkBtn = document.getElementById('checkBtn');
const message = document.getElementById('message');
const scoreDisplay = document.getElementById('score');
const highScore = document.getElementById('highScore');

let score = 20;
scoreDisplay.textContent = score;

// * Start the game
const startGame = () => {
  const randNum = Math.floor(Math.random() * 20) + 1;
  console.log(randNum);

  checkBtn.addEventListener('click', () => {
    const enteredNum = input.value;
    if (!enteredNum) {
      message.textContent = 'No Number Entered';
    } else if (score > 0) {
      if (enteredNum > randNum) {
        message.textContent = 'Too large';
        score--;
        scoreDisplay.textContent = score;
      } else if (enteredNum < randNum) {
        message.textContent = 'Too small';
        score--;
        scoreDisplay.textContent = score;
      } else {
        message.textContent = 'Correct';
        answerNum.textContent = enteredNum;
        document.body.style.background = '#60b347';
        document.getElementById('answerNum').style.width = '30rem';
        highScore.textContent = score;
      }
    } else {
      message.textContent = 'You Lost the game';
    }
  });
};

//* reset the game
again.addEventListener('click', () => {
  resetGame();
});

const resetGame = () => {
  answerNum.textContent = '?';
  input.value = '';
  message.textContent = 'Start guessing';
  scoreDisplay.textContent = 20;
  document.body.style.background = 'black';
};

startGame();
