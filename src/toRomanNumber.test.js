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
];

testCases.forEach(({ input, expected }) => {
  test(`converts ${input} to ${expected}`, () => {
    expect(toRomanNumber(input)).toBe(expected);
  });
});
