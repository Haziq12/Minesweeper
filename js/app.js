/*-------------------------------- Constants --------------------------------*/

let column = 10
let row = 10

/*---------------------------- Variables (state) ----------------------------*/

let boardArray = []
let nonBombArray = []
let bombArray = []
let numBomb = 20
let numFlags = 0
let isWinner = false
let newCellArray = []


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
  for(let i = 0; i < ( (column*row) - numBomb); i++) {
    nonBombArray.push('safe')
  }

  // merge bombArray with nonBombArray to get full board array
  // find out how to radomize array contents 
  boardArray = nonBombArray.concat(bombArray)
  let randBoardArray = boardArray.sort(() => Math.random() - 0.5)

  // this function creates the board with 10x10 cells
function createBoardCells() {

  for (i = 0; i < column * row; i++) {
    const newCell = document.createElement("div")
    newCell.setAttribute("id", i);
    newCell.classList.add(randBoardArray[i])
    boardCells.appendChild(newCell);
    newCellArray.push(newCell) 
    newCell.addEventListener('click', handleClick)
  }
    
  }
  createBoardCells()
}
  

function handleClick(evt) {
  if(evt.target.className === 'bomb') {
  console.log('bomb clicked') }
}


// Get class name on object
// console.log(newCell.className)


// ! DID NOT WORK 
// function randomArray() {
//   let currentIndex = boardArray.length - 1
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