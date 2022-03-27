


const mainArrayNumber = [4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0];
const sumMainArray = mainArrayNumber.reduce((acc, num) => {
  acc = acc + num;
  return acc;
}, 0);

let player1Score = 0;
let player2Score = 0;
let indexUser;
let currentPlayer;


//Event Listener

const buttoms = document.querySelector("section.firstSection div" );
let player1ScoreBox = document.querySelector("#player1S");
let player2ScoreBox = document.querySelector("#player2S");
let changep1 = document.getElementsByClassName("player1Turn")
let remaindMarbles = document.querySelector("#remaindsMable");
let startPlaying = document.querySelector("#playThegame");
// let clickMe = document.querySelector(".btn");
let displayMessage = document.querySelector("#message");


buttoms.addEventListener("click", handlerEvent);
startPlaying.addEventListener("click", init);
render()


//init
function init(e) {

  remaindMarbles.innerHTML = sumMainArray;
  player1ScoreBox.innerHTML = player1Score;
  player2ScoreBox.innerHTML = player2Score;
  render();
  currentPlayer = true;
  turns()
}

//Render Function

function render() {
 
  mainArrayNumber.forEach((num) => {
    const newBtn = document.querySelector("button");
    buttoms.appendChild(newBtn);
    return (newBtn.innerHTML = num);
  });

}



//Event Handler
function handlerEvent(e) {
 
  indexUser = parseInt(e.target.id);
  const arrayPositionTofill = mainArrayNumber[indexUser];
  mainArrayNumber[indexUser] = 0;
  mancalaAdd(mainArrayNumber, indexUser - 1, arrayPositionTofill);
  render();
  currentPlayer = false;
  turns();
  empthyStorages();
  player1ScoreBox.innerHTML = player1Score;
  player2ScoreBox.innerHTML = player2Score;
}

//Main function, 

// recursive function to move the value; the user choose,

function mancalaAdd(arr, starPoint, position) {
  
  if (position === 0) {
    return arr;
  }
  if (starPoint < 0) {
    starPoint = arr.length - 1;
  }
  arr[starPoint] += 1;
  return mancalaAdd(arr, starPoint - 1, position - 1);
  
}

function scoresp1() {
  if (mainArrayNumber[6] > 0) {
    player1Score = mainArrayNumber[6];
    return player1Score;
  }

}

function scorep2(){
  if (mainArrayNumber[13] > 0) {
    player2Score = mainArrayNumber[13];
    return player2Score;
  }
}
// Rules goes! Here



//mancala rules 
function empthyStorages() {
  //Tried to see if you can create a range function becuase these think look so ugly
  //QuickSort ?
  if (
    mainArrayNumber[0] === 0 &&
    mainArrayNumber[1] === 0 &&
    mainArrayNumber[2] === 0 &&
    mainArrayNumber[4] === 0 &&
    mainArrayNumber[5] === 0
  ) {
    player2Score =
      mainArrayNumber[7] +
      mainArrayNumber[8] +
      mainArrayNumber[9] +
      mainArrayNumber[10] +
      mainArrayNumber[11] +
      mainArrayNumber[12] +
      mainArrayNumber[13];
      winner()
    return player2Score;
  }
  if (
    mainArrayNumber[7] === 0 &&
    mainArrayNumber[8] === 0 &&
    mainArrayNumber[9] === 0 &&
    mainArrayNumber[10] === 0 &&
    mainArrayNumber[12] === 0
  ) {
    player1Score =
      mainArrayNumber[0] +
      mainArrayNumber[1] +
      mainArrayNumber[2] +
      mainArrayNumber[3] +
      mainArrayNumber[4] +
      mainArrayNumber[5] +
      mainArrayNumber[6];
      winner()  
    return player1Score;
  }
  scoresp1();
  scorep2();


}
//Rules check if the user at the last index 
// function singleOne(){
//   if (mainArrayNumber[5] === 1) {
//     mainArrayNumber[6] = mainArrayNumber[7];
//     mainArrayNumber[7] = 0;
//     player1Score = mainArrayNumber[6];
//     return player1Score;
//   }  if (mainArrayNumber[12] === 1) {
//     mainArrayNumber[13] = mainArrayNumber[0];
//     mainArrayNumber[0] = 0;
//     player2Score = mainArrayNumber[13];
//     return player2Score;
//   }
// }

function winner() {
  if (player1Score > player2Score) {
    displayMessage.innerHTML = `player 1 is  the winner with a score of ${player1Score}`;
    return displayMessage;
  }
  if (player2Score > player1Score) {
    displayMessage.innerHTML = `player 2 is the winner with a score of ${player2Score}`;
    return displayMessage;
  } else {
    return (displayMessage.innerHTML = "Tied Game");
  }
  
}


function turns(){
  if(currentPlayer === true){  
    return displayMessage.innerHTML = "Player One turn"
  }
  if(currentPlayer === false){
    return displayMessage.innerHTML = "Player Two turn"
  }
}


 
 





