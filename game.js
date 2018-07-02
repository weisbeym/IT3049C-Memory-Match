"use strict";

let countDown;
let timeLoss;
let scoreIncrementer;
let flippedCards;
const score = document.getElementsByClassName('score')[0];
const timer = document.getElementsByClassName('timer')[0];
const gameOver = document.getElementsByClassName('game_over')[0];
const startScreen = document.querySelector(".startScreen");
const startButton = document.querySelector("#start");
const gameboard = document.querySelector(".gameboard");

function drawBoard() {
  // draw an empty board on the press of the start button or the reset button.
  const card = document.getElementsByClassName('card');
  const images = ["url('images/zap.png')", "url('images/pow.png')", "url('images/kapow.png')"];

  // reset/create empty game fields 
  timeLoss = 119;
  scoreIncrementer = 0;
  flippedCards = [];

  //display the board and hide the endgame/start screens
  // check if game over is hidden if not make it so
  if(gameOver.classList.contains("hidden")) {
    return;
  } else {
    gameOver.classList.add("hidden");
  }
  
  // make the start screen hidden
  startScreen.classList.add("hidden");

  //make the board visible 
  gameboard.classList.remove("hidden");

  // shuffle the order of the images
  shuffle(images);

  //place the images by the cards 
  for(let i = 0; i < card.length; i++) {
    if(card[i].classList.contains("flipped")) {
      card[i].classList.toggle("flipped");
    }
    card[i].querySelector('.back').style.backgroundImage = images[i];
    card[i].addEventListener('click', flip);
  }

  score.innerText = "00";
  startTimer();
}

function flip() {
  if(!this.classList.contains("flipped") && flippedCards < 2) {
    this.classList.toggle("flipped");
    flippedCards.push(this);

    if(flippedCards.length === 2) {
      checkMatch();
    }
  }
}

function checkMatch() {
  if(flippedCards[0].querySelector(".back").style.backgroundImage === flippedCards[1].querySelector(".back").style.backgroundImage) {
    flippedCards =[];
    score.innerText = "0" + ++scoreIncrementer;
  } else {
    setTimeout(flipBack, 1500);
  }
}

function flipBack() {
  flippedCards[0].classList.toggle("flipped");
  flippedCards[1].classList.toggle("flipped");
  flippedCards = [];
}

function startTimer() {
  timer.innerText = '2:00';
  countDown = setInterval(decrementTime, 2000);
}

function decrementTime() {
  if(timeLoss === 0) {
    timer.innerText = "0:0" +  timeLoss;
    clearInterval(countDown);
    finalize();
  }

  if(timeLoss < 10) {
    timer.innerText = "0:0" + timeLoss;
  }

  if(timeLoss >= 10) {
    timer.innerText = "0:" + timeLoss;
  }

  if (scoreIncrementer === 8){
    clearInterval(countDown);
    finalize();
  }

  timeLoss--;
}

function finalize() {
  const restart = document.getElementsByTagName("button")[0];
  restart.addEventListener("click", drawBoard);

  gameOver.style.display = "flex";

  if (scoreIncrementer === 8) {
    gameOver.querySelector('h1').innerText = 'you win';
  }
  else {
    gameOver.querySelector('h1').innerText = 'you lose';
  }

  gameOver.querySelector('.final_score').innerText = 'score: ' + scoreIncrementer;
  gameOver.querySelector('.time').innerText = 'time left: ' + timeLoss + ' sec.';
}

function shuffle(array) {
  for(let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

startButton.addEventListener("click", function() {
  startScreen.classList.add("hidden");
  drawBoard();
})

drawBoard();