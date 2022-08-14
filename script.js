const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");
const player1 = document.getElementById("player-1");
const computer = document.getElementById("computer");
const winner = document.getElementById("winner");
const score1 = document.getElementById("score-1");
const score2 = document.getElementById("score-2");
const playagain = document.querySelector(".playagain");

let Player1 = 0;
let Computer = 0;


//Helper Functions
const condition = function (Player1, Computer) {
  if (Player1 == 5 || Computer == 5) {
    document.getElementById("container").classList.add("hidden");
    document.getElementById("end").classList.remove("game");
  }
};
const start = function () {
    document.getElementById("container").classList.remove("hidden");
    document.getElementById("end").classList.add("game");
    score1.innerHTML=0;
    score2.innerHTML=0;
    winner.innerHTML=0;
    Player1=0;
    Computer=0;

};
const random = function () {
const randomNumber = Math.floor(Math.random() * 3 + 1);
computer.src = `images/image-${randomNumber}.png`;
return randomNumber;
};


//Event listeners of all the buttons
btnRock.addEventListener("click", function () {
  player1.src = "images/image-1.png";
  const value = random();
  if (value == 1) {
    winner.innerHTML = "Tie";
  } else if (value == 2) {
    winner.innerHTML = "Computer Wins";
    score2.innerHTML = ++Computer;
  } else if (value == 3) {
    winner.innerHTML = "Player 1 Wins";
    score1.innerHTML = ++Player1;
  }
  condition(Player1, Computer);
});

btnPaper.addEventListener("click", function () {
  player1.src = "images/image-2.png";
  const value = random();
  if (value == 2) {
    winner.innerHTML = "Tie";
  } else if (value == 3) {
    winner.innerHTML = "Computer Wins";
    score2.innerHTML = ++Computer;
  } else if (value == 1) {
    winner.innerHTML = "Player 1 Wins";
    score1.innerHTML = ++Player1;
  }
  condition(Player1, Computer);
});

btnScissors.addEventListener("click", function () {
  player1.src = "images/image-3.png";
  const value = random();
  if (value == 3) {
    winner.innerHTML = "Tie";
  } else if (value == 1) {
    winner.innerHTML = "Computer Wins";
    score2.innerHTML = ++Computer;
  } else if (value == 2) {
    winner.innerHTML = "Player 1 Wins";
    score1.innerHTML = ++Player1;
  }
  condition(Player1, Computer);
});

playagain.addEventListener('click',start);