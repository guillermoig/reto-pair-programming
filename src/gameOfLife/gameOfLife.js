export default function gameOfLife( initialState ) {
    const board = new Board(initialState);
    return board.next()
}

class Cell {
  constructor({ state, neightbors }) {
    this.state = state;
    this.neightborsCount = neightbors.length;
  }

  isAlive() {
    return this.state === 1
  }

  next() {
    const shouldBeLife = this.isAlive() && this.neightborsCount ===  3 
      || this.isAlive() && this.neightborsCount ===  2
      || !this.isAlive() && this.neightborsCount ===  3

    this.state = shouldBeLife ? 1 : 0    
  }

  render() {
    return this.state
  }
}


class Board {
  constructor(board) {
    this.board = board.map((row, y) => {
      return row.map((state, x) => {
          const neightbors = getNeighborsLife({ x, y }, board);
          return new Cell({ state, neightbors })
      }) 
    })
  }

  next() {
    for (let y = 0; y < this.board.length; y++){
      for (let x = 0; x < this.board.length; x++){
        const cell = this.board[y][x]
        cell.next()
      }
    }

    return this.board.map((row) => {
      return row.map((cell) => {
          return cell.render()
      }) 
    })
  }
}


const getNeighborsLife = ({ x, y }, board) => {
  const topLeft = board[y-1]?.[x-1]
  const topCenter = board[y-1]?.[x]
  const topRight = board[y-1]?.[x+1]
  const centerLeft = board[y]?.[x-1]
  const centerRight = board[y]?.[x+1]
  const bottomLeft = board[y+1]?.[x-1]
  const bottomCenter = board[y+1]?.[x]
  const bottomRight = board[y+1]?.[x+1]

  return [
      topLeft,
      topCenter,
      topRight,
      centerLeft,
      centerRight,
      bottomLeft,
      bottomCenter,
      bottomRight
  ].filter(Boolean)
}