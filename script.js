// User & Computer Score
let userScore = 0;
let CompScore = 0;

// DOM Select Msg & Other0..
const choices = document.querySelectorAll(".choice");
const userScoreDisplay = document.getElementById("user-score");
const compScoreDisplay = document.getElementById("comp-score");
const msg = document.querySelector(".msg");

// Computer Choice Function
const computerChoice = () => {
   const nameArr = ["rock", "paper", "seissors"];
   const randomComp = Math.floor(Math.random() * nameArr.length);
   return nameArr[randomComp];
};

// Check Winner Function
const checkWinner = (userWin) => {
   if (userWin) {
      userScore++;
      userScoreDisplay.textContent = userScore;
      msg.textContent = "You Win!";
      msg.style.background = "green";
   } else {
      CompScore++;
      compScoreDisplay.textContent = CompScore;
      msg.textContent = "You Lose!";
      msg.style.background = "red";
   }
};

// GamePlay Function
const gameplay = (userChoice) => {
   const compChoice = computerChoice();

   if (userChoice === compChoice) {
      gameDraw();
   } else {
      let userWin = true;
      if (userChoice === "rock") {
         // paper Seissors
         userWin = compChoice === "paper" ? false : true;
      }
      if (userChoice === "paper") {
         // rock Seissors
         userWin = compChoice === "seissors" ? false : true;
      } else {
         // rock paper
         userWin = compChoice === "rock" ? false : true;
      }
      checkWinner(userWin);
   }
};

// Game Was Draw Function
const gameDraw = () => {
   msg.textContent = "Game Was Draw. Play Again.";
   msg.style.background = "#081b31";
};

choices.forEach((choice) => {
   choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      gameplay(userChoice);
   });
});
