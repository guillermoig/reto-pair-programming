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
  const sortedDic = Object.keys(dic).reverse()
  const predecessor = number > 0 && sortedDic.find((key) => number === key - 1)
  if (predecessor) {
    return "I" + dic[predecessor] + toRomanNumber(number - predecessor + 1)
  }
  const equalGreater = sortedDic.find((key) => number >= key)
  if (equalGreater) {
    return dic[equalGreater] + toRomanNumber(number - equalGreater)
  }
  return '';
}

export default toRomanNumber
