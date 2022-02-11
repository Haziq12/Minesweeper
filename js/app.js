/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let isWinner
let columns
let rows
let bombCount
// let squares = []


/*------------------------ Cached Element References ------------------------*/

const board = document.querySelector('.board')

const statusMessage = document.getElementById('message')

/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/


init()

function init() {

  isWinner = null
  columns = 10
  rows = 10

  function newCells() {
    for(i = 0; i < (columns*rows); i++) {
      let newCell = document.createElement('div')
      newCell.setAttribute('id', i)
      board.appendChild(newCell)
      // squares.push(newCell)
    }
  }
  newCells()
}
