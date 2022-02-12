/*-------------------------------- Constants --------------------------------*/

const column_row = 10


/*---------------------------- Variables (state) ----------------------------*/

let bombArray = []
let numBomb = 20
let numFlags = 0
let isWinner = false
let cellsArray = []



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
    cellsArray.push('safe')
  }

  // 

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
