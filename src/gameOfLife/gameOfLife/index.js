import Board from "./Board";

export default function gameOfLife( initialState ) {
    const board = new Board(initialState);
    return board.next()
}
