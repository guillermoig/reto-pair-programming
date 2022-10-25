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
          const neightbors = this.getNeighborsLife({ x, y });
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
  
      return this.board.map((row) => {
        return row.map((cell) => {
            return cell.render()
        }).join("")
      }).join("\n")
    }
  
    getNeighborsLife ({ x, y }) {
      const topLeft = this.board[y-1]?.[x-1]
      const topCenter = this.board[y-1]?.[x]
      const topRight = this.board[y-1]?.[x+1]
      const centerLeft = this.board[y]?.[x-1]
      const centerRight = this.board[y]?.[x+1]
      const bottomLeft = this.board[y+1]?.[x-1]
      const bottomCenter = this.board[y+1]?.[x]
      const bottomRight = this.board[y+1]?.[x+1]
    
      return [
          topLeft,
          topCenter,
          topRight,
          centerLeft,
          centerRight,
          bottomLeft,
          bottomCenter,
          bottomRight
      ].filter(cell => cell?.isAlive())
    }
  
  }
  
export default Board  