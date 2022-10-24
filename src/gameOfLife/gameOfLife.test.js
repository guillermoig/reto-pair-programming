import gameOfLife from './gameOfLife';

describe('gameOfLife', () => {
    test("All dead keep like that", () => {
        const initialBoard = [
            ['.', '.', '.'],
            ['.', '.', '.'],
            ['.', '.', '.'],
        ]
        const nextGen = gameOfLife(initialBoard);
        expect(nextGen).toEqual([
            ['.', '.', '.'],
            ['.', '.', '.'],
            ['.', '.', '.'],
        ]);
    })
    test("Only one lives, then dies", () => {
        const initialBoard = [
            ['.', '.', '.'],
            ['.', '*', '.'],
            ['.', '.', '.'],
        ]
        const nextGen = gameOfLife(initialBoard);
        expect(nextGen).toEqual([
            ['.', '.', '.'],
            ['.', '.', '.'],
            ['.', '.', '.'],
        ]);
    })
    test("One live with 2 N, still alive", () => {
        const initialBoard = [
            ['.', '.', '*'],
            ['.', '*', '.'],
            ['*', '.', '.'],
        ]
        const nextGen = gameOfLife(initialBoard);
        expect(nextGen).toEqual([
            ['.', '.', '.'],
            ['.', '*', '.'],
            ['.', '.', '.'],
        ]);
    })
    test("One dead with 3 N, lives", () => {
        const initialBoard = [
            ['*', '.', '.'],
            ['.', '*', '.'],
            ['*', '.', '.'],
        ]
        const nextGen = gameOfLife(initialBoard);
        expect(nextGen).toEqual([
            ['.', '.', '.'],
            ['*', '*', '.'],
            ['.', '.', '.'],
        ]);
    })
    test("Should be the first board", () => {
        const initialBoard = [
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '*', '.', '.', '.'],
            ['.', '.', '.', '*', '*', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
        ]
        const nextGen = gameOfLife(initialBoard);
        expect(nextGen).toEqual([
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '*', '*', '.', '.', '.'],
            ['.', '.', '.', '*', '*', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
        ]);
    })
});
