/*-------------------------------- Constants --------------------------------*/

const column_row = 10

/*---------------------------- Variables (state) ----------------------------*/

let boardArray = []
let nonBombArray = []
let bombArray = []
let numBomb = 20
let numFlags = 0
let isWinner = false


/*------------------------ Cached Element References ------------------------*/

const boardCells = document.querySelector('.board')

const statusMessage = document.getElementById('message')

const resetButton = document.getElementById('reset')

/*----------------------------- Event Listeners -----------------------------*/




/*-------------------------------- Functions --------------------------------*/

init()

function init() {

  // this loop populates an array with bombs
  for(let i = 0; i < numBomb; i++) {
    bombArray.push('bomb')
  }
  
  
  // create array with number of cells without bombs
  for(let i = 0; i < ( (column_row*column_row) - numBomb); i++) {
    nonBombArray.push('safe')
  }

  // merge bombArray with nonBombArray to get full board array
  // find out how to radomize array contents 
  boardArray = nonBombArray.concat(bombArray)
  let randBoardArray = boardArray.sort(() => Math.random() - 0.5)
  console.log(randBoardArray)
  
  
  // this function creates the board with 10x10 cells
  function createBoardCells() {
    for (i = 0; i < column_row * column_row; i++) {
      const newCell = document.createElement("div");
      newCell.setAttribute("id", i);
      boardCells.appendChild(newCell);
    }
  }

  createBoardCells()

}





// ! DID NOT WORK 
// function randomArray() {
//   let currentIndex = boardArray.length
//   let randBoardArray = []
//   console.log(randBoardArray[2])
//   while(currentIndex != 0) {
//     if(randBoardArray[currentIndex] === undefined) {
//       let randPick = Math.floor(Math.random() * boardArray.length-1)
//       randBoardArray[currentIndex] = boardArray[randPick]
//     }
//   }
//   console.log(randBoardArray)
// }
// randomArray()