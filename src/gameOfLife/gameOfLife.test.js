import gameOfLife from './gameOfLife';

describe('gameOfLife', () => {
    test("Should be the first board", () => {
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
    test("Should be the first board", () => {
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
    // test("Should be the first board", () => {
    //     const initialBoard = [
    //         [0, 0, 0, 0, 0, 0, 0, 0],
    //         [0, 0, 0, 0, 1, 0, 0, 0],
    //         [0, 0, 0, 1, 1, 0, 0, 0],
    //         [0, 0, 0, 0, 0, 0, 0, 0],
    //     ]
    //     const nextGen = gameOfLife(initialBoard);
    //     expect(nextGen).toEqual([
    //         [0, 0, 0, 0, 0, 0, 0, 0],
    //         [0, 0, 0, 1, 1, 0, 0, 0],
    //         [0, 0, 0, 1, 1, 0, 0, 0],
    //         [0, 0, 0, 0, 0, 0, 0, 0],
    //     ]);
    // })
});
