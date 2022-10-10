import gameOfLife from './gameOfLife';

describe('gameOfLife', () => {
    test("All dead keep like that", () => {
        const initialBoard = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ]
        const nextGen = gameOfLife(initialBoard);
        expect(nextGen).toEqual([
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ]);
    })
    test("Only one lives, then dies", () => {
        const initialBoard = [
            [0, 0, 0],
            [0, 1, 0],
            [0, 0, 0],
        ]
        const nextGen = gameOfLife(initialBoard);
        expect(nextGen).toEqual([
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ]);
    })
    test("One live with 2 N, still alive", () => {
        const initialBoard = [
            [0, 0, 1],
            [0, 1, 0],
            [1, 0, 0],
        ]
        const nextGen = gameOfLife(initialBoard);
        expect(nextGen).toEqual([
            [0, 0, 0],
            [0, 1, 0],
            [0, 0, 0],
        ]);
    })
    test("One dead with 3 N, lives", () => {
        const initialBoard = [
            [1, 0, 0],
            [0, 1, 0],
            [1, 0, 0],
        ]
        const nextGen = gameOfLife(initialBoard);
        expect(nextGen).toEqual([
            [0, 0, 0],
            [1, 1, 0],
            [0, 0, 0],
        ]);
    })
    test("Should be the first board", () => {
        const initialBoard = [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ]
        const nextGen = gameOfLife(initialBoard);
        expect(nextGen).toEqual([
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ]);
    })
});
