// These file will hold all of the user interactions

// =========These file will only hold the functions and functions helper for the game

/* 
================================================================================================

Constanss Variable
================================================================================================
*/

const mainArrayNumber = [5, 2, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0];

const sumMainArray = mainArrayNumber.reduce((acc, num) => {
  acc = acc + num;
  return acc;
}, 0);


//The sumMainArray Count all the element inside the array and return 48,
//These value is important to create the recursion call for ending the game.

/* 
================================================================================================

States Variable
================================================================================================
*/
//The value of these score will keep updating based on the value inside the arraysAtindex[7] and [14]
let player1Score = 0;
let player2Score = 0;
let indexUser;

// let remaindsScore = sumMainArray; //Setting the remaind score to sum of the element inside tthe array UNSURE IF THESE THE Aproach i will take
// console.log(sumMainArray)
/* 
================================================================================================
Adding eventlister, (these will add at the end for now)
================================================================================================
*/

const buttoms = document.querySelector("section.firstSection  div");
let player1ScoreBox = document.querySelector("#player1S");
let player2ScoreBox = document.querySelector("#player2S");
let remaindMarbles = document.querySelector("#remaindsMable");
let startPlaying = document.querySelector("#playThegame");
let clickMe = document.querySelector(".btn");
let displayMessage = document.querySelector("#message");


buttoms.addEventListener("click", handlerEvent);
startPlaying.addEventListener("click", init);
init();

/* 
================================================================================================
                  Init function 

================================================================================================
*/

function init(e) {
  displayMessage.innerHTML = "Player one turn";
  remaindMarbles.innerHTML = sumMainArray;
  player1ScoreBox.innerHTML = 0;
  player2ScoreBox.innerHTML = 0;

 
}

/* 

================================================================================================

          RENDER FUNCTION
================================================================================================
*/

function render() {
  mainArrayNumber.forEach((num) => {
    const newBtn = document.querySelector("button");
    buttoms.appendChild(newBtn);
    console.log(newBtn);
    return (newBtn.innerHTML = num);
  });


  // gameOver();
  // winner();
  // scores();
  render();
  
}

function handlerEvent(e) {
  console.log(e.target.id);
  indexUser = e.target.id;
  const arrayPositionTofill = mainArrayNumber[indexUser];
  mainArrayNumber[indexUser] = 0;
  mancalaAdd(mainArrayNumber, indexUser - 1, arrayPositionTofill);
  

  render()
}

//Thesee function add the initial value of the array to the buttoms.

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

function scores() {
  if (mainArrayNumber[6] > 0) {
    return (player1Score = mainArrayNumber[6]);
  }

  if (mainArrayNumber[14] > 0) {
    return (player2Score = mainArrayNumber[14]);
  }
}

function gameOver() {
  //Tried to see if you can create a range function becuase these think look so ugly

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
      mainArrayNumber[12];
    console.log(player2Score);
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
      mainArrayNumber[5];
    console.log(player1Score);
    return player1Score;
  }
}

function winner() {
  if (player1Score > player2Score) {
    displayMessage.innerHTML = `player 1 is the winner with a score of ${player1Score}`;
    return displayMessage;
  }
  if (player2Score > player1Score) {
    displayMessage.innerHTML = `player 2 is the winner with a score of ${player2Score}`;
    return displayMessage;
  } else {
    displayMessage.innerHTML = "Tied Game";
  }
}


