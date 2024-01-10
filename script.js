'use strict';
/*practices
// console.log(document.querySelector('.message'));
// document.querySelector('.message').textContent = '🎉 Correct Number :)';
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess);
});
//let guess = Number(document.querySelector('.guess').value);
  let numberGuess = 26;
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  }
  if (guess == numberGuess) {
    document.querySelector('.message').textContent = 'Correct Number :)';
  }
  if (guess < numberGuess && guess) {
    document.querySelector('.message').textContent = 'Number Low!';
  }
  if (guess > numberGuess) {
    document.querySelector('.message').textContent = 'Number High!';
  }//
practices;*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  //if there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number!';
    //if the number is correct
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //if the number is high
  } else if (guess > secretNumber) {
    //if the score is above 1
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
      //if the score is over
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    //if the number is low
  } else if (guess < secretNumber) {
    //if the score is above 1
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
      //if the score is over
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
      score--;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').value = secretNumber =
    Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  score = 20;
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';

  // document.querySelector('.number').textContent = secretNumber;
});
