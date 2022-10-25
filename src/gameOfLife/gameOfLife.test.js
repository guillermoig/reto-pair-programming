import gameOfLife from './gameOfLife';

describe('gameOfLife', () => {
    test("All dead keep like that", () => {
        const initialBoard = [
            '...',
            '...',
            '...'
        ].join("\n");
        const nextGen = gameOfLife(initialBoard);
        expect(nextGen).toEqual(initialBoard);
    })
    test("Only one lives, then dies", () => {
        const initialBoard = [
            '...',
            '.*.',
            '...',
        ].join("\n")

        const expected = [
            '...',
            '...',
            '...'
        ].join("\n");

        const nextGen = gameOfLife(initialBoard);
        expect(nextGen).toEqual(expected);
    })
    test("One live with 2 N, still alive", () => {
        const initialBoard = [
            '..*',
            '.*.',
            '*..',
        ].join("\n")
        
        const expected = [
            '...',
            '.*.',
            '...'
        ].join("\n");

        const nextGen = gameOfLife(initialBoard);
        expect(nextGen).toEqual(expected);
    })
    test("One dead with 3 N, lives", () => {
        const initialBoard = [
            '*..',
            '.*.',
            '*..',
        ].join("\n")
        
        const expected = [
            '...',
            '**.',
            '...'
        ].join("\n");

        const nextGen = gameOfLife(initialBoard);
        expect(nextGen).toEqual(expected);
    })
    test("Should be the first board", () => {
        const initialBoard = [
            '........',
            '....*...',
            '...**...',
            '........',
        ].join("\n")
        const expected = [
            '........',
            '...**...',
            '...**...',
            '........',
        ].join("\n")
        
        const nextGen = gameOfLife(initialBoard);
        expect(nextGen).toEqual(expected);
    })
});
