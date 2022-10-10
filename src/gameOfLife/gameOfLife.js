const clone = obj => JSON.parse(JSON.stringify(obj))
const getNeighbors = ({ x, y }, board) => {
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
    ].filter(cell => cell !== undefined)
}
export default function gameOfLife( board ) {
    const result = clone(board);

    for (let y = 0; y < board.length; y++){
      for (let x = 0; x < board.length; x++){
        const neightbors = getNeighbors({x, y}, board);
        const sum = neightbors.reduce((a, b) => a + b, 0);

        if (result[y][x] === 1 && (sum == 2 || sum == 3 )) {
            result[y][x] = 1
        }

        else {
          result[y][x] = 0
        }
      }
    }

    return result
}
