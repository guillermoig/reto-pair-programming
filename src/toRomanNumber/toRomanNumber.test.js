import toRomanNumber from './toRomanNumber.js'

const testCases = [
  { input: 1, expected: "I" },
  { input: 2, expected: "II" },
  { input: 3, expected: "III" },
  { input: 4, expected: "IV" },
  { input: 5, expected: "V" },
  { input: 6, expected: "VI" },
  { input: 7, expected: "VII" },
  { input: 8, expected: "VIII" },
  { input: 9, expected: "IX" },
  { input: 10, expected: "X" },
  { input: 11, expected: "XI" },
  { input: 14, expected: "XIV" },
  { input: 15, expected: "XV" },
  { input: 19, expected: "XIX" },
  { input: 20, expected: "XX" },
  { input: 24, expected: "XXIV" },
  { input: 25, expected: "XXV" },
  { input: 26, expected: "XXVI" },
  { input: 29, expected: "XXIX" },
  { input: 30, expected: "XXX" },
  { input: 38, expected: "XXXVIII" },
  { input: 39, expected: "XXXIX" },
  { input: 65, expected: "LXV" },
  { input: 2022, expected: "MMXXII" },
];

testCases.forEach(({ input, expected }) => {
  test(`converts ${input} to ${expected}`, () => {
    expect(toRomanNumber(input)).toBe(expected);
  });
});
