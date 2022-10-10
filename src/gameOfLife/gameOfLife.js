export default function gameOfLife({ width = 8, height = 4 } = {}) {
    const rows = Array.from({ length: width }).fill(".")
    const board = Array.from({length: height}).fill(rows);
    
    return board
}