const dic = {
  1: "I",
  5: "V",
  10: "X",
  50: "L"
}

const toRomanNumber = (number) => {
  if(number < 4) return "I".repeat(number)
  if(number === 4) return "IV"
  if(number === 5) return "V"
  if(number === 6) return "VI"
  if(number === 7) return "VII"
  if(number === 8) return "VIII"
  if(number === 9) return "IX"

  return "X"
}

export default toRomanNumber