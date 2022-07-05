'use strict';

const checkBtn = document.querySelector('.check');
const scoreHTML = document.querySelector('.score');
const highScoreHTML = document.querySelector('.highscore');
let highScore = 0;
let score = 20;
const playAgainBtn = document.querySelector('.again');
const showSecretNumber = document.querySelector('.number');

// Helper methods
const randomNumber = function () {
  let randNum = Math.trunc(Math.random() * 20) + 1;
  return randNum;
};

const sendMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const changeCssStyleWinner = function () {
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
};

let secretNumber = randomNumber();

// document.querySelector('.number').textContent = secretNumber; // temporary here
// console.log(secretNumber, typeof secretNumber); // temporary here

checkBtn.addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);

  // When there is no input Or guessNumber not in range of 1-20
  if (!guessNumber || guessNumber > 20 || guessNumber < 1) {
    sendMessage('No Number Selected Or not in Range input!');
    // When guess is correct
  } else if (secretNumber === guessNumber) {
    sendMessage('Correct!');
    changeCssStyleWinner();
    showSecretNumber.textContent = secretNumber;

    // HighScore
    if (highScore < score) {
      highScore = score;
      highScoreHTML.textContent = highScore;
    }

    //When guess is wrong
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      sendMessage(guessNumber > secretNumber ? 'Too High!' : 'Too Low!');
      score--;
      scoreHTML.textContent = score;
    } else {
      sendMessage('You lost the Game!');
      scoreHTML.textContent = 0;
    }
  }
});

// Play again(restart game) Button
playAgainBtn.addEventListener('click', function () {
  secretNumber = randomNumber();
  score = 20;

  sendMessage('Start guessing...');
  scoreHTML.textContent = score;
  let guessNumber = (document.querySelector('.guess').value = '');
  showSecretNumber.textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '20rem';
});
