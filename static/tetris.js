const scale = window.devicePixelRatio
const ROWS = 20
const COLS = 15
const cellSize = 32 * scale
const borderSize = 2
let score = 0
let killedRowCounter = 0
let level = 1
const canvas = document.querySelector('.tetris')
const ctx = canvas.getContext('2d')
const wrapper = document.querySelector('.canvas-wrapper')
let H = document.documentElement.offsetHeight / rem(2)
let R = H - Math.floor(H)
//wrapper.style.top = `-${rem(2) - rem(R)}px`
console.log(rem(R))

let counter = 0
let fps = 24
let speed = 2000
let lastPos = { x: 0, y: 0 }
let lastTime = 0
let lastCells = [[]]
let playing, gameExists, game

/*
HELPER FUNCTIONS
*/

function rem(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
}

function createBoard(rows, cols) {
  return Array.from({ length: rows }, () => {
    return Array.from({ length: cols }, () => 0)
  })
}

function drawBoard(board, ctx) {
  board.forEach((row, rIndex) => {
    row.forEach((cell, cIndex) => {
      ctx.fillStyle = cell ? colours[cell - 1] : '#D9DAD2'
      ctx.strokeStyle = 'black'
      ctx.lineWidth = borderSize
      const coords = [cIndex * cellSize, rIndex * cellSize, cellSize, cellSize]
      ctx.fillRect(...coords)
      ctx.strokeRect(...coords)
    })
  })
}

function clearFilledRowsAndUpdateScore(board) {
  const remaining = board.filter(rows => rows.some(cell => cell === 0))
  const killedRows = board.length - remaining.length
  killedRowCounter += killedRows
  if (killedRowCounter && killedRowCounter % 10 === 0) {
    level++
  }
  console.log(killedRowCounter, level, killedRows)
  score += level * 100 * killedRows
  playBtn.innerText = `${score}`
  const newRows = createBoard(killedRows, COLS)
  return [...newRows, ...remaining]
}

function insertTet(tet, board, yPos, xPos) {
  for (let i = 0; i < tet.length; i++) {
    for (let j = 0; j < tet[i].length; j++) {
      board[yPos + i][xPos + j] = tet[i][j]
        ? tet[i][j]
        : board[yPos + i][xPos + j]
    }
  }
}

function removeTet(tet, board, yPos, xPos) {
  for (let i = 0; i < tet.length; i++) {
    for (let j = 0; j < tet[i].length; j++) {
      board[yPos + i][xPos + j] = tet[i][j] ? 0 : board[yPos + i][xPos + j]
    }
  }
}

/*
TETS
*/

const zTet = [
  [1, 1, 0],
  [0, 1, 1],
  [0, 0, 0],
]

const sTet = [
  [0, 2, 2],
  [2, 2, 0],
  [0, 0, 0],
]

const iTet = [
  [0, 3, 0, 0],
  [0, 3, 0, 0],
  [0, 3, 0, 0],
  [0, 3, 0, 0],
]

const lTet = [
  [4, 0, 0],
  [4, 0, 0],
  [4, 4, 0],
]

const jTet = [
  [0, 0, 5],
  [0, 0, 5],
  [0, 5, 5],
]

const oTet = [
  [6, 6],
  [6, 6],
]

const tTet = [
  [0, 7, 0],
  [7, 7, 7],
  [0, 0, 0],
]

const colours = [
  '#F0B408',
  '#F0B408',
  '#E84540',
  '#015EAC',
  '#00822A',
  '#00822A',
  '#015EAC',
]

const tetTypes = {
  zTet,
  sTet,
  iTet,
  lTet,
  oTet,
  tTet,
  jTet,
}

class Tet {
  constructor(cells, x, y) {
    this.cells = cells
    this.pos = { x, y }
    this.active = true
  }

  rotate() {
    const newCells = []
    for (let i = 0; i < this.cells.length; i++) {
      newCells[i] = []
      for (let j = 0; j < this.cells[i].length; j++) {
        newCells[i][j] = this.cells[this.cells.length - 1 - j][i]
      }
    }
    this.cells = newCells
  }

  move(e) {
    switch (e.key) {
      case 'ArrowLeft': {
        e.preventDefault()
        this.pos.x--
        break
      }
      case 'ArrowRight': {
        e.preventDefault()
        this.pos.x++
        break
      }
      case 'ArrowUp': {
        e.preventDefault()
        this.rotate()
        break
      }
      case 'ArrowDown': {
        e.preventDefault()
        if (this.pos.y + this.cells.length < ROWS) {
          this.pos.y++
        }
        break
      }
    }
  }

  freeze(board) {
    const { x, y } = this.pos
    this.cells.forEach((row, rIndex) => {
      row.forEach((cell, cIndex) => {
        if (cell && (y + rIndex >= ROWS || board[y + rIndex][x + cIndex])) {
          this.active = false
          return
        }
      })
    })
  }
}

function canMoveHorizontally(tet, board) {
  const { cells, pos } = tet
  const { x, y } = pos

  return !cells.some((row, rIndex) => {
    return row.some((cell, cIndex) => {
      if (
        (cell && x + cIndex >= COLS) ||
        (cell && x + cIndex < 0) ||
        (cell && board[rIndex + y][cIndex + x])
      ) {
        return true
      }
    })
  })
}
let tet = null
function render(game, tet, time) {
  if (!tet) {
    let array = Object.values(tetTypes)
    let type = array[Math.floor(Math.random() * array.length)]
    let x = Math.floor((COLS - type.length) / 2)
    tet = new Tet(type, x, 0)
    lastPos = { x, y: 0 }
    addEventListener('keydown', e => tet.move.bind(tet)(e)) // WTF
  }

  const { board, ctx } = game
  const { pos } = tet

  if (time - lastTime > 1000 / fps) {
    counter++
    if (counter === (fps * speed) / 1000) {
      counter = 0
      if (tet && tet.active) {
        pos.y++
      } else {
        tet = null
      }
    }
    prevTime = time
  }

  removeTet(lastCells, board, lastPos.y, lastPos.x)

  const canMove = canMoveHorizontally(tet, board)

  if (!canMove) {
    pos.x = lastPos.x
    tet.cells = lastCells
  }

  if (pos.y > lastPos.y) {
    pos.y = lastPos.y + 1
  }

  tet.freeze(board)

  if (tet.active) {
    insertTet(tet.cells, board, pos.y, pos.x)

    drawBoard(board, ctx)
    lastPos = Object.assign({}, pos)
    lastCells = [].concat(tet.cells)
  } else if (lastPos.y > tet.cells.length - 1) {
    insertTet(tet.cells, board, lastPos.y, lastPos.x)
    game.board = clearFilledRowsAndUpdateScore(board)
    drawBoard(game.board, ctx)
    tet = null
  } else {
    insertTet(lastCells, board, lastPos.y, lastPos.x)
    const last = tet.cells
      .filter(row => !row.every(cell => !cell))
      .slice(-lastPos.y)
    insertTet(last, board, 0, pos.x)
    drawBoard(game.board, ctx)
    gameExists = false
    playBtn.addEventListener('click', toggle)
    playBtn.innerText = 'RESTART'
    //game.field = generateField(ROWS + 4, COLS)
    tet = null
    playing = false
  }

  if (playing) {
    requestAnimationFrame(time => render(game, tet, time))
  }
}

init = e => {
  canvas.width = canvas.parentNode.offsetWidth * scale
  canvas.height = canvas.parentNode.offsetHeight * scale
  playing = true
  let WIDTH = canvas.width
  let HEIGHT = canvas.height
  game = {
    ctx,
    board: createBoard(ROWS + 4, COLS),
  }

  render(game)
}

const playBtn = document.querySelector('.tetris-button')
playBtn.addEventListener('click', toggle)

function toggle(e) {
  if (!gameExists) {
    init()
    e.target.innerText = `${score}`
    gameExists = true
    playing = true
    playBtn.removeEventListener('click', toggle)
  }
}
