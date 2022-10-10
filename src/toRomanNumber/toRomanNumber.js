const dic = {
  // 1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M"
}

const toRomanNumber = (number) => {
  let result = ""
  Object.keys(dic).reverse().forEach(key => {
    const rounds = Math.ceil(number + 1 / key);

    for (let index = 0; index < rounds; index++) {
      if (number === key - 1) {
        result += "I" + dic[key]
        number -= key - 1
        return
      }
      if(number / key < 1) {
        return
      }
      if ((number / key) >= 1) {
        number -= key
        result += dic[key]
      }
    }
  })

	return result + "I".repeat(number);
}

export default toRomanNumber
