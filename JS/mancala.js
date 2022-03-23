// =========These file will only hold the functions and functions helper for the game

/* 
================================================================================================

Constanss Variable
================================================================================================
*/

const mainArrayNumber = [ 0, 0, 5, 3, 0, 0, 9, 9, 4, 4, 4, 4, 4];

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
let indexUser = 3;
let remaindsScore = sumMainArray;
const arrayPositionTofill = mainArrayNumber[indexUser];
mainArrayNumber[indexUser] = 0;
//Setting the remaind score to sum of the element inside tthe array UNSURE IF THESE THE Aproach i will take
/* 
================================================================================================
Adding eventlister, (these will add at the end for now)
================================================================================================
*/

console.time();

//Remember that you are calling the function here but it need to be the user input.

//these function can help me to  add the values, try to see if you can
//reduce the if/else statement, these probably need to be inside something

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



// console.log(mancalaAdd(mainArrayNumber, indexUser - 1, arrayPositionTofill));

//define turn, if is player turn allow i to add value o all the number except their
//oponentee storage.

//Assign each player the scored box

// reduce  the overall score of the array, everytime a number enter the user storagee

// end the game when the overall sum of the array is zero

//allow user only to play in their box

// choosee the winner.

function scores() {
  if (mainArrayNumber[6] > 0) {
     player1Score += mainArrayNumber[6]
    return player1Score
  }

  if (mainArrayNumber[14] > 0) {
     player2Score += mainArrayNumber[14];
     return player2Score
  }
}

scores() 
console.log(player1Score)
console.log(player2Score)
console.log(remaindsScore)


function gameOver() {
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
    //console.log(player2Score)
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
    // console.log(player1Score);
    return player1Score;
  }
}
//if the side att posittion 0 to 5 are empthy, the user recollect all the value in their side
// viceversa with player 2
//check if the arrays is now emphy.
// call the function with message for the winner

function winner() {
  if (player1Score > player2Score) {
    return `player 1 is the winner with a score of ${player1Score}`;
  } else {
    return  `player 2 is the winner with a score of ${player2Score}`;;
  }
}


function playerTurn(){

  //if player 1 turn, add a class to that element
  //else add a class to the second element 
}

console.log(gameOver());
console.log(winner());

console.log(mancalaAdd(mainArrayNumber, indexUser - 1, arrayPositionTofill))
console.timeEnd();

//=======================================================

///those function mean to be for testing putporse

// i need to add a value only as long as the array.
//I need to add a value only to the right side of an array;
