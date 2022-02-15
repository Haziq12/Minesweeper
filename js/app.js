/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let column
let row
let boardArray = []
let nonBombArray = []
let bombArray = []
let numBomb
let numFlags
let isWinner
let newCellArray = []


/*------------------------ Cached Element References ------------------------*/

const boardCells = document.querySelector('.board')

const statusMessage = document.getElementById('message')

const resetButton = document.getElementById('reset')

/*----------------------------- Event Listeners -----------------------------*/




/*-------------------------------- Functions --------------------------------*/

init()

function init() {

  column = 10
  row = 10
  isWinner = null
  numBomb = 20
  numFlags = numBomb

  statusMessage.innerText = 'Choose cells'

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

  createBoardCells(randBoardArray)
}

// this function creates the board with 10x10 cells
function createBoardCells(randBoardArray) {
  for (i = 0; i < column * row; i++) {
    const newCell = document.createElement("div")
    newCell.setAttribute("id", i);
    newCell.classList.add(randBoardArray[i])
    boardCells.appendChild(newCell);
    newCellArray.push(newCell)
    newCell.addEventListener('click', handleClick)
    newCell.addEventListener('contextmenu', rightClick) 
  }
  populateNums()
}

function populateNums() {
  for (i = 0; i < newCellArray.length; i++) {
    let bombTotal = 0
    const leftEdge = (i % row === 0)
    const rightEdge = (i % row === row - 1)
    if (newCellArray[i].className === 'safe') {
      // bomb to the left
      if (i > 0 && leftEdge === false && newCellArray[i - 1].className === 'bomb') bombTotal++
      // bomb to the right
      if (i < 98 && rightEdge === false && newCellArray[i + 1].className === 'bomb') bombTotal++
      // top right corner bomb
      if (i > 9 && rightEdge === false && newCellArray[i + 1 - row].className === 'bomb') bombTotal++
      // bomb to top left corner 
      if (i > 11 && leftEdge === false && newCellArray[i - 1 - row].className === 'bomb') bombTotal++
      // bomb to the top 
      if (i > 10 && newCellArray[i - row].className === 'bomb') bombTotal++
      // bomb directly underneath
      if (i < 89 && newCellArray[i + row].className === 'bomb') bombTotal++
      // bomb to bottom right corner
      if (i < 88 && rightEdge === false && newCellArray[i + 1 + row].className === 'bomb') bombTotal++
      // bomb to the bottom left corner
      if (i < 90 && leftEdge === false && newCellArray[i - 1 + row].className === 'bomb') bombTotal++
      newCellArray[i].setAttribute('bombTotal', bombTotal)
    }
  }
}

function handleClick(newCellArray, newCell) {
  // let index = parseInt(newCellArray.target.id)
  // console.log(typeof(index), index)
  // console.log(newCellArray.target.id)
  // if(newCellArray.target.className == 'flag') return
  if(isWinner == false) return
  if(isWinner == true) return
  if (newCellArray.target.classList.contains('bomb')) {
    renderAllBombs()
  } else {
    let adjBombs = newCellArray.target.getAttribute('bombTotal')
    if (adjBombs == 0) {
      // console.log(adjBombs)
      newCellArray.target.classList.add('clicked')
      cascadeEmptyCells(newCellArray, index)
    }
    if (adjBombs > 0) {
      newCellArray.target.classList.add('clicked')
      if (adjBombs == 1) {
        newCellArray.target.classList.add('one')       
      }
      if (adjBombs == 2) {
        newCellArray.target.classList.add('two')      
      }
      if (adjBombs == 3) {
        newCellArray.target.classList.add('three')
      }
      if (adjBombs == 4) {
        newCellArray.target.classList.add('four')
      }
      if (adjBombs == 5) {
        newCellArray.target.classList.add('five')
      }
      if (adjBombs == 6) {
        newCellArray.target.classList.add('six')
      }
      if (adjBombs == 7) {
        newCellArray.target.classList.add('seven')
      }
      if (adjBombs == 8) {
        newCellArray.target.classList.add('eight')
      }
      newCellArray.target.innerHTML = adjBombs
    }
  }
  hasWon()
}



function rightClick(newCellArray) {
  if (isWinner == false) return
  if (newCellArray.target.classList.contains('flag')) {
    newCellArray.preventDefault()
    newCellArray.target.classList.remove('flag')
    numFlags++
    if(newCellArray.target.classList.contains('bomb')) {
      newCellArray.target.classList.remove('clicked')
      newCellArray.target.innerHTML = ' '
    } else if(newCellArray.target.classList.contains('safe')) {
      newCellArray.target.classList.remove('clicked')
      newCellArray.target.innerHTML = ' '
    }
  } else if (newCellArray.target.classList.contains('clicked')) {
    return
  }
  else if (newCellArray.target.className !== 'clicked' && newCellArray.target.className !== 'flag' && numFlags > 0) {
    newCellArray.preventDefault()
    newCellArray.target.classList.add('flag')
    console.log(newCellArray.target.classList.contains('flag'))
    numFlags--
    newCellArray.target.innerHTML = '🚩'
    newCellArray.target.classList.add('clicked')
    // console.log(newCellArray.target.classList)
  } else if (numFlags == 0) {
      return
  }
  console.log(numFlags)
}

function renderAllBombs() {
  isWinner = false
  statusMessage.innerText = 'You Lost'
  newCellArray.forEach(element => {
    if(element.classList == 'bomb') {
    element.innerHTML = '💣 '
    }
  })
}

function hasWon() {
  for (let i = 0; i < newCellArray.length; i++) {
    let safe = 0
    if (newCellArray[i].classList.contains('safe') && newCellArray[i].classList.contains('clicked')) {
      safe++
    }
  }
  if(safe == 80) {
    isWinner = true
    statusMessage.innerText = 'You WON!'
  }
}

// function cascadeEmptyCells(newCellArray, index) {
//   const leftEdge = (i % row === 0)
//   const rightEdge = (i % row === row - 1)
//   const index = parseInt(newCellArray.target.id) - 1
//   console.log(index)
//   if(index > 0 && leftEdge != 0) {
//     const newIndex = newCellArray.target.id
//     const leftCell = document.getElementById(newIndex)
//     handleClick(leftCell)
//     console.log('index', index)
//     console.log('newIndex', newIndex)
//     console.log(leftCell)
//   }
// }


// function cascadeEmptyCells() {
//   const leftEdge = (i % row === 0)
//   const rightEdge = (i % row === row - 1)
//   console.log(newCellArray)
//   console.log('hi')
//   for (let i = 0; i < newCellArray.length; i++) {
//     console.log('BEFORE ADD CLASS', newCellArray[i])
//     newCellArray[i].classList.add('zero')
//     newCellArray[i].classList.add('clicked-zero')
//     console.log(newCellArray[i], 'AFTER ADD CLASS')
//     console.log(newCellArray.classList)
//     if (newCellArray[i].classList.contains('safe')) {
//       if(i < 89 && newCellArray[i + row].className === 'safe') cascadeEmptyCells(newCellArray)
//     }
//   }
// }

// function render() {
//   newCellArray
//   if(newCellArray.classList.contains('safe') = 'safe')
// }

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