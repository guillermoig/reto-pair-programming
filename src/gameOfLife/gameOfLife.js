export default function gameOfLife( board ) {
    const result = []
    for (let y = 0; y < board.length; y++){
      for (let x = 0; x < board.length; x++){
        const topLeft = board[y-1][x-1]?? 0
        const topCenter = board[y-1][x]?? 0
        const topRigth = board[y-1][x+1]?? 0
        const centerLeft = board[y][x-1]?? 0
        const centerRigth = board[y][x+1]?? 0
        const bottomLeft = board[y+1][x-1]?? 0
        const bottomCenter = board[y+1][x]?? 0
        const bottomRigth = board[y+1][x+1]?? 0

        const sum = topLeft + topCenter + topRigth + centerLeft + centerRigth + bottomLeft + bottomCenter + bottomRigth
        if (sum === 3) {
          result[y][x] = 1
        }
        else {
          result[y][x] = board[y][x]
        }
      }
    }
    return result
}
