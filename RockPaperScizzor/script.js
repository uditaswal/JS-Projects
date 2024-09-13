const rockBTN = document.getElementById("rockBTN");
const paperBTN = document.getElementById("paperBTN");
const scizzorsBTN = document.getElementById("scizzorsBTN");
const userInput = document.getElementById("userInput");
const computerInput = document.getElementById("computerInput");
const result = document.getElementById("result");
const UserWinCount = document.getElementById("UserWinCount");
const UserLossCount = document.getElementById("UserLossCount");
const winStreak = document.getElementById("winStreak");

let usersChoice = "";
let computersChoice = "";
let userWins= 0;
let userLosses=0;

// Add a click event listener to each button
rockBTN.addEventListener("click", function () {
 usersChoice = "Rock";
});

paperBTN.addEventListener("click", function () {
 usersChoice = "Paper";
});

scizzorsBTN.addEventListener("click", function () {
 usersChoice = "Scizzor";
});

function game() {
  let random = Math.floor(Math.random() * 3);
  console.log("Random number: ", random);
  if (random === 0) {
    computersChoice = "Rock";
  } else if (random === 1) {
    computersChoice = "Paper";
  } else if (random === 2) {
    computersChoice = "Scizzor";
  }
  userInput.innerHTML = usersChoice;
  computerInput.innerHTML = computersChoice;

  if ( usersChoice === computersChoice) {
    result.innerHTML = "Draw";
  } else if (
     usersChoice === "Rock" && computersChoice === "Paper" ||
     usersChoice === "Paper" && computersChoice === "Scizzor" ||
     usersChoice === "Scizzor" && computersChoice === "Rock")
   {
    result.innerHTML = "You Lose!!";
    --userWins;
   }else {
    result.innerHTML = "You Win!!";
    userWins++;
  }
  if (userWins<0){
  UserWinCount.style.color="#FF0000";
  winStreak.style.color="#FF0000";

}else if (userWins>0){
  UserWinCount.style.color="#059033";
  winStreak.style.color="#059033";
}
UserWinCount.innerHTML = userWins;

}

rockBTN.onclick = game;
paperBTN.onclick = game;
scizzorsBTN.onclick = game;
