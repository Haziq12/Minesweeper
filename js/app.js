/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let isWinner = null
let columns = 10
let rows = 10
let squares = []


/*------------------------ Cached Element References ------------------------*/

const board = document.querySelector('.board')

const statusMessage = document.getElementById('message')

/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

newCells()

function newCells() {

  for(i = 0; i < (columns*rows); i++) {

    let newCell = document.createElement('div')
    newCell.setAttribute('id', i)
    board.appendChild(newCell)
    squares.push(newCell)

  }

}
