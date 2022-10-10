import gameOfLife from './gameOfLife';

describe('gameOfLife', () => {
    test("Should be a board 4x8 by default", () => {
        const game = gameOfLife();
        expect(game).toEqual([
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
        ]);
    })
    test("Should be a customizable board", () => {
        const game = gameOfLife({
            width: 2,
            height: 2,
        });
        expect(game).toEqual([
            [".", "."],
            [".", "."],
        ]);
    })
});