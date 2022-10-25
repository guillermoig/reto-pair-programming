import Cell from "./Cell"

class Board {
    constructor(initialBoard) {
      const boarArray = initialBoard.split("\n").map(line => [...line])
      
      this.board = boarArray.map((row, y) => {
        return row.map((state, x) => {
          return new Cell( state )
        }) 
      })
      for (let y = 0; y < this.board.length; y++){
        for (let x = 0; x < this.board.length; x++){
          const cell = this.board[y][x]
          const neightbors = this.#getNeighborsLife({ x, y });
          cell.setNeighbors(neightbors)
        }
      }
    }
  
    next() {
      for (let y = 0; y < this.board.length; y++){
        for (let x = 0; x < this.board.length; x++){
          const cell = this.board[y][x]
          cell.next()
        }
      }
  
      return this.#render()
    }

    #render() {
        return this.board.map((row) => 
             row.map((cell) =>
                 cell.render()
            ).join("")
        ).join("\n")
    }
  
    #getNeighborsLife ({ x, y }) {
        const isCurrentCell = (cell) => cell.x === x && cell.y === y;

        const positions = [-1, 0, 1].map((xOffset) => {
            return [-1, 0, 1].map((yOffset) => {
                return { x: x + xOffset, y: y + yOffset }
            })
        })
        .flat()
        .filter(cell => !isCurrentCell(cell))

        return positions
            .map(({ x, y }) => this.board[y]?.[x])
            .filter((cell) =>  cell?.isAlive())

    }
  }
  
export default Board  