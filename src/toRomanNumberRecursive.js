const dic = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M"
}

const toRomanNumber = (number) => {
  if (parseInt(number) === 0) return '';

  let result = ''
  for (const [key, value] of Object.entries(dic).reverse()) {
    if (parseInt(number) === key - 1) {
      number -= key - 1
      result = "I" + value + toRomanNumber(number)
      break;
    }
    else if (parseInt(number) >= key) {
      number -= key
      result = value + toRomanNumber(number)
      break;
    }
  }
  return result
}

export default toRomanNumber
